<p align="center"><img src="https://i.loli.net/2020/10/26/fDHSnhZ3NT2lrvx.png" width="500" alt="lightimage logo"></p>
<p align="center">🌈 A lightweight image view plugin</p>
<p align="center">
<a href="https://npmjs.com/package/lightimage"><img src="https://img.shields.io/npm/v/lightimage" alt="npm-v"></a>
<a href="https://npmjs.com/package/lightimage"><img src="https://img.shields.io/npm/dt/lightimage" alt="npm-d"></a>
<a href="https://npmjs.com/package/lightimage"><img src="https://img.shields.io/github/size/jwchan1996/lightimage.js/dist/lightimage.min.js" alt="size"></a>
</p>

## Example

[Demo Page](https://jwchan1996.github.io/lightimage.js)  
[PPAP](http://ppap.live)

## Intro

we can bind an element in the `Lightimage` object, and all children of the current element like `<img/>` can be viewed.

```html
<div id="app">
  <img src="https://i.loli.net/2020/10/26/HnegmF9uy6Nt7So.png" style="width: 250px;" alt="">
  <img src="https://i.loli.net/2020/10/26/OMrAoaZmc7hn43k.png" style="width: 266px;" alt="">
  <img src="https://i.loli.net/2020/10/26/zeoMxD6Ak75Qy8h.png" style="width: 250px;" alt="">
  <div class="content">
    <img src="https://i.loli.net/2020/10/26/TxPSiCqUX1sLmly.png" style="height: 266px;" alt="">
    <img src="https://i.loli.net/2020/10/26/OzQPweNoFBuv3bl.jpg" style="width: 266px;" alt="">
    <img src="https://i.loli.net/2020/10/26/bUvmgckjsAiloFh.png" style="width: 266px;" alt="">
  </div>
</div>
```

bind the element of `#app`, we can scale view all children of `#app` like `<img/>`
```javascript
new Lightimage('#app').init()
```

bind the element of `.content`, we can scale view all children of `.content` like `<img/>`
```javascript
new Lightimage('.content').init()
```

## Browser Support
| <img src="http://i.imgur.com/NjIVmRO.png" width="46px" height="46px" alt="Chrome logo"> | <img src="http://i.imgur.com/o1m5RcQ.png" width="48px" height="48px" alt="Firefox logo"> | <img src="http://i.imgur.com/0R5whqc.png" width="48px" height="48px" alt="Internet Explorer logo"> | <img src="http://i.imgur.com/kQ1e7Mk.png" width="42px" height="42px" alt="Edge logo"> | <img src="http://i.imgur.com/FSJB8BL.png" width="48px" height="48px" alt="Opera logo"> | <img src="http://i.imgur.com/yLwF24I.png" width="48px" height="48px" alt="Safari logo"> |
|:---:|:---:|:---:|:---:|:---:|:---:|
| 38+ ✔️ | 43+ ✔️| 10+ ✔️| 14+ ✔️| 32+ ✔️| 8+ ✔️|

## Install

#### CDN

``` html
<script src="https://cdn.jsdelivr.net/npm/lightimage/dist/lightimage.min.js"></script>
<script type="text/javascript">
  new Lightimage('#app').init()
</script>
```
#### NPM

``` bash
npm i lightimage
```

#### Yarn

``` bash
yarn add lightimage
```

#### Use

```javascript
import Lightimage from 'lightimage'

new Lightimage('#app').init()
```

## Attributes

Attribute | Description | Type | Default
---|---|---|---
cursor | mouse style of hover image | string | zoom-in
showAnimationDuration | transition time of show image | string | 
maskLayerBgColor | background color of mask layer | string |rgba(0, 0, 0, 0.8)
showCloseBtn | whether to show the close button | boolean | false
closeBtnHeight | the close button height | number | 48
closeBtnWidth | the close button width | number | 48
closeBtnColor | the close button color | string | #9C9C9C
closeBtnBgColor | the close button background color | string | rgba(0, 0, 0, 0.2)

we can custom params like this :

```javascript
new Lightimage('#app').init({
  cursor: 'zoom-in',
  showAnimationDuration: '0.8s',
  maskLayerBindClose: true,
  maskLayerBgColor: 'rgba(0, 0, 0, 0.9)',
  showCloseBtn: true, 
  closeBtnHeight: 48,
  closeBtnWidth: 48,
  closeBtnColor: '#9c9c9c',
  closeBtnBgColor: 'rgba(0, 0, 0, 0)'
})
```

## License

_MIT_ ©jwchan1996