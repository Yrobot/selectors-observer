# selectors-observer

可以快速获取用户正在阅读内容的锚点的工具库，框架通用

## install

```
yarn add selectors-observer
```

or

```
npm install selectors-observer
```

## demo

```js
import SelectorsObserver from 'selectors-observer';

const selectors = ['#anchor1', '#anchor2', '#anchor3'];

const oberver = new SelectorsObserver();

oberver.select(selectors).listen((selecor) => {
  // 每次正在浏览的锚点变更时，会触发listen
  setViewing(selecor);
});
```
