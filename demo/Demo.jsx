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
        <h2 className="demo-title">Milk-Flex</h2>
        <p className="demo-description">简单快速搭建页面布局。</p>
        <div className="demo-list-wrap">
          <h3 className="demo-list-title">列等分</h3>
          <div className="demo-list">
            <Flex className="demo-item">
              <Item><PlaceHolder /></Item>
              <Item><PlaceHolder /></Item>
            </Flex>
            <Flex className="demo-item">
              <Item><PlaceHolder /></Item>
              <Item><PlaceHolder /></Item>
              <Item><PlaceHolder /></Item>
            </Flex>
            <Flex className="demo-item">
              <Item><PlaceHolder /></Item>
              <Item><PlaceHolder /></Item>
              <Item><PlaceHolder /></Item>
              <Item><PlaceHolder /></Item>
            </Flex>
          </div>
          <h3 className="demo-list-title">每行固定列</h3>
          <div className="demo-list">
            <Flex className="demo-item" wrap={'wrap'}>
              <PlaceHolder className="box-quarter" />
              <PlaceHolder className="box-quarter" />
              <PlaceHolder className="box-quarter" />
              <PlaceHolder className="box-quarter" />
              <PlaceHolder className="box-quarter" />
              <PlaceHolder className="box-quarter" />
              <PlaceHolder className="box-quarter" />
              <PlaceHolder className="box-quarter" />
            </Flex>
          </div>
          <h3 className="demo-list-title">轴对齐</h3>
          <div className="demo-list">
            <Flex className="demo-item" justify={'center'}>
              <PlaceHolder className="box-quarter" />
              <PlaceHolder className="box-quarter" />
              <PlaceHolder className="box-quarter" />
            </Flex>
            <Flex className="demo-item" justify={'end'}>
              <PlaceHolder className="box-quarter" />
              <PlaceHolder className="box-quarter" />
              <PlaceHolder className="box-quarter" />
            </Flex>
            <Flex className="demo-item" justify={'between'}>
              <PlaceHolder className="box-quarter" />
              <PlaceHolder className="box-quarter" />
              <PlaceHolder className="box-quarter" />
            </Flex>
            <Flex className="demo-item" align={'top'}>
              <PlaceHolder className="box-quarter" />
              <PlaceHolder className="box-quarter box-height-short" />
              <PlaceHolder className="box-quarter" />
            </Flex>
            <Flex className="demo-item" align={'middle'}>
              <PlaceHolder className="box-quarter" />
              <PlaceHolder className="box-quarter box-height-short" />
              <PlaceHolder className="box-quarter" />
            </Flex>
            <Flex className="demo-item" align={'bottom'}>
              <PlaceHolder className="box-quarter" />
              <PlaceHolder className="box-quarter box-height-short" />
              <PlaceHolder className="box-quarter" />
            </Flex>
          </div>
        </div>
      </section>
    );
  }
}

export default Demo;
