class Lightimage {
  //构造函数
  constructor(selector){
    this.selector = selector
  }

  //初始化函数
  init(){
    const imgs = document.querySelector(this.selector).querySelectorAll('img')
    for(let i=0; i<imgs.length; i++){
      imgs[i].onclick = e => {
        console.log(e)
        console.log(e.currentTarget.src)
        alert('click the img')
      }
    }
  }
}

export default Lightimage