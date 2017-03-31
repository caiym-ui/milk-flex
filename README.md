# milk-flex

Flexible 布局组件

## 效果图

![image](https://cloud.githubusercontent.com/assets/11053605/24555860/305cec90-1665-11e7-8b58-779a9f89146e.png)

## 使用

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

## 参数

| Properties | Type | Description | Default |
| -- | -- | -- | -- |
| className | String | 自定义的 class 类名 | '' |


## 开发

### install

```bash
cnpm i milk-dev -g    # 组件开发工具
cnpm install
npm start
```

## 链接

- [Issues](https://github.com/caiym-ui/milk-carousel/issues)
