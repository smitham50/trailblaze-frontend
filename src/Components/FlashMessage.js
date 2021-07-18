import React, { Component } from 'react';

class FlashMessage extends Component {

  componentDidMount() {
    this.setTimer();
  };

  setTimer() {
    if (this._timer != null) {
      clearTimeout(this._timer)
    }

    this._timer = setTimeout(function () {
      this.props.unmount();
      this._timer = null;
    }.bind(this), 4000);
  };

  componentWillUnmount() {
    clearTimeout(this._timer);
  };

  render () {
    return (
      <div className={`flash-message alert ${this.props.alert}`} >
        <p className="small">{this.props.message}</p>
      </div>
    );
  };
};

export default FlashMessage;