/*const calendarButton=$('#calendar-input')
const calendarContainer=$('.calendar-modal')
const calendarCloseButton=$('.js-closeModal')





calendarButton.click(() =>{
  calendarContainer.addClass('openModal')
  $container.removeClass('openModal')

  var toJPN = { 
    weekdays : ['日', '月', '火', '水', '木', '金', '土'],
    months: ['1月', '2月', '3月', '4月', '5月', '6月', '7月',
              '8月', '9月', '10月', '11月', '12月'
            ]
   };
  
  // '月'を日本語化
  flatpickr.init.prototype.l10n.months.longhand = toJPN.months;
  

  flatpickr('#js-calendarShow')

})

calendarCloseButton.click(() =>{
  calendarContainer.removeClass('openModal')
  $container.addClass('openModal')
  
})

const decideButton=$('.decide-button')
const calendarShow=document.getElementById('js-calendarShow')
const calendarInput=document.getElementById('calendar-input')
decideButton.click(() => {
  console.log(calendarShow.value)
  calendarInput.value =calendarShow.value
  calendarContainer.removeClass('openModal')
  $container.addClass('openModal')

})
$closeButton.click(() => {
  $container.removeClass('openModal');

})*/