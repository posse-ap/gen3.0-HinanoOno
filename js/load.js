const modalButton=$('.modal-button')
const loadModal=$('.load-modal')
const closeLoad=$('.js-closeLoad')
modalButton.click(()=>{
  $container.removeClass('openModal')
  loadModal.addClass('openModal')

  window.setTimeout(complete,3000);
    function complete(){
      $('#loading-main').replaceWith('<div class="complete-content"><div class="complete-alert">AWESOME!</div><div class="check-mark"></div><div class="complete-message">記録・投稿<br>完了しました</div></div>')


      console.log("sdf")
    }
  
  
  /*const loading = document.getElementById('loading');


    const msM = 1000;
    loading.style.transition = 'opacity ' + msM + 'ms';
    
    const loadingOpacity = function(){ //透過させる関数を定義
      loading.style.opacity = 0;
    }
    const loadingDisplay = function(){ //非表示にする関数を定義
      loading.style.display = "none";
    }
  
    setTimeout(loadingOpacity, 1000); //画像読み込み後、１秒後に透過を開始
    setTimeout(loadingDisplay, 1000 + msM); //画像読み込み後、２秒後に非表示*/





})
closeLoad.click(()=>{
  loadModal.removeClass('openModal')

})