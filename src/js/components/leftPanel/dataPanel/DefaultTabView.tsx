import * as React from 'react';
import { useSelector } from 'react-redux';

import { dataTabConfig } from '../../../../../configs/translations/leftPanel.translations';

import { RootState } from '../../../../js/store/index';

interface DefaultTabViewProps {
  customColorTheme: string;
}

const DefaultTabView = (props: DefaultTabViewProps): JSX.Element => {
  const selectedLanguage = useSelector((state: RootState) => state.appState.selectedLanguage);
  const { header, instructionsList } = dataTabConfig[selectedLanguage];

  return (
    <div className="data-tab-default-container space-y-4">
      <div className="space-y-4">
        <h3 className="font-bold">{header}</h3>
        <ol className="list-decimal pl-8 text-xs space-y-2">
          {instructionsList.map((instruction: string, index: number) => (
            <li key={index}>{instruction}</li>
          ))}
        </ol>
      </div>
      <svg className="svg-icon" style={{ width: 95, height: 75 }}>
        <svg id="icon-analysis-poly" viewBox="0 0 109 86">
          <title>Analysis Click Polygon</title>
          <g>
            <path
              className="cls-3"
              fill={props.customColorTheme}
              opacity="0.2"
              d="M19.000,74.000 C19.000,74.000 8.000,35.000 8.000,35.000 C8.000,35.000 50.000,10.000 50.000,10.000 C50.000,10.000 54.000,9.000 54.000,9.000 C54.000,9.000 99.000,35.000 99.000,35.000 C99.000,35.000 91.000,74.000 91.000,74.000 C91.000,74.000 19.000,74.000 19.000,74.000 Z"
              fillRule="evenodd"
            ></path>
            <path
              className="cls-4"
              fill={props.customColorTheme}
              d="M9.772,35.286 C9.772,35.286 8.228,32.714 8.228,32.714 C8.228,32.714 53.228,5.714 53.228,5.714 C53.228,5.714 54.772,8.286 54.772,8.286 C54.772,8.286 9.772,35.286 9.772,35.286 Z"
              fillRule="evenodd"
            ></path>
            <path
              className="cls-4"
              fill={props.customColorTheme}
              d="M19.438,70.573 C19.438,70.573 16.562,71.427 16.562,71.427 C16.562,71.427 5.562,34.427 5.562,34.427 C5.562,34.427 8.438,33.573 8.438,33.573 C8.438,33.573 19.438,70.573 19.438,70.573 Z"
              fillRule="evenodd"
            ></path>
            <path
              className="cls-4"
              fill={props.customColorTheme}
              d="M17.020,74.500 C17.020,74.500 16.980,71.500 16.980,71.500 C16.980,71.500 91.980,70.500 91.980,70.500 C91.980,70.500 92.020,73.500 92.020,73.500 C92.020,73.500 17.020,74.500 17.020,74.500 Z"
              fillRule="evenodd"
            ></path>
            <path
              className="cls-4"
              fill={props.customColorTheme}
              d="M92.462,72.337 C92.462,72.337 89.538,71.663 89.538,71.663 C89.538,71.663 98.538,32.663 98.538,32.663 C98.538,32.663 101.462,33.337 101.462,33.337 C101.462,33.337 92.462,72.337 92.462,72.337 Z"
              fillRule="evenodd"
            ></path>
            <path
              className="cls-4"
              fill={props.customColorTheme}
              d="M99.726,31.687 C99.726,31.687 98.274,34.313 98.274,34.313 C98.274,34.313 51.274,8.313 51.274,8.313 C51.274,8.313 52.726,5.687 52.726,5.687 C52.726,5.687 99.726,31.687 99.726,31.687 Z"
              fillRule="evenodd"
            ></path>
            <circle className="cls-4" fill={props.customColorTheme} cx="54" cy="9" r="9"></circle>
            <circle className="cls-10" fill="#FFFFFF" cx="54" cy="9" r="6"></circle>
            <circle className="cls-4" fill={props.customColorTheme} cx="9" cy="35" r="9"></circle>
            <circle className="cls-10" fill="#FFFFFF" cx="9" cy="35" r="6"></circle>
            <circle className="cls-4" fill={props.customColorTheme} cx="100" cy="35" r="9"></circle>
            <circle className="cls-10" fill="#FFFFFF" cx="100" cy="35" r="6"></circle>
            <circle className="cls-4" fill={props.customColorTheme} cx="90" cy="72" r="9"></circle>
            <circle className="cls-10" fill="#FFFFFF" cx="90" cy="72" r="6"></circle>
            <circle className="cls-4" fill={props.customColorTheme} cx="18" cy="72" r="9"></circle>
            <circle className="cls-10" fill="#FFFFFF" cx="18" cy="72" r="6"></circle>
            <path
              className="cls-19"
              fill="#FFFFFF"
              stroke="#555555"
              strokeLinejoin="round"
              strokeWidth="2px"
              d="M69.990,83.228 C69.990,83.228 69.937,71.694 69.937,71.694 C69.932,70.823 69.524,70.051 68.894,69.562 C68.447,69.215 67.891,69.011 67.286,69.014 C66.881,69.016 66.498,69.111 66.155,69.280 C66.114,68.459 65.715,67.738 65.115,67.272 C64.668,66.925 64.112,66.721 63.508,66.725 C62.770,66.729 62.105,67.042 61.627,67.541 C61.627,67.541 61.626,67.117 61.626,67.117 C61.622,66.247 61.214,65.475 60.583,64.986 C60.137,64.640 59.581,64.436 58.978,64.439 C58.239,64.443 57.572,64.756 57.099,65.255 C57.099,65.255 57.069,58.680 57.069,58.680 C57.064,57.810 56.656,57.038 56.026,56.548 C55.579,56.202 55.022,55.998 54.418,56.001 C52.962,56.008 51.787,57.220 51.794,58.705 C51.794,58.705 51.869,75.182 51.869,75.182 C51.869,75.182 50.733,73.637 50.733,73.637 C50.583,73.434 50.409,73.256 50.219,73.109 C49.305,72.400 48.008,72.361 47.042,73.102 C45.877,73.994 45.643,75.681 46.517,76.871 C46.517,76.871 52.436,84.919 52.436,84.919 C52.585,85.121 52.759,85.299 52.948,85.445 C53.398,85.794 53.944,85.984 54.507,85.993 C54.507,85.993 67.365,85.930 67.365,85.930 C68.821,85.924 69.997,84.714 69.990,83.228 Z"
              fillRule="evenodd"
            ></path>
          </g>
        </svg>
      </svg>
    </div>
  );
};

export default DefaultTabView;
