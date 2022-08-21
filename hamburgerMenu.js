const hamburgerMenu=document.getElementById('js-hamburgerMenu');
const ham = document.getElementById('js-hamburger'); 
const hamburgerLine1=document.getElementById('js-hamburgerLine1');
const hamburgerLine2=document.getElementById('js-hamburgerLine2');



ham.addEventListener('click', function () { //ハンバーガーメニューをクリックしたら
  hamburgerLine1.classList.add('active')
  hamburgerLine2.classList.add('active')
  hamburgerMenu.classList.add('active')
  

});

