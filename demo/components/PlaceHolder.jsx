/**
 * Flex of milk-component
 * @author caiyongmin
 *
 * Copyright 2017-2019, All rights reserved.
 */

import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

class PlaceHolder extends Component {
  static propTypes = {
    className: PropTypes.string,
  }

  render() {
    const classNames = classnames(
      'demo__placeholder__box',
      this.props.className,
    );
    return (
      <div className={classNames}>Item</div>
    );
  }
}

export default PlaceHolder;
