import React from 'react';
import { useSelector } from 'react-redux';
import GenericBanner from '../generic-banner/Banner';
import { bannerContent } from '../../../../../configs/translations/header.translations';
import { RootState } from '../../../store';

const DatasetsBanner = () => {
  const selectedLanguage = useSelector((store: RootState) => store.appState.selectedLanguage);

  return (
    <GenericBanner cookieName="TREE_MOSAIC_BANNER_CLOSED">
      {bannerContent[selectedLanguage].text}{' '}
      <a href={'http://mapbuilder.wri.org/tutorials/tml-to-tcc'} className="underline" target="_blank" rel="noreferrer">
        {bannerContent[selectedLanguage].linkUrlText}
      </a>
    </GenericBanner>
  );
};

export default DatasetsBanner;
