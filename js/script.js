const $container = $('.modal');
const $button = $('.js-openModal');
const $closeButton = $('.js-closeModal');

$button.click((e) => {
  $container.addClass('openModal');
})

$closeButton.click(() => {
  $container.removeClass('openModal');

})

/*const $calendarContainer=$('.calendar-modal')
const $calendar=$('.calendar-modal')
const $calendarButton=$('.js-calendar-button')*/

/*円グラフ*/
window.onload=function(){
  let context=document.querySelector("#language-circle").getContext('2d')


  const language=[];
  
  fetch('http://posse-task.anti-pattern.co.jp/1st-work/study_language.json')
    .then(response => {
      return response.json();
    })
    .then(data =>{
      console.log(data)
      for (const item of data){
        var name=Object.keys(item)
        console.log(name)
        
        
        for (const key of name){
          var number=item[key]
          
          language.push(number)

        }
      
      

      }
      new Chart(context,{
        type:'doughnut',
        data:{
          labels:name,
          datasets:[{
            backgroundColor:['#0000ff','#4682B4','#48D1CC','#33FFFF','#33CCFF','#DCC2FF','#9057FF','#5507FF'],
            data:language,
          }]
    
        },
        options:{
          legend:{
            position:'bottom',
          },
          responsive: true,
          maintainAspectRatio: false,
  
        }
      })
      

      
    })
    
  
  /*content circle*/
  let area=document.querySelector('#content-circle').getContext('2d')
  const content=[]
  fetch('http://posse-task.anti-pattern.co.jp/1st-work/study_contents.json')
    .then(response =>{
      return response.json();
    })
    .then(data =>{
      console.log(data)
      for (const item of data){
        var name=Object.keys(item)
        for (const key of name){
          var number=item[key]
          
          content.push(number)

        }
      }

      new Chart(area,{
        type:'doughnut',
        data:{
          labels:name,
          datasets:[{
            backgroundColor:['#0000ff','#4682B4','#48D1CC'],
            data:content,
          }]
    
        },
        options:{
          legend:{
            position:'bottom',
          },
          responsive: true,
          maintainAspectRatio: false,
        }
      })
    })
    console.log(content)






/*棒グラフ*/
    var rod=document.querySelector(".rod-canvas").getContext('2d')
  
    const label=[];
    const time=[];
    fetch('https://posse-task.anti-pattern.co.jp/1st-work/study_time.json')
      .then(response => {
        return response.json();
      })
      .then(data => {
        for(const item of data){
          var day=item.day;
          label.push(day)
  
  
  
          var hour=item.time;
          time.push(hour)
  
          
          
        }
      
      
        new Chart(rod,{
          type:'bar',
          data:{
            labels: label,
            datasets:[{
              data:time ,
              backgroundColor:"#0066cc",
            }],
          },
          options:{
            legend:{
              display:false
            },
            scales:{
              xAxes:[{
                scaleLabel:{
                  display:false
                },
                gridLines:{
                  display:false
                },
                ticks:{
                  maxRotation:0,
                  minRotation:0,
                  
                  callback: function(value,index,values){
                    if(index % 2 ===0){
                      return "";
                    }
                    return value;
                  }
                }
              }],
              yAxes:[{
                scaleLabel:{
                  display:false
                },
                gridLines:{
                  display:false,
                  drawBorder:false
                },
                ticks:{
                  callback:function(tick,index){
                    if(index % 2 ===1){
                      return"";
                    }
                    return tick.toString() + 'h';
                  }
                }
      
              }]
            },
            responsive: true,
            maintainAspectRatio: false,
          },
          
        })
      })


}
   /*calendar*/
   const calendarButton=$('#calendar-input')
   const calendarContainer=$('.calendar-modal')
   const calendarCloseButton=$('.js-closeModal')

   const calendarInput=document.getElementById('calendar-input')
   const decideButton=$('.decide-button')

   
   calendarButton.click(() =>{
     calendarContainer.addClass('openModal')
     $container.removeClass('openModal')
   })
   calendarCloseButton.click(()=>{
     calendarContainer.removeClass('openModal')
     $container.addClass('openModal')

   })
   decideButton.click(() => {
    calendarContainer.removeClass('openModal')
    $container.addClass('openModal')
  })
 





   const weeks = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
   console.log(new Date())
   const date = new Date()
   const year = date.getFullYear()
   const month = date.getMonth() + 1
   const startDate = new Date(year, month - 1, 1) // 月の最初の日を取得
   const endDate = new Date(year, month,  0) // 月の最後の日を取得
   const endDayCount = endDate.getDate() // 月の末日
   const startDay = startDate.getDay() // 月の最初の日の曜日を取得
   let dayCount = 1 // 日にちのカウント
   let calendarHtml = '' // HTMLを組み立てる変数

   /*calendarHtml += '<h1>' + year  + '/' + month + '</h1>'*/
   calendarHtml += '<table>'

   // 曜日の行を作成
   for (let i = 0; i < weeks.length; i++) {
       calendarHtml += '<td class="day-title">' + weeks[i] + '</td>'
   }

   for (let w = 0; w < 6; w++) {
       calendarHtml += '<tr>'

       for (let d = 0; d < 7; d++) {
           if (w == 0 && d < startDay) {
               // 1行目で1日の曜日の前
               calendarHtml += '<td><button id="day-button"></button></td>'
           } else if (dayCount > endDayCount) {
               // 末尾の日数を超えた
               calendarHtml += '<td><button id="day-button"></button></td>'
           } else {
               calendarHtml += `<td><button id="day-button" value="${dayCount}" onclick=show(value);>` + dayCount + `</button></td>`
               
              function show(e){
                var calendarNumber=year + '年' + month + '月' +e+'日'
                
              
                console.log(calendarNumber)
                calendarInput.value =calendarNumber
                $closeButton.click(() => {
                  $container.removeClass('openModal');
                
                })
            

               }
               dayCount++

               

  
               
           }
       }
       calendarHtml += '</tr>'
   }
   calendarHtml += '</table>'
  

   document.querySelector('.calendar').innerHTML = calendarHtml

  

   
 



