# milk-flex

> Flexible 布局组件

## Overview

![image](https://user-images.githubusercontent.com/11053605/28751010-4b347f00-752f-11e7-9844-3084086cfb69.png)

## Example

```jsx
import Flex from 'milk-flex';

const { Item } = Flex;

<h3 className="demo-list-title">列等分</h3>
<div className="demo-list">
  <Flex className="demo-item">
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
</div>
```

## Properties

| Property | Type | Description | Default |
| -- | -- | -- | -- |
| className | String | 自定义的 class 类名 | '' |

## Develop

```bash
cnpm i milk-dev -g    # dev tool

cnpm install

npm start
```

## Links

- [Issues](https://github.com/milk-ui/milkui-flex/issues)
