/**
 * Flex of milk-component
 * @author caiyongmin
 *
 * Copyright 2017-2019, Milk Team.
 * All rights reserved.
 */


import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

import './index.scss';

class Flex extends Component {
  static propTypes = {
    prefixCls: PropTypes.string,
    className: PropTypes.string,
    direction: PropTypes.oneOf([
      'row', 'row-reverse', 'column', 'column-reverse',
    ]),
    wrap: PropTypes.oneOf([
      'nowrap', 'wrap', 'wrap-reverse',
    ]),
    justify: PropTypes.oneOf([
      'start', 'end', 'center', 'between', 'around',
    ]),
    align: PropTypes.oneOf([
      'top', 'start', 'middle', 'center', 'bottom', 'end', 'baseline', 'stretch',
    ]),
    alignCenter: PropTypes.oneOf([
      'start', 'end', 'center', 'between', 'around', 'stretch',
    ]),
    children: PropTypes.node,
  }

  static defaultProps = {
    prefixCls: 'milk-flexbox',
    align: 'center',
  }

  getWrapCls() {
    const { prefixCls, className, direction, wrap, justify, align, alignCenter } = this.props;
    return classnames(
      prefixCls,
      {
        [`${prefixCls}-dir-row`]: direction === 'row',
        [`${prefixCls}-dir-row-reverse`]: direction === 'row-reverse',
        [`${prefixCls}-dir-column`]: direction === 'column',
        [`${prefixCls}-dir-column-reverse`]: direction === 'column-reverse',

        [`${prefixCls}-nowrap`]: wrap === 'nowrap',
        [`${prefixCls}-wrap`]: wrap === 'wrap',
        [`${prefixCls}-wrap-reverse`]: wrap === 'wrap-reverse',

        [`${prefixCls}-justify-start`]: justify === 'start',
        [`${prefixCls}-justify-end`]: justify === 'end',
        [`${prefixCls}-justify-center`]: justify === 'center',
        [`${prefixCls}-justify-between`]: justify === 'between',
        [`${prefixCls}-justify-around`]: justify === 'around',

        [`${prefixCls}-align-top`]: align === 'top' || align === 'start',
        [`${prefixCls}-align-middle`]: align === 'middle' || align === 'center',
        [`${prefixCls}-align-bottom`]: align === 'bottom' || align === 'end',
        [`${prefixCls}-align-baseline`]: align === 'baseline',
        [`${prefixCls}-align-stretch`]: align === 'stretch',

        [`${prefixCls}-align-center-start`]: alignCenter === 'start',
        [`${prefixCls}-align-center-end`]: alignCenter === 'end',
        [`${prefixCls}-align-center-center`]: alignCenter === 'center',
        [`${prefixCls}-align-center-between`]: alignCenter === 'between',
        [`${prefixCls}-align-center-around`]: alignCenter === 'around',
        [`${prefixCls}-align-center-stretch`]: alignCenter === 'stretch',
      },
      className,
    );
  }

  render() {
    const { children } = this.props;
    const wrapCls = this.getWrapCls();
    return (
      <div className={wrapCls}>
        {children}
      </div>
    );
  }
}

export default Flex;
