const headerScroll = document.querySelector('header');
    // console.log(headerScroll);
    let 이전좌표 = 0;
    //scroll을 올렸는지 내렸는지 파악하려면 변수 하나를 선언해서 현재 위치를 비교해주면 된다.
    
window.addEventListener('scroll', (e) => {
  if(window.scrollY >= 100) {
    headerScroll.classList.add('scrolled');
  } else {
    headerScroll.classList.remove('scrolled');
  }

  if(이전좌표 < window.scrollY) {
    headerScroll.classList.add('hide');
  } else {
    headerScroll.classList.remove('hide');
  }
  이전좌표 = window.scrollY;

})