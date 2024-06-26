import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { ArrowUturnLeftIcon } from '@heroicons/react/24/outline';

import { RootState } from '../../../store';
import BaseButton from '../../ui/BaseButton';
import { BackIcon } from '../../../../images/backIcon';
import {
  setMultiPolygonSelectionMode,
  setActiveMultiInput,
  setAnalysisFeatureList,
} from '../../../store/appState/actions';
import { mapController } from '../../../controllers/mapController';
import MethodSelection from './multiPolyAnalysis/MethodSelection';
import { DeleteIcon } from '../../../../images/deleteIcon';
import {
  clearMultiPolygonLayer,
  deleteMultiPolygonLayer,
  removeIntersectingGraphic,
} from '../../../helpers/MapGraphics';
import { AnalyzingIcon } from '../../../../images/analyzingIcon';
import { ErrorIcon } from '../../../../images/errorIcon';
import { setActiveFeatures } from '../../../store/mapview/actions';
import { handleCustomColorTheme } from '../../../../utils';
import { analysisContent } from '../../../../../configs/translations/leftPanel.translations';

interface Props {
  initAnalyze: (val: boolean) => void;
}
const MultiPolygonAnalysis = ({ initAnalyze }: Props) => {
  const dispatch = useDispatch();
  const selectedLanguage = useSelector((store: RootState) => store.appState.selectedLanguage);

  const analysisFeatureList = useSelector((store: RootState) => store.appState.analysisFeatureList, shallowEqual);
  const customColorTheme = useSelector((store: RootState) => store.appSettings.customColorTheme);

  const [overlap, setOverlap] = React.useState<'intersect' | 'analyzing' | 'failed' | 'idle'>('idle');

  const themeColor = handleCustomColorTheme(customColorTheme);

  const { overlappingShapeTitle, overlappingShapeDirections, overlappingShapeButton, selectShape, back, analyze } =
    analysisContent[selectedLanguage];

  React.useEffect(() => {
    if (analysisFeatureList[0] && analysisFeatureList[1]) {
      setOverlap('analyzing');
      //check if we have overlap between the two!
      mapController
        .checkIntersection(analysisFeatureList[0].features[0].geometry, analysisFeatureList[1].features[0].geometry)
        .then((intersects) => {
          setOverlap(intersects ? 'intersect' : 'failed');
        });
    }
  }, [analysisFeatureList]);

  const handleInputSelection = React.useCallback(
    (inputIndex: number) => {
      const oldState = analysisFeatureList;
      oldState[inputIndex] = undefined;
      dispatch(setAnalysisFeatureList(oldState));
      dispatch(setActiveMultiInput(inputIndex));
    },
    [analysisFeatureList, dispatch]
  );

  const SelectedShapeContainer = ({ label, inputIndex }) => {
    const handleClearSingleAnalysis = React.useCallback((inputIndex: number) => {
      setOverlap('idle');

      mapController.clearGraphicFromMultiSelection(inputIndex);
      //because we are removing one of the geometry selections, by definition we wont have any geometries intersecting, so newly drawn intersection graphic needs to go away
      removeIntersectingGraphic();
      deleteMultiPolygonLayer(analysisFeatureList[inputIndex]);

      const oldState = [...analysisFeatureList];
      oldState[inputIndex] = undefined;
      dispatch(setAnalysisFeatureList(oldState));
      if (!(analysisFeatureList[0] && analysisFeatureList[1])) {
        dispatch(setMultiPolygonSelectionMode(false));
      }

      initAnalyze(false);
    }, []);

    const Container = styled.div`
      padding: 5px 5px 5px 7px;
      display: grid;
      grid-template-columns: 1fr auto;
    `;
    const Wrap = styled.div`
      background-color: #fff;
      background-image: linear-gradient(to top, #f9f9f9, #fff 33%);
      line-height: 1.1;
      align-items: center;
      display: grid;
      height: 35px;
      border: 1px solid ${themeColor};
      color: #242121;
      font-size: 0.9rem;
      padding: 5px;
    `;
    const DeleteButton = styled.button`
      outline: none;
      background: transparent;
      border: 0;
    `;
    return (
      <Container>
        <Wrap>{label}</Wrap>
        <DeleteButton
          onClick={() => {
            handleClearSingleAnalysis(inputIndex);
          }}
        >
          <DeleteIcon width={18} height={18} fill={'#ec5555'} />
        </DeleteButton>
      </Container>
    );
  };

  const FailedStatus = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    font-size: 0.9rem;
    color: #e80000;
    p {
      border: 0;
      padding: 0;
      margin: 0;
      line-height: 20px;
    }
  `;

  const AnalyzingStatus = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    font-size: 0.9rem;
    color: ${themeColor};
    p {
      border: 0;
      padding: 0;
      margin: 0;
      line-height: 20px;
    }
  `;

  return (
    <div className="px-10 py-8 space-y-4">
      <p>{overlappingShapeTitle}</p>
      {!analysisFeatureList[0] ? (
        <MethodSelection
          handleInputSelection={handleInputSelection}
          customColorTheme={themeColor}
          selectedLanguage={selectedLanguage}
          placeholder={`${selectShape} 1 ...`}
          inputIndex={0}
        />
      ) : (
        <SelectedShapeContainer inputIndex={0} label={`${selectShape} 1 ...`} />
      )}
      {!analysisFeatureList[1] ? (
        <MethodSelection
          handleInputSelection={handleInputSelection}
          customColorTheme={themeColor}
          selectedLanguage={selectedLanguage}
          placeholder={`${selectShape} 2 ...`}
          inputIndex={1}
        />
      ) : (
        <SelectedShapeContainer inputIndex={1} label={`${selectShape} 2 ...`} />
      )}
      {overlap === 'analyzing' && (
        <AnalyzingStatus>
          <AnalyzingIcon width={20} height={20} />
          <p>Detecting Overlapping Area ...</p>
        </AnalyzingStatus>
      )}
      {overlap === 'failed' && (
        <FailedStatus>
          <ErrorIcon width={20} height={20} />
          <p>Overlapping Area Not Detected</p>
        </FailedStatus>
      )}
      <div className="flex items-center space-x-2 border-t border-gray-light py-4">
        <button
          className="btn-secondary"
          type="button"
          onClick={() => {
            dispatch(setMultiPolygonSelectionMode(false));
            //clear polygons from redux and the map
            dispatch(setAnalysisFeatureList([undefined, undefined]));
            dispatch(setActiveFeatures([]));
            removeIntersectingGraphic();
            clearMultiPolygonLayer();
          }}
        >
          <ArrowUturnLeftIcon className="h-4 w-4" />
          <span>{back}</span>
        </button>
        <button
          type="button"
          className="btn"
          disabled={overlap !== 'intersect'}
          onClick={() => {
            initAnalyze(true);
          }}
        >
          {analyze}
        </button>
      </div>
    </div>
  );
};

export default React.memo(MultiPolygonAnalysis);
