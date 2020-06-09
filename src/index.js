import Lightimage from './lightimage'

new Lightimage('#app').init({
  cursor: 'zoom-in',
  showAnimationDuration: '0.8s',
  maskLayerBindClose: true,
  maskLayerBgColor: 'linear-gradient(#00faf0, #ff0050)',
  showCloseBtn: true, 
  closeBtnHeight: 48,
  closeBtnWidth: 48,
  closeBtnColor: '#009688',
  closeBtnBgColor: 'rgba(0, 0, 0, 0)'
})