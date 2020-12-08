import React, { FunctionComponent } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import UploadFile from 'js/components/sharedComponents/UploadFile';
import { renderModal } from 'js/store/appState/actions';
import { mapController } from 'js/controllers/mapController';
import { penContent } from 'configs/translations/modal.tanslations';
import { PolygonIcon } from 'images/PolygonIcon';
import { ReactComponent as PenIcon } from 'images/penIcon.svg';
import { ReactComponent as PlusIcon } from 'images/plusIcon.svg';

import 'css/penContent.scss';

const PenContent: FunctionComponent = () => {
  const dispatch = useDispatch();

  const selectedLanguage = useSelector(
    (state: any) => state.appState.selectedLanguage
  );
  const customColorTheme = useSelector(
    (state: any) => state.appSettings.customColorTheme
  );
  const {
    drawTitle,
    drawInstructions,
    drawButton,
    coordinatesTitle,
    coordinatesInstructions,
    coordinatesButton
  } = penContent[selectedLanguage];

  const setDrawTool = () => {
    dispatch(renderModal(''));
    mapController.createPolygonSketch();
  };

  return (
    <div className="pen-content-container">
      <div className="directions">
        <figure>
          <figcaption className="title">
            <h4>{drawTitle}</h4>
          </figcaption>
          <ol>
            {drawInstructions.map((direction: string, i: number) => (
              <li key={i}>{direction}</li>
            ))}
          </ol>
        </figure>
        <PolygonIcon
          customColorTheme={customColorTheme}
          height={75}
          width={100}
        />
        <button
          className="orange-button"
          style={{ backgroundColor: customColorTheme }}
          onClick={() => setDrawTool()}
        >
          <PenIcon fill={'#000'} height={25} width={25} />
          {drawButton}
        </button>
        <hr />
        <figure>
          <figcaption className="title">
            <h4>{coordinatesTitle}</h4>
          </figcaption>
          <ol>
            {coordinatesInstructions.map((direction: string, i: number) => (
              <li key={i}>{direction}</li>
            ))}
          </ol>
        </figure>
        <button
          className="orange-button"
          style={{ backgroundColor: customColorTheme }}
          onClick={() => dispatch(renderModal('PenWidget-CoordinatesForm'))}
        >
          <PlusIcon fill={'#fff'} height={25} width={25} />
          {coordinatesButton}
        </button>
        <hr />
        <UploadFile />
      </div>
    </div>
  );
};

export default PenContent;
