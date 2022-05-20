import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../store';
import Slider, { createSliderWithTooltip } from 'rc-slider';
import 'rc-slider/assets/index.css';
import '../../../../css/canopyDensityModal.scss';
import { setCanopyDensity } from '../../../store/appState/actions';
import { mapController } from '../../../controllers/mapController';

import { canopyDensityContentConfig } from '../../../../../configs/translations/modal.tanslations';

const SliderWithTooltip = createSliderWithTooltip(Slider);

//TODO: This needs to be Language aware

export const forestCarbonNetFluxValue = {
  2: 30,
  3: 50,
  4: 75,
};
const marks = {
  2: { label: '30%', style: {} },
  3: { label: '50%', style: {} },
  4: { label: '75%', style: {} },
};

const ForestCarbonNetFluxContent = (): JSX.Element => {
  const dispatch = useDispatch();
  const density = useSelector((store: RootState) => store.appState.leftPanel.density);
  const customColorTheme = useSelector((store: RootState) => store.appSettings.customColorTheme);
  const selectedLanguage = useSelector((store: RootState) => store.appState.selectedLanguage);
  const { directions } = canopyDensityContentConfig[selectedLanguage];

  async function handleSliderChange(value: number): Promise<void> {
    dispatch(setCanopyDensity(value));
    //send % value to modify the layer
    mapController.updateDensityValue(forestCarbonNetFluxValue[value]);
    mapController.updateBiodensityValue(value);
  }

  return (
    <div className="canopy-density-container">
      <div>{directions}</div>
      <div className="tree-range">
        <div className="tree"></div>
        <div className="forest"></div>
      </div>
      <SliderWithTooltip
        min={0}
        max={8}
        step={null}
        marks={marks}
        defaultValue={density ?? forestCarbonNetFluxValue[4]}
        tipFormatter={(val: number): string => forestCarbonNetFluxValue[val] + '%'}
        railStyle={{ height: 10, backgroundColor: customColorTheme }}
        trackStyle={{ backgroundColor: '#e9e9e9', height: 10 }}
        activeDotStyle={{ border: '2px solid #e9e9e9' }}
        dotStyle={{
          border: `2px solid ${customColorTheme}`,
          height: 10,
          width: 10,
          bottom: -6,
        }}
        handleStyle={{
          border: `2px solid ${customColorTheme}`,
          height: 20,
          width: 20,
        }}
        onChange={handleSliderChange}
      />
    </div>
  );
};

export default ForestCarbonNetFluxContent;
