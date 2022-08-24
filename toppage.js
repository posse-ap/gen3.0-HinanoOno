const ham = document.getElementById('js-hamburger'); 
const hamburgerMenu=document.getElementById('js-hamburgerMenu');
const hamburgerLine1=document.getElementById('js-hamburgerLine1');
const hamburgerLine2=document.getElementById('js-hamburgerLine2');

var count=0;
function counter(){
  count++;
}
ham.addEventListener('click', function () { //ハンバーガーメニューをクリックしたら
  
  counter();
  console.log(count);
  const mainVisual=document.querySelector('.mainvisual');
  const about=document.querySelector('.about');
  const lineAll=document.querySelector('.line');
  const mainLine=document.querySelector('.main-line');
  const lineBanner=document.querySelector('footer');
  const hamburgerFooter=document.querySelector('.hamburger-footer');
  if(count%2===1){
    hamburgerLine1.classList.add('active')
    hamburgerLine2.classList.add('active')
    hamburgerMenu.classList.add('active')
    mainVisual.style.display='none';
    about.style.display='none';
    lineAll.style.display='none';
    mainLine.style.display='none';
    lineBanner.style.display='none';
    hamburgerFooter.style.display='block';

  }
  else{
    hamburgerLine1.classList.remove('active')
    hamburgerLine2.classList.remove('active')
    hamburgerMenu.classList.remove('active')
    mainVisual.style.display='flex';
    about.style.display='block';
    lineAll.style.display='block';
    mainLine.style.display='block';
    lineBanner.style.display='block';
    hamburgerFooter.style.display='none';

  }

});



















