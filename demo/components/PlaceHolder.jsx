import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

class PlaceHolder extends Component {
  static propTypes = {
    className: PropTypes.string,
  }

  render() {
    const classNames = classnames(
      'demo-placeholder-box',
      this.props.className,
    );
    return (
      <div className={classNames}>Item</div>
    );
  }
}

export default PlaceHolder;
