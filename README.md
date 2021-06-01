# selectors-observer

可以快速获取用户正在阅读内容的锚点的工具库，框架通用

## 先看效果

![](https://gitee.com/yrobot/images/raw/master/2021-06-01/selectors-observer-22-05-23.gif)
[react demo](https://codesandbox.io/s/selectors-observer-react-ben4e)

## install

### CDN

```html
<script src="https://yrobot.github.io/selectors-observer/lib/index.umd.js"></script>
```

在使用`SelectorsObserver`前利用 script 标签引入，然后就可以直接在 js 逻辑中直接使用`SelectorsObserver`

### npm

```
yarn add selectors-observer
```

or

```
npm install selectors-observer
```

## usage

```js
import SelectorsObserver from 'selectors-observer';

const selectors = ['#anchor1', '#anchor2', '#anchor3'];

const oberver = new SelectorsObserver();

oberver.select(selectors).listen((selecor) => {
  // 每次正在浏览的锚点变更时，会触发listen
  setViewing(selecor);
});
```

## demo on codesandbox

![](https://gitee.com/yrobot/images/raw/master/2021-06-01/zLGjrH-21-31-45.png)

[static html demo](https://codesandbox.io/s/selectors-observer-static-hcsqh)

[react demo](https://codesandbox.io/s/selectors-observer-react-ben4e)
