import React from 'react';

import { mapController } from 'js/controllers/mapController';

import { ReactComponent as InfoBoxIcon } from 'src/images/infoBoxIcon.svg';

import { headerContent } from './header.translations';

interface DropProps {
  language: string;
  alternativeLanguage: string;
  selectedLanguage: string;
}

function valueToLang(abbrev: string): string {
  let lang = '';

  switch (abbrev) {
    case 'en':
      lang = 'English';
      break;
    case 'nl':
      lang = 'Dutch';
      break;
    case 'hy':
      lang = 'Armenian';
      break;
    case 'es':
      lang = 'Spanish';
      break;
    case 'fr':
      lang = 'French';
      break;
    case 'pt':
      lang = 'Portuguese';
      break;
    case 'id':
      lang = 'Indonesian';
      break;
    case 'ka':
      lang = 'Georgian';
      break;
    case 'zh':
      lang = 'Chinese';
      break;
    default:
      break;
  }

  return lang;
}

const LanguageDropdown = (props: DropProps) => {
  const labels = [props.language, props.alternativeLanguage];
  return (
    <div className="language-dropdown-container">
      <ul className="dropdown" role="list">
        <span className="label-wrapper" role="listitem">
          <InfoBoxIcon height={16} width={16} fill={'#555'} />
          <li className="dropdown-label">
            {headerContent[props.selectedLanguage].language}
          </li>
        </span>
        <ul className="options" role="listitem">
          <li
            data-lang={labels[0]}
            role="button"
            aria-labelledby="dropdown-label"
            id={`dropdown__selected ${
              headerContent[props.selectedLanguage].language
            }`}
            tabIndex={0}
            onClick={(): void => mapController.changeLanguage(props.language)}
            className={`app-header__language
              ${props.selectedLanguage === props.language ? 'selected' : ''}
           `}
          >
            {valueToLang(props.language)}
          </li>
          <li
            data-lang={labels[1]}
            role="button"
            aria-labelledby="dropdown-label"
            id={`dropdown__selected ${props.alternativeLanguage}`}
            tabIndex={0}
            onClick={(): void =>
              mapController.changeLanguage(props.alternativeLanguage)
            }
            className={`app-header__language
              ${props.selectedLanguage === props.language ? 'selected' : ''}
           `}
          >
            {valueToLang(props.alternativeLanguage)}
          </li>
        </ul>
      </ul>
    </div>
  );
};

export default LanguageDropdown;
