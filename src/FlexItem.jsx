import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

class FlexItem extends Component {
  static propTypes = {
    prefixCls: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.node,
  }

  static defaultProps = {
    prefixCls: 'milk-flexbox',
  }

  render() {
    const { prefixCls, className, children } = this.props;
    const wrapCls = classnames(
      `${prefixCls}__item`,
      className,
    );

    return (
      <div className={wrapCls}>
        {children}
      </div>
    );
  }
}

export default FlexItem;
