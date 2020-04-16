import * as React from 'react';
import { ReactComponent as ShareIcon } from '../../images/shareIcon.svg';
import { ReactComponent as PrintIcon } from '../../images/printIcon.svg';
import { useDispatch, useSelector } from 'react-redux';
import { renderModal } from 'js/store/appState/actions';
import { RootState } from 'js/store/index';
import 'css/report.scss';

import { geojsonToArcGIS } from 'js/helpers/spatialDataTransformation';
import { mapController } from 'js/controllers/mapController';
import { esriQuery } from 'js/helpers/dataPanel/esriQuery';
import { getAttributesToFetch } from 'js/helpers/dataPanel/getAttributes';
import { getAllLayerFields } from 'js/helpers/dataPanel/DataPanel';
import { formatAttributeValues } from 'js/helpers/dataPanel/formatAttributes';
import { ReportTable } from './ReportTable';

const geostoreURL = 'https://production-api.globalforestwatch.org/v1/geostore/';

interface ActiveLayerInfo {
  sub: any;
  parentLayer: any;
  sublayer?: boolean;
}
interface ReportProps {
  mapview: React.FunctionComponent;
}

const Report = (props: ReportProps): JSX.Element => {
  const dispatch = useDispatch();

  const allAvailableLayers = useSelector(
    (store: RootState) => store.mapviewState.allAvailableLayers
  );

  const layersLoading = useSelector(
    (store: RootState) => store.mapviewState.layersLoading
  );

  const [featureGeometry, setFeatureGeometry] = React.useState<any>('');
  const [geostoreID, setGeostoreID] = React.useState('');
  const [sublayerTitle, setSublayerTitle] = React.useState('');
  const [layerTitle, setLayerTitle] = React.useState('');
  const [attributes, setAttributes] = React.useState<null | object>(null);

  const isMapReady = useSelector(
    (store: RootState) => store.mapviewState.isMapReady
  );
  console.log(isMapReady);

  React.useEffect(() => {
    //disable map interactions
    mapController.disableMapInteractions();
    const geostoreID = new URL(window.location.href).searchParams.get(
      'geostoreID'
    );
    console.log(geostoreID);
    //On load using geostoreID coming from the URL, fetch information about the active feature
    async function fetchGeostoreInfo(): Promise<any> {
      fetch(`${geostoreURL}${geostoreID}`)
        .then(response => response.json())
        .then(data => setFeatureGeometry(data.data.attributes))
        .catch(e => console.error(e));
    }
    fetchGeostoreInfo();
  }, []);

  React.useEffect(() => {
    //Transform geojson retrieved earlier to usable esri geometry
    async function getFeatures(
      activeLayer: any,
      activeLayerInfo: ActiveLayerInfo,
      objectID: any
    ): Promise<any> {
      console.log(activeLayerInfo);

      //Get The Fields

      const fields = activeLayerInfo.sublayer
        ? await getAllLayerFields(activeLayerInfo.sub)
        : await getAllLayerFields(activeLayerInfo.parentLayer);
      console.log(fields);

      // Get all attributes that we want to fetch
      const layerToQuery = activeLayerInfo.sublayer
        ? activeLayerInfo.sub
        : activeLayerInfo.parentLayer;
      const attributesToUse = getAttributesToFetch(
        layerToQuery,
        activeLayerInfo.sub,
        fields
      );
      console.log(attributesToUse);
      const layerOutFields = attributesToUse?.map(f => f.fieldName);
      const qParams = {
        where: '1=1',
        outFields: layerOutFields,
        returnGeometry: false,
        objectIds: objectID
      };

      let url = activeLayer.url;
      //TODO: This needs a refactor so we do not compare strings below but always expect the "right" URL to be coming in
      //In case of FIRES, VIIRS we added layers wrong at the initializemap, so we have do point at a sublayer url explicitly, all other layers should work as expected
      if (
        activeLayer.id === 'VIIRS_ACTIVE_FIRES' ||
        activeLayer.id === 'MODIS_ACTIVE_FIRES'
      ) {
        url = url.concat('/21');
      }
      const responseAttributes = await esriQuery(url, qParams);
      const formattedAttributes = formatAttributeValues(
        responseAttributes.features[0].attributes,
        attributesToUse
      );
      console.log(formattedAttributes);
      console.log(responseAttributes);
      setAttributes({
        attributes: formattedAttributes,
        fields: attributesToUse
      });
      setLayerTitle(activeLayer.title);
    }
    if (featureGeometry && isMapReady && !layersLoading) {
      const esriGeo = geojsonToArcGIS(featureGeometry.geojson);

      //Add Geometry graphic to the map
      if (esriGeo[0].geometry.hasOwnProperty('rings')) {
        //Dealing with a poly
        mapController.addActiveFeatureGraphic(esriGeo);
      } else {
        //Dealing with a point
        mapController.addActiveFeaturePointGraphic(esriGeo[0]);
      }

      //Grab active Feature layerid, sublayerid and objectid from the url
      const layerID = new URL(window.location.href).searchParams.get('acLayer');
      const sublayerID = new URL(window.location.href).searchParams.get(
        'acSublayer'
      );
      const objectID = new URL(window.location.href).searchParams.get(
        'objectid'
      );
      console.log(layerID);
      console.log(sublayerID);
      console.log(allAvailableLayers);
      //Find Layer URL that we would Query
      let activeLayer: any;
      allAvailableLayers.forEach(l => {
        if (l.parentID) {
          //we are dealing with a sublayer
          if (l.parentID === layerID) {
            if (String(l.id) === String(sublayerID)) {
              console.log('found', l);
              activeLayer = l;
            }
          }
        } else {
          if (l.id === layerID) {
            //we are dealing with normal layer
            console.log('found', l);
            activeLayer = l;
          }
        }
      });
      console.log(activeLayer);

      const activeLayerInfo = {} as ActiveLayerInfo;
      //Find said layer on the map
      if (!mapController._map) return;
      if (activeLayer.parentID) {
        //we are dealing with a sublayer
        activeLayerInfo.sublayer = true;
        const parentLayer: any = mapController._map.findLayerById(
          activeLayer.parentID
        );
        activeLayerInfo.parentLayer = parentLayer;
        activeLayerInfo.sub = parentLayer.allSublayers.items.find(
          (s: any) => s.id === Number(activeLayer.id)
        );
        // const attr = getAttributesToFetch(sublayer, true);
      } else {
        activeLayerInfo.sublayer = false;
        const parentLayer = mapController._map.findLayerById(
          activeLayer.parentID
        );
        activeLayerInfo.parentLayer = parentLayer;
      }
      getFeatures(activeLayer, activeLayerInfo, objectID);
    }
  }, [featureGeometry, layersLoading]);

  function printReport(): void {
    window.print();
  }

  function shareReport(): void {
    dispatch(renderModal('ShareWidget'));
  }

  // Forêts communautaires: Forêts communautaires
  return (
    <div className="report">
      <div className="report-header">
        <p className="title">{`${window.document.title} Custom Analysis`}</p>
        <button onClick={printReport}>
          <PrintIcon height={25} width={25} fill={'#fff'} />
        </button>
        <button onClick={shareReport}>
          <ShareIcon height={28} width={28} fill={'#fff'} />
        </button>
      </div>
      <div className="report-map">
        <props.mapview />
      </div>
      <div className="report-analysis">
        <p className="analysis-title">AREA OF ANALYSIS</p>
        <p className="analysis-subtitle">{layerTitle}</p>
        {attributes && <ReportTable attr={attributes} />}
      </div>
      <div className="report-charts">
        <p>Charts area</p>
      </div>
    </div>
  );
};

export default Report;
