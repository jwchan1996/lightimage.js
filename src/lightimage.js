class Lightimage {
  constructor(selector){
    this.selector = selector
  }
  
  init(args){
    let params = {
      cursor: args.cursor ? args.cursor : 'zoom-in',
      showAnimationDuration: args.showAnimationDuration ? args.showAnimationDuration : '',
      maskLayerBindClose: args.maskLayerBindClose ? args.maskLayerBindClose : false,
      maskLayerBgColor: args.maskLayerBgColor ? args.maskLayerBgColor : 'rgba(0, 0, 0, 0.8)',
      showCloseBtn: args.showCloseBtn ? args.showCloseBtn : true,
      closeBtnHeight: args.closeBtnHeight ? args.closeBtnHeight : 48,
      closeBtnWidth: args.closeBtnWidth ? args.closeBtnWidth : 48,
      closeBtnColor: args.closeBtnColor ? args.closeBtnColor : '#9C9C9C',
      closeBtnBgColor: args.closeBtnBgColor ? args.closeBtnBgColor : 'rgba(0, 0, 0, 0.2)'
    }

    const lightimageStyle = `
      .lightimage {
        display: none;
        position: fixed;
        z-index: 10000;
        width: 100vw;
        height: 100vh;
        top: 0;
        left: 0;
      }
      .lightimage-content {
        position: relative;
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        overflow: auto;
      }
      .lightimage-img {
        display: block;
        margin: auto;
        max-width: 90%;
        animation-name: show;
      }
      @keyframes show {
        0% {
          opacity: 0;
        }
        100% {
          opacity: 1;
        }
      }
      .lightimage-close {
        display: inline-block;
        position: absolute;
        top: 20px;
        right: 30px;
        z-index: 10001;
        cursor: pointer;
        font-size: 0;
        background: rgba(0, 0, 0, 0.2);
        transition: all 0.3s ease-in-out;
      }
      .lightimage-close:hover {
        transform:rotate(180deg);
      }
    `
    const style = document.createElement('style')
    style.innerHTML = lightimageStyle
    document.querySelector('head').appendChild(style)

    const lightimageDiv = document.createElement('div')
    lightimageDiv.className = 'lightimage'
    lightimageDiv.style.background = params.maskLayerBgColor

    const lightimageClose = document.createElement('span')
    lightimageClose.className = 'lightimage-close'
    lightimageClose.innerHTML = `<svg t="1591688330391" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3854" width=${params.closeBtnWidth} height=${params.closeBtnHeight}><path d="M155.00305177 868.99694823c-21.96904297-21.96904297-21.96904297-60.41486817 0-82.38391112l631.60998534-631.60998534c21.96904297-21.96904297 60.41486817-21.96904297 82.38391112 0s21.96904297 60.41486817 0 82.38391112l-631.60998534 631.60998534c-21.96904297 21.96904297-60.41486817 21.96904297-82.38391112 0z" fill=${params.closeBtnColor} p-id="3855"></path><path d="M155.00305177 155.00305177c21.96904297-21.96904297 60.41486817-21.96904297 82.38391112 0l631.60998534 631.60998534c21.96904297 21.96904297 21.96904297 60.41486817 0 82.38391112s-60.41486817 21.96904297-82.38391112 0l-631.60998534-631.60998534c-21.96904297-21.96904297-21.96904297-60.41486817 0-82.38391112z" fill=${params.closeBtnColor} p-id="3856"></path></svg>`
    lightimageClose.style.background = params.closeBtnBgColor

    const lightimageContent = document.createElement('div')
    lightimageContent.className = 'lightimage-content'

    const lightimageImg = document.createElement('img')
    lightimageImg.className = 'lightimage-img'
    lightimageImg.style.cursor = params.cursor
    lightimageImg.style.animationDuration = params.showAnimationDuration

    lightimageDiv.appendChild(lightimageClose)
    lightimageDiv.appendChild(lightimageContent)
    lightimageContent.appendChild(lightimageImg)
    document.querySelector('body').appendChild(lightimageDiv)

    //图片1.5倍放大点击标志位
    let imgClickFlag = false

    //是否开启遮罩层关闭图片
    if(params.maskLayerBindClose){
      lightimageDiv.onclick = () => {
        //重置图片宽高
        lightimageDiv.style.display = 'none'
        lightimageImg.style.width = ''
        lightimageImg.style.height = ''
        lightimageImg.style.maxHeight = ''
        lightimageClose.style.display = 'inline-block'
        lightimageImg.style.cursor = params.cursor
        imgClickFlag = false
      }
    }

    //判断是否展示右上角关闭图标
    if(params.showCloseBtn){
      //右上角关闭图片
      lightimageClose.onclick = () => {
        //重置图片宽高
        lightimageDiv.style.display = 'none'
        lightimageImg.style.width = ''
        lightimageImg.style.height = ''
        lightimageImg.style.maxHeight = ''
        lightimageImg.style.cursor = params.cursor
        imgClickFlag = false
      }
    }
    
    lightimageImg.onclick = () => {
      //判断当前是否已1.5倍放大
      if(imgClickFlag){
        //将图片还原
        imgClickFlag = false
        let newWidth = lightimageImg.offsetWidth * 2/3 + 'px'
        let newHeight = lightimageImg.offsetHeight * 2/3 + 'px'
        lightimageImg.style.width = newWidth
        lightimageImg.style.height = newHeight
        lightimageImg.style.cursor = 'zoom-in'
        lightimageImg.style.maxHeight = '100%'
        lightimageClose.style.display = 'inline-block'
        //阻止事件冒泡
        if(event && event.stopPropagation){
          event.stopPropagation()
        }else{
          window.event.cancelBubble = true
        }
        return false
      }
      
      //判断放大宽度是否超过屏幕宽度
      if(lightimageImg.offsetWidth * 1.5 > lightimageDiv.offsetWidth * 0.9){
        imgClickFlag = false
        lightimageImg.style.cursor = ''
        lightimageClose.style.display = 'inline-block'
        //阻止事件冒泡
        if(event && event.stopPropagation){
          event.stopPropagation()
        }else{
          window.event.cancelBubble = true
        }
        return false
      }

      //图片1.5倍放大标志位
      imgClickFlag = true
      let newWidth = lightimageImg.offsetWidth * 1.5 + 'px'
      let newHeight = lightimageImg.offsetHeight * 1.5 + 'px'
      lightimageImg.style.cursor = 'zoom-out'
      lightimageImg.style.maxHeight = ''
      lightimageClose.style.display = 'none'
      //放大到1.5倍宽度
      lightimageImg.style.width = newWidth
      lightimageImg.style.height = newHeight
      //阻止事件冒泡
      if(event && event.stopPropagation){
        event.stopPropagation()
      }else{
        window.event.cancelBubble = true
      }
      return false
    }

    const imgs = document.querySelector(this.selector).querySelectorAll('img')
    for(let i=0; i<imgs.length; i++){
      imgs[i].style.cursor = params.cursor
      imgs[i].onclick = e => {
        lightimageDiv.style.display = 'block'
        lightimageImg.style.maxHeight = '100%'
        lightimageImg.setAttribute('src', e.currentTarget.src)
      }
    }
  }
}

window.Lightimage = Lightimage

export default Lightimage