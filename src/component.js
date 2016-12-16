import React from 'react';
import './index.less'
const HelloReact=React.createClass({
  getInitialState:function(){
    return {text:'Hello,this is React!'};
  },
  onShowTime:function(){
    this.setState({text:'Date : '+new Date()});
  },
  render:function(){
    return <span className="color">{this.state.text}<br /><a href="javascript:;" onClick={this.onShowTime}>show time</a></span>
  }
});

export default HelloReact;