class Lightimage {
  constructor(selector){
    this.selector = selector
  }
  
  init(params = {
    cursor: ''
  }){
    const lightimageDiv = document.createElement('div')
    lightimageDiv.className = 'lightimage'
    lightimageDiv.style.display = 'none'
    lightimageDiv.style.position = 'fixed'
    lightimageDiv.style.zIndex = '10000'
    lightimageDiv.style.width = '100vw'
    lightimageDiv.style.height = '100vh'
    lightimageDiv.style.background = 'rgba(0, 0, 0, 0.8)'
    lightimageDiv.style.top = '0'
    lightimageDiv.style.left = '0'

    const lightimageContent = document.createElement('div')
    lightimageContent.className = 'lightimage-content'
    lightimageContent.style.position = 'relative'
    lightimageContent.style.height = '100vh'
    lightimageContent.style.width = '100vw'
    lightimageContent.style.display = 'flex'
    lightimageContent.style.flexDirection = 'column'
    lightimageContent.style.justifyContent = 'center'

    const lightimageImg = document.createElement('img')
    lightimageImg.style.display = 'block'
    lightimageImg.style.margin = 'auto'
    lightimageImg.style.maxWidth = '95%'
    lightimageImg.style.maxHeight = '100%'
    lightimageImg.style.cursor = params.cursor == 'zoom-in' ? 'zoom-out' : params.cursor

    lightimageDiv.appendChild(lightimageContent)
    lightimageContent.appendChild(lightimageImg)
    document.querySelector('body').appendChild(lightimageDiv)

    lightimageDiv.onclick = () => {
      lightimageDiv.style.display = 'none'
    }

    const imgs = document.querySelector(this.selector).querySelectorAll('img')
    for(let i=0; i<imgs.length; i++){
      imgs[i].style.cursor = params.cursor
      imgs[i].onclick = e => {
        lightimageDiv.style.display = 'block'
        lightimageImg.setAttribute('src', e.currentTarget.src)
      }
    }
  }
}

window.Lightimage = Lightimage

export default Lightimage