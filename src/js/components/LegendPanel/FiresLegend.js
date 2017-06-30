import Request from 'utils/request';
import React from 'react';

export default class FiresLegend extends React.Component {
  constructor (props) {
    super(props);
    this.state = { legendInfos: [], visibile: false };
  }

  componentDidMount() {
    const map = this.props.map;
    console.log(map);
    const layer = map.getLayer(this.props.layerId);
    console.log(layer);
    layer.on('visibility-change', (test) => {
      console.log('in layer');
      this.setState({visible: test.visible});
    });
    Request.getLegendInfos(this.props.url, this.props.layerIds).then(legendInfos => {
      if(this.refs.myRef) {
        this.setState({ legendInfos: legendInfos });
      }
    });
  }

  itemMapper (item, index) {
    return (
      <div className='legend-row' key={index}>
        <img className='legend-icon' title={item.label} src={`data:image/png;base64,${item.imageData}`} />
        <div className='legend-label' key={index}>{item.label}</div>
      </div>
    );
  }

  render () {
    return (
      <div className={`legend-container  ${this.state.visible ? '' : 'hidden'}`} ref="myRef">
        {this.state.legendInfos.length === 0 ? <div className='legend-unavailable'>No Legend</div> :
          <div className='crowdsource-legend'>
            {this.state.legendInfos.map(this.itemMapper, this)}
          </div>
        }
      </div>
    );
  }
}
