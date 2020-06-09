<p align="center"><img src="https://files.catbox.moe/kf4ffw.png" width="500" alt="lightimage logo"></p>
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
  <img src="https://catbox.moe/pictures/qts/1512072270390.png">
  <div class="content">
    <img src="https://files.catbox.moe/jmai6s.png">
    <img src="https://files.catbox.moe/uh4owu.jpg">
    <img src="https://files.catbox.moe/bdo5nr.jpg">
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

## Install

#### CDN

``` html
<script src="https://cdn.jsdelivr.net/gh/jwchan1996/lightimage.js/dist/lightimage.min.js"></script>
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