import * as React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'js/store';

interface Props {
  key: string;
  label: string;
}

const LayersTabView = (props: Props) => {
  const { activeTab, tabViewVisible } = useSelector(
    (store: RootState) => store.appState.leftPanel
  );

  const tabViewIsVisible = tabViewVisible && activeTab === props.label;
  return <>{tabViewIsVisible && <div>Layers Tab View</div>}</>;
};

export default LayersTabView;
