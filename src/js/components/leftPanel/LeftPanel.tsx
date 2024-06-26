import React, { useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import clsx from 'clsx';
import { ChartBarIcon, Square3Stack3DIcon, CircleStackIcon } from '@heroicons/react/24/solid';
import { ChevronLeftIcon } from '@heroicons/react/24/outline';

import { RootState } from '../../../js/store/index';
import { selectActiveTab, toggleTabviewPanel } from '../../../js/store/appState/actions';
import TabViewContainer from './TabViewContainer';
import {
  analysisContent,
  layersPanelTranslations,
  dataTabConfig,
} from '../../../../configs/translations/leftPanel.translations';

import { DocumentsTabIcon } from '../../../images/documentsTabIcon';
import { InfoTabIcon } from '../../../images/infoTabIcon';
import { HamburgerIcon } from '../../../images/hamburgerIcon';

export interface TabProps {
  key: string;
  label: string;
  title: string;
  icon: React.SFC<React.SVGProps<SVGSVGElement>>;
  tooltipText: string;
  activeTab: string;
  documentFlashingActive: boolean;
  setDocumentFlashing: (isFlashing: boolean) => void;
  analysisFlashingActive: boolean;
  setAnalysisFlashing: (isFlashing: boolean) => void;
}

// Individual TAB Logic
const Tab = (props: TabProps): React.ReactElement => {
  const {
    activeTab,
    label,
    title,
    icon: Icon,
    documentFlashingActive,
    setDocumentFlashing,
    analysisFlashingActive,
    setAnalysisFlashing,
  } = props;

  const dispatch = useDispatch();

  const tabViewVisible = useSelector((store: RootState) => store.appState.leftPanel.tabViewVisible);

  const savedActiveTab = useSelector((store: RootState) => store.appState.leftPanel.activeTab);

  const documents = useSelector((store: RootState) => store.mapviewState.documents);

  const setFlashingTab = (): void => {
    if (label === 'documents') {
      setDocumentFlashing(false);
    }
    if (label === 'analysis') {
      setAnalysisFlashing(false);
    }
  };

  function handleTabClick(): void {
    setFlashingTab();
    if (savedActiveTab === label) {
      dispatch(toggleTabviewPanel(!tabViewVisible));
    } else {
      dispatch(selectActiveTab(label));
      dispatch(toggleTabviewPanel(true));
    }
  }

  useEffect(() => {
    setFlashingTab();
  }, [label]);

  return (
    <button
      // data-tip={label}
      // data-offset="{'top': -5}"
      className={clsx(
        'flex flex-col justify-center items-center text-white border-b-[6px] border-primary space-y-2 py-2 max-w-[33%] h-full',
        {
          'border-white': label === activeTab && tabViewVisible,
        }
      )}
      aria-label="left panel tab"
      onClick={handleTabClick}
    >
      <div className="flex items-center justify-center">
        {<Icon />}
        {documentFlashingActive && documents && documents.length && <span className="yellow-alert" />}
        {analysisFlashingActive && <span className="yellow-alert" />}
      </div>
      <div className="uppercase text-xs font-bold leading-none break-keep">{title}</div>
    </button>
  );
};

interface TabRenderObject {
  label: string;
  icon: React.SFC<React.SVGProps<SVGSVGElement>>;
  tooltipText: string;
  render: boolean | undefined;
  title: string;
}

interface TabsProps {
  tabsToRender: TabRenderObject[];
}

const Tabs = (props: TabsProps): React.ReactElement => {
  const [documentFlashing, setDocumentFlashing] = useState(false);
  const [analysisFlashing, setAnalysisFlashing] = useState(false);

  //Active Tab in the store
  const savedActiveTab = useSelector((store: RootState) => store.appState.leftPanel.activeTab);

  const activeFeatures = useSelector((store: RootState) => store.mapviewState.activeFeatures);

  const activeFeatureIndex = useSelector((store: RootState) => store.mapviewState.activeFeatureIndex);

  const [featureCollectionIndex, featureIndex] = activeFeatureIndex;

  const specificFeature = activeFeatures[featureCollectionIndex]?.features[featureIndex];

  useEffect(() => {
    if (specificFeature) {
      if (savedActiveTab !== 'documents') {
        setDocumentFlashing(true);
      }

      if (savedActiveTab !== 'analysis') {
        setAnalysisFlashing(true);
      }
    }
  }, [specificFeature]);

  const tabsGroupRow = props.tabsToRender.map((tab) => {
    const documentFlashingActive = tab.label === 'documents' && documentFlashing;
    const analysisFlashingActive = tab.label === 'analysis' && analysisFlashing;

    return (
      <Tab
        key={tab.label}
        label={tab.label}
        title={tab.title}
        tooltipText={tab.tooltipText}
        icon={tab.icon}
        activeTab={savedActiveTab}
        documentFlashingActive={documentFlashingActive}
        setDocumentFlashing={setDocumentFlashing}
        analysisFlashingActive={analysisFlashingActive}
        setAnalysisFlashing={setAnalysisFlashing}
      />
    );
  });

  return <div className="px-4 flex items-end justify-between">{tabsGroupRow}</div>;
};

const LeftPanel = (): React.ReactElement => {
  const selectedLanguage = useSelector((store: RootState) => store.appState.selectedLanguage);
  const [isShowing, setIsShowing] = useState<boolean>(true);
  const hideWidgetActive = useSelector((store: RootState) => store.appState.hideWidgetActive);
  const renderDocTab = useSelector((store: RootState) => store.appSettings.includeDocumentsTab);
  const narrative = useSelector((store: RootState) => store.appSettings.narrative);
  const alternativeNarrative = useSelector((store: RootState) => store.appSettings.alternativeNarrative);

  const renderInfoTab = narrative.length || alternativeNarrative.length ? true : false;

  //Rendering instructions should be likely driven by our config
  const tabsArray = [
    {
      label: 'info',
      icon: InfoTabIcon,
      tooltipText: 'Info',
      render: renderInfoTab,
      title: 'Info',
    },
    {
      label: 'layers',
      icon: () => <Square3Stack3DIcon className="h-5 w-5" />,
      tooltipText: 'Visualize',
      render: true,
      title: layersPanelTranslations[selectedLanguage].tabTitle,
    },
    {
      label: 'data',
      icon: () => <CircleStackIcon className="h-5 w-5" />,
      tooltipText: 'Data',
      render: true,
      title: dataTabConfig[selectedLanguage].tabTitle,
    },
    {
      label: 'analysis',
      icon: () => <ChartBarIcon className="h-5 w-5" />,
      tooltipText: 'Analysis',
      render: true,
      title: analysisContent[selectedLanguage].tabTitle,
    },
    {
      label: 'documents',
      icon: DocumentsTabIcon,
      tooltipText: 'Documents',
      render: renderDocTab, //Example of it coming from resources file
      title: 'Documents',
    },
    {
      label: 'menu',
      icon: HamburgerIcon,
      tooltipText: 'Menu',
      render: false,
      title: 'Menu',
    },
  ];

  const tabsToRender = tabsArray.filter((tab) => tab.render);

  const handleToggle = useCallback(
    (e) => {
      e.preventDefault();
      e.stopPropagation();
      setIsShowing(!isShowing);
    },
    [isShowing]
  );

  return (
    <div
      className={clsx('relative flex flex-col h-full', {
        hidden: hideWidgetActive,
        'w-0': !isShowing,
      })}
      data-cy="left-panel"
    >
      <div
        className={clsx('flex flex-col w-[392px] grow bg-white transition-all duration-150 overflow-y-auto', {
          'opacity-0 -translate-x-full': !isShowing,
          'opacity-100 translate-x-0': isShowing,
        })}
      >
        <div className="sticky top-0 shrink-0 bg-primary pt-8 z-10">
          <Tabs tabsToRender={tabsToRender} />
        </div>
        <TabViewContainer tabViewsToRender={tabsToRender} />
      </div>
      <button
        className={clsx('btn-dialog absolute top-[30px] right-0 z-20 transition-transform duration-150', {
          'translate-x-1/2': isShowing,
          'translate-x-12': !isShowing,
        })}
        onClick={handleToggle}
      >
        <ChevronLeftIcon
          className={clsx('h-[18px] w-[18px] text-white transition-transform duration-150', {
            'rotate-180': !isShowing,
          })}
        />
      </button>
    </div>
  );
};

export default LeftPanel;
