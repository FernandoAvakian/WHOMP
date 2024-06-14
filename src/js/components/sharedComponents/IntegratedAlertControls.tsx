import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import * as React from 'react';
import { LAYER_IDS } from '../../../../configs/layer-config';
import { mapController } from '../../controllers/mapController';
import { LayerFactory } from '../../helpers/LayerFactory';
import { setHighConfidenceConfirmed, setGeographicCoverage } from '../../store/appState/actions';
import { geoCoverageConfig, showConfidenceAlertsConfig } from '../../../../configs/translations/leftPanel.translations';
import { displayGeographicCoverageLayer } from './helpers/IntegratedAlertControlsHelper';
import styled from 'styled-components';

//Dynamic custom theme override using styled-components lib
interface CheckBoxWrapperProps {
  customColorTheme: string;
}

const CheckboxWrapper = styled.div<CheckBoxWrapperProps>`
  .styled-checkbox:checked + .styled-checkboxlabel:before {
    background-color: ${(props) => props.customColorTheme};
  }
`;
interface GladControlsProps {
  customColorTheme: string;
  layerConfig: any;
  selectedLanguage: string;
  type?: string;
}

const IntegratedAlertControls = (props: GladControlsProps): JSX.Element => {
  const dispatch = useDispatch();
  const highConfidenceConfirmed = useSelector((store: RootState) => store.appState.leftPanel.highConfidenceConfirmed);
  const geographicCoverage = useSelector((store: RootState) => store.appState.leftPanel.geographicCoverage);
  const integratedAlertLayer = useSelector((store: RootState) => store.appState.leftPanel.integratedAlertLayer);
  const allAvailableLayers = useSelector((store: RootState) => store.mapviewState.allAvailableLayers);

  async function showOnlyHighConfidenceToggle() {
    dispatch(setHighConfidenceConfirmed(!highConfidenceConfirmed));
    if (integratedAlertLayer === 'GFW_INTEGRATED_ALERTS') {
      const gfwIntegratedLayerOld: any = mapController._map!.findLayerById(LAYER_IDS.GFW_INTEGRATED_ALERTS);
      mapController._map?.remove(gfwIntegratedLayerOld);
      const gfwIntegratedLayerNew: any = LayerFactory(mapController._mapview, props.layerConfig);
      gfwIntegratedLayerNew.highConfidenceConfirmed = !highConfidenceConfirmed;
      mapController._map?.add(gfwIntegratedLayerNew);
    } else {
      const gladLayerOld: any = mapController._map!.findLayerById(integratedAlertLayer);
      mapController._map?.remove(gladLayerOld);
      const gladLayerConfig: any = allAvailableLayers.filter((layer: any) => layer.id === integratedAlertLayer);
      const gladLayerNew: any = await LayerFactory(mapController._mapview, gladLayerConfig[0]);
      gladLayerNew.confirmed = !highConfidenceConfirmed;
      mapController._map?.add(gladLayerNew);
      const selectedLayer = mapController._map!.findLayerById(integratedAlertLayer);
      selectedLayer.visible = true;
    }
  }

  async function showGeographicCoverage() {
    dispatch(setGeographicCoverage(!geographicCoverage));
    displayGeographicCoverageLayer(integratedAlertLayer, geographicCoverage);
  }

  const confidenceAlertLabel = showConfidenceAlertsConfig[props.selectedLanguage];
  const geoCoverageLabel = geoCoverageConfig[props.selectedLanguage];

  return (
    <div className="glad-control-wrapper">
      <>
        <div className="glad-control-container">
          <div className="layer-checkbox">
            <CheckboxWrapper customColorTheme={props.customColorTheme}>
              <input
                title="High and Highest Confidence Alerts"
                type="checkbox"
                name="styled-checkbox"
                className="styled-checkbox"
                id="layer-checkbox-glad"
                checked={highConfidenceConfirmed}
                onChange={showOnlyHighConfidenceToggle}
              />
              <label className="styled-checkboxlabel" htmlFor="layer-checkbox-glad"></label>
            </CheckboxWrapper>
          </div>
          <p>{confidenceAlertLabel?.label}</p>
        </div>
        <div className="gfw-control-container" style={{ marginTop: 5 }}>
          <div className="layer-checkbox">
            <CheckboxWrapper customColorTheme={props.customColorTheme}>
              <input
                title="Geographic Coverage"
                type="checkbox"
                name="styled-checkbox"
                className="styled-checkbox"
                id="layer-checkbox-gfw"
                checked={geographicCoverage}
                onChange={showGeographicCoverage}
              />
              <label className="styled-checkboxlabel" htmlFor="layer-checkbox-gfw"></label>
            </CheckboxWrapper>
          </div>
          <p>{geoCoverageLabel?.label}</p>
        </div>
      </>
    </div>
  );
};

export default IntegratedAlertControls;
