import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import * as React from 'react';
import { DATE_PICKER_START_DATES, LAYER_IDS } from '../../../../configs/layer-config';
import { mapController } from '../../controllers/mapController';
import { LayerFactory } from '../../helpers/LayerFactory';
import {
  setIntegratedAlertLayerEnd,
  setIntegratedAlertLayerStart,
  setHighConfidenceConfirmed,
  setGladStart,
  setGladEnd,
  setGlad2Start,
  setGlad2End,
  setRaddAlertEnd,
  setRaddAlertStart,
} from '../../store/appState/actions';
import {
  geoCoverageConfig,
  layerControlsTranslations,
  showConfidenceAlertsConfig,
} from '../../../../configs/translations/leftPanel.translations';
import {
  onEndDateChange,
  onStartDateChange,
  showGeographicCoverage,
  handleDateToggle,
} from './helpers/IntegratedAlertControlsHelper';
import DatePicker from 'react-datepicker';
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
  const gfwIntegratedEnd = useSelector((store: RootState) => store.appState.leftPanel.gfwIntegratedEnd);
  const integratedAlertLayer = useSelector((store: RootState) => store.appState.leftPanel.integratedAlertLayer);
  const allAvailableLayers = useSelector((store: RootState) => store.mapviewState.allAvailableLayers);

  const [startDate, setStartDate] = React.useState(String(DATE_PICKER_START_DATES.GFW_INTEGRATED_ALERTS));
  const [startDateUnformatted, setStartDateUnformatted] = React.useState(
    String(DATE_PICKER_START_DATES.GFW_INTEGRATED_ALERTS)
  );
  const [endDate, setEndDate] = React.useState(gfwIntegratedEnd);

  async function handleStartDateChange(day: any) {
    const year = new Date(day).getFullYear();
    const month = new Date(day).getMonth();
    const dayOfMonth = new Date(day).getDate();
    const date = new Date(year, month, dayOfMonth).toLocaleString();
    const dFormat = date;

    setStartDate(dFormat);
    setStartDateUnformatted(day);

    onStartDateChange(dFormat, endDate);
  }

  async function handleEndDateChange(day: any) {
    const year = new Date(day).getFullYear();
    const month = new Date(day).getMonth();
    const dayOfMonth = new Date(day).getDate();
    const date = new Date(year, month, dayOfMonth).toLocaleString();
    const dFormat = date;

    setEndDate(dFormat);

    onEndDateChange(date, dFormat);
  }

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
    mapController.displayLayerByIntegratedAlertLayer(integratedAlertLayer);
    mapController.displayGeographicCoverageLayer(integratedAlertLayer, geographicCoverage);
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

      <div className="calendar-wrapper">
        <div className="date-section-wrapper">
          <label htmlFor="start-date">{layerControlsTranslations[props.selectedLanguage].timeStart}</label>
          <DatePicker
            showMonthDropdown
            showYearDropdown
            dropdownMode="select"
            placeholderText="select a day"
            onChange={(date) => handleStartDateChange(date)}
            selected={new Date(handleDateToggle(startDate, endDate)?.start)}
            minDate={new Date(DATE_PICKER_START_DATES.GFW_INTEGRATED_ALERTS)}
            maxDate={new Date(endDate)}
          />
        </div>
        <div className="date-section-wrapper">
          <label htmlFor="end-date">{layerControlsTranslations[props.selectedLanguage].timeEnd}</label>
          <DatePicker
            showMonthDropdown
            showYearDropdown
            dropdownMode="select"
            placeholderText="select a day"
            onChange={(date) => handleEndDateChange(date)}
            selected={new Date(handleDateToggle(startDate, endDate).end)}
            minDate={new Date(startDateUnformatted)}
            maxDate={new Date()}
          />
        </div>
      </div>
    </div>
  );
};

export default IntegratedAlertControls;
