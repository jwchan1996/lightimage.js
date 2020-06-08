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

We can bind an element in the `Lightimage` object, and all children of the current element like `<img/>` can be viewed.

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

Bind the element of `#app`, we can scale view all children of `#app` like `<img/>`
```javascript
new Lightimage('#app').init()
```

Bind the element of `.content`, we can scale view all children of `.content` like `<img/>`
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

## License

_MIT_ ©jwchan1996