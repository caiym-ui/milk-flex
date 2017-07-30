/**
 * Flex of milk-component
 * @author caiyongmin
 *
 * Copyright 2017-2019, All rights reserved.
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
        [`${prefixCls}__dir-row`]: direction === 'row',
        [`${prefixCls}__dir-row-reverse`]: direction === 'row-reverse',
        [`${prefixCls}__dir-column`]: direction === 'column',
        [`${prefixCls}__dir-column-reverse`]: direction === 'column-reverse',

        [`${prefixCls}__nowrap`]: wrap === 'nowrap',
        [`${prefixCls}__wrap`]: wrap === 'wrap',
        [`${prefixCls}__wrap-reverse`]: wrap === 'wrap-reverse',

        [`${prefixCls}__justify-start`]: justify === 'start',
        [`${prefixCls}__justify-end`]: justify === 'end',
        [`${prefixCls}__justify-center`]: justify === 'center',
        [`${prefixCls}__justify-between`]: justify === 'between',
        [`${prefixCls}__justify-around`]: justify === 'around',

        [`${prefixCls}__align-top`]: align === 'top' || align === 'start',
        [`${prefixCls}__align-middle`]: align === 'middle' || align === 'center',
        [`${prefixCls}__align-bottom`]: align === 'bottom' || align === 'end',
        [`${prefixCls}__align-baseline`]: align === 'baseline',
        [`${prefixCls}__align-stretch`]: align === 'stretch',

        [`${prefixCls}__align-center-start`]: alignCenter === 'start',
        [`${prefixCls}__align-center-end`]: alignCenter === 'end',
        [`${prefixCls}__align-center-center`]: alignCenter === 'center',
        [`${prefixCls}__align-center-between`]: alignCenter === 'between',
        [`${prefixCls}__align-center-around`]: alignCenter === 'around',
        [`${prefixCls}__align-center-stretch`]: alignCenter === 'stretch',
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
