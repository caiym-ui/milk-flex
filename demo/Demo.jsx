/**
 * Flex of milk-component
 * @author caiyongmin
 *
 * Copyright 2017-2019, All rights reserved.
 */

/**
 * Flex of milk-component
 * @author caiyongmin
 *
 * Copyright 2017-2019, All rights reserved.
 */

import React, { Component } from 'react';

import PlaceHolder from './components/PlaceHolder';
import Flex from './../src';
import './Demo.scss';

const { Item } = Flex;

class Demo extends Component {

  render() {
    return (
      <section className="section-demo">
        <h2 className="demo__title">Milk UI</h2>
        <p className="demo__description">Demo Page 😀.</p>
        <div className="demo__list__wrap">
          <h3 className="demo__list__title">列等分</h3>
          <div className="demo__list">
            <Flex className="demo__item">
              <Item><PlaceHolder /></Item><Item><PlaceHolder /></Item>
            </Flex>
            <Flex className="demo__item">
              <Item><PlaceHolder /></Item><Item><PlaceHolder /></Item>
              <Item><PlaceHolder /></Item>
            </Flex>
            <Flex className="demo__item">
              <Item><PlaceHolder /></Item><Item><PlaceHolder /></Item>
              <Item><PlaceHolder /></Item><Item><PlaceHolder /></Item>
            </Flex>
          </div>
          <h3 className="demo__list__title">每行固定列</h3>
          <div className="demo__list">
            <Flex className="demo__item" wrap={'wrap'}>
              <PlaceHolder className="box__quarter" /><PlaceHolder className="box__quarter" />
              <PlaceHolder className="box__quarter" /><PlaceHolder className="box__quarter" />
              <PlaceHolder className="box__quarter" /><PlaceHolder className="box__quarter" />
              <PlaceHolder className="box__quarter" /><PlaceHolder className="box__quarter" />
            </Flex>
          </div>
          <h3 className="demo__list__title">轴对齐</h3>
          <div className="demo__list">
            <Flex className="demo__item" justify={'center'}>
              <PlaceHolder className="box__quarter" />
              <PlaceHolder className="box__quarter" />
              <PlaceHolder className="box__quarter" />
            </Flex>
            <Flex className="demo__item" justify={'end'}>
              <PlaceHolder className="box__quarter" /><PlaceHolder className="box__quarter" />
              <PlaceHolder className="box__quarter" />
            </Flex>
            <Flex className="demo__item" justify={'between'}>
              <PlaceHolder className="box__quarter" /><PlaceHolder className="box__quarter" />
              <PlaceHolder className="box__quarter" />
            </Flex>
            <Flex className="demo__item" align={'top'}>
              <PlaceHolder className="box__quarter" />
              <PlaceHolder className="box__quarter box__height-short" /><PlaceHolder className="box__quarter" />
            </Flex>
            <Flex className="demo__item" align={'middle'}>
              <PlaceHolder className="box__quarter" />
              <PlaceHolder className="box__quarter box__height-short" /><PlaceHolder className="box__quarter" />
            </Flex>
            <Flex className="demo__item" align={'bottom'}>
              <PlaceHolder className="box__quarter" />
              <PlaceHolder className="box__quarter box__height-short" /><PlaceHolder className="box__quarter" />
            </Flex>
          </div>
        </div>
      </section>
    );
  }
}

export default Demo;
