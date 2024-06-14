import React from 'react';
import { useSelector } from 'react-redux';
import GenericBanner from '../generic-banner/Banner';
import { datasetBannerContent } from '../../../../../configs/translations/header.translations';
import { RootState } from '../../../store';

const DatasetsBanner = () => {
  const selectedLanguage = useSelector((store: RootState) => store.appState.selectedLanguage);

  return (
    <GenericBanner cookieName="DATASETS_BANNER_CLOSED">{datasetBannerContent[selectedLanguage].text}</GenericBanner>
  );
};

export default DatasetsBanner;
