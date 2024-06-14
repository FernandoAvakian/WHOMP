import * as React from 'react';
import { useState } from 'react';
import clsx from 'clsx';
import { useSelector, useDispatch } from 'react-redux';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid';
import { RootState } from '../../../../js/store';
import { setOpenLayerGroup } from '../../../../js/store/appState/actions';
import ImagerySlider from './RecentImagery/ImagerySlider';
import RecentImagery from './RecentImagery/RecentImageryModal';
import { format } from 'date-fns';
import { mapController } from '../../../../js/controllers/mapController';
import styled from 'styled-components';

import '../../../../css/layer-toggle-checkbox.scss';
import { handleCustomColorTheme } from '../../../../utils';

interface CheckBoxWrapperProps {
  customColorTheme: string;
}
//Override speudo element styling with our custom style
const CheckboxWrapper = styled.div<CheckBoxWrapperProps>`
  .styled-checkbox:checked + .styled-checkboxlabel:before {
    background-color: ${(props) => props.customColorTheme};
  }
`;

interface LayerGroupProps {
  layerGroupKey: string;
  layerGroupConfig: any;
}

const ImageryLayersGroup = (props: LayerGroupProps): React.ReactElement => {
  const [imageryModalOpen, setImageryModalOpen] = useState(false);
  const [toggleIsOn, setToggleIsOn] = useState(false);
  const [hoverTileData, setHoverTileData] = useState('');

  interface ImageryInfo {
    [key: string]: any;
    info: any;
    selectedLanguage: string;
    id?: string;
  }
  const ImageryLayerControl = (props: ImageryInfo): JSX.Element => {
    const customColorTheme = useSelector((store: RootState) => store.appSettings.customColorTheme);
    const themeColor = handleCustomColorTheme(customColorTheme);

    const parseDynamicSublabel = (): string => {
      if (hoverTileData) {
        let sublabelBase = props.info.layers[0].dynamicSublabel[props.selectedLanguage];
        if (sublabelBase) {
          const parsedDate = Date.parse(props.hoverTileData.date_time);
          const formatHoverDay = format(parsedDate, 'dd-MMM-yyyy');
          const hoverCloud = Math.round(props.hoverTileData.cloud_score);
          sublabelBase = sublabelBase.replace('{DATE_TIME}', formatHoverDay);
          sublabelBase = sublabelBase.replace('{CLOUD_COVERAGE}', hoverCloud);
          sublabelBase = sublabelBase.replace('{INSTRUMENT}', props.hoverTileData.instrument);
        }
        return sublabelBase;
      } else {
        return '';
      }
    };

    return (
      <div className="space-y-2">
        <div className="layers-control-checkbox flex items-center justify-between space-x-2">
          <div className="label-wrapper flex">
            <div className="label-control-top flex items-center space-x-2">
              <ImageryLayerSwitch layerID={props.id} customColorTheme={themeColor} />
              <div className="text-gray-dark text-xs font-bold">
                {props.info?.label[props.selectedLanguage] || 'Imagery Layer'}
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <button
              style={{ border: `1px solid ${themeColor}` }}
              className="btn-secondary px-2 py-1"
              onClick={(): void => setImageryModalOpen(true)}
            >
              EDIT
            </button>
          </div>
        </div>
        <p
          className="layer-subtitle"
          style={{
            margin: 0,
            paddingLeft: '2rem',
            fontSize: '0.7rem',
            color: '#aaa',
          }}
        >
          {parseDynamicSublabel()}
        </p>
        {props.id && <ImagerySlider layerID={props.id} />}
      </div>
    );
  };

  interface ImageryToggleProps {
    layerID?: string;
    customColorTheme: string;
  }
  const ImageryLayerSwitch = (props: ImageryToggleProps): JSX.Element => {
    let imageryLayer: any;
    if (props.layerID) {
      imageryLayer = mapController._map?.findLayerById(props.layerID);
    }

    const handleImagerySwitch = (e: any): void => {
      const checked = e.target.checked;

      setToggleIsOn(checked);
      setImageryModalOpen(checked);

      if (imageryLayer.urlTemplate) {
        imageryLayer.visible = checked;
      }
    };

    return (
      <CheckboxWrapper customColorTheme={props.customColorTheme}>
        <div className="layer-checkbox imagery flex items-center">
          <input
            type="checkbox"
            name="styled-checkbox"
            className="styled-checkbox"
            id={`layer-checkbox-${props.layerID}`}
            checked={toggleIsOn}
            onChange={handleImagerySwitch}
          />
          <label className="styled-checkboxlabel" htmlFor={`layer-checkbox-${props.layerID}`}>
            {props.layerID}
          </label>
        </div>
      </CheckboxWrapper>
    );
  };

  const { layerGroupKey, layerGroupConfig } = props;

  const selectedLanguage = useSelector((store: RootState) => store.appState.selectedLanguage);

  const openLayerGroup = useSelector((store: RootState) => store.appState.leftPanel.openLayerGroup);

  const allAvailableLayers = useSelector((store: RootState) => store.mapviewState.allAvailableLayers);

  const imagerylayer = allAvailableLayers.find((l) => l.id === layerGroupConfig.layers[0].id);

  const imageryLayerOnMap = mapController._map?.findLayerById(layerGroupConfig.layers[0].id);

  const dispatch = useDispatch();

  const layerGroupTitle = layerGroupConfig.label?.[selectedLanguage] || 'Recent Imagery';

  const groupOpen = openLayerGroup === layerGroupKey;

  const handleGroupToggle = (): void => {
    const openGroupKey = groupOpen ? '' : layerGroupKey;
    dispatch(setOpenLayerGroup(openGroupKey));
  };

  const handleCloseModal = (): void => {
    setImageryModalOpen(false);
  };

  const handleTileHover = (data: any): void => {
    setHoverTileData(data.attributes);
  };

  return (
    <>
      <div className="layer-group-container">
        <div
          className="layer-group-title"
          onClick={handleGroupToggle}
          onKeyPress={handleGroupToggle}
          role="button"
          tabIndex={0}
        >
          <span>{layerGroupTitle}</span>
          <button className="caret-button" onClick={handleGroupToggle}>
            {groupOpen ? <ChevronDownIcon className="h-4 w-4" /> : <ChevronUpIcon className="h-4 w-4" />}
          </button>
        </div>
        <div className={clsx('mt-4', { hidden: !groupOpen })}>
          <ImageryLayerControl
            hoverTileData={hoverTileData}
            selectedLanguage={selectedLanguage}
            info={layerGroupConfig}
            id={imageryLayerOnMap?.id}
            opacity={imagerylayer?.opacity}
          />
        </div>
      </div>
      {imageryModalOpen && <RecentImagery modalHandler={handleCloseModal} handleTileHover={handleTileHover} />}
    </>
  );
};

export default ImageryLayersGroup;
