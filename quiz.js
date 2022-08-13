const CORRECT_ANSWERS = [
  {
    index: 1,
    value: '約79万人'
  },
  {
    index: 2,
    value: 'X-TECH'
  },
  {
    index: 0,
    value: 'Internet of Things'
  },
  {
    index: 0,
    value: 'Society 5.0'
  },
  {
    index: 0,
    value: 'Web3.0'
  },
  {
    index: 1,
    value: '約5倍'
  }
];
const answerList1=document.getElementsByClassName('answer-list-button-1');
const answerList2=document.getElementsByClassName('answer-list-button-2');
const answerList3=document.getElementsByClassName('answer-list-button-3');

// すべての問題を取得

const allQuiz=document.querySelectorAll('.js-quiz');
const quizBoxAnswerTitleBefore = document.querySelectorAll('.quizBoxAnswerTitle');
const quizBoxAnswerLabelBefore =document.querySelectorAll('.quizBoxAnswerLabel');
const answerTextBefore=document.querySelectorAll('.answertext');
const quizBoxAnswer=document.querySelectorAll('.quiz-box-answer');
const buttonImg1=document.querySelectorAll('.button-img-1');
const buttonImg2=document.querySelectorAll('.button-img-2');
const buttonImg3=document.querySelectorAll('.button-img-3');
console.log(buttonImg1.length)

allQuiz.forEach(quiz =>{
  for(let i=0; i < answerList1.length; i++){
    const dataAnswer = answerList1[i].getAttribute('data-answer');
    const quizBoxAnswerTitle=quizBoxAnswerTitleBefore[i];
    const quizBoxAnswerLabel=quizBoxAnswerLabelBefore[i];
    const answerText=answerTextBefore[i];
    const indexNumber=CORRECT_ANSWERS[i].index;
    const correctValue=CORRECT_ANSWERS[i].value;
  
    answerList1[i].addEventListener('click',function(){
      answerList1[i].classList.add('is-selected');
      const isCorrect = Number(dataAnswer)===Number(indexNumber);
      quizBoxAnswer[i].classList.add(isCorrect? 'is-correct' : 'is-incorrect');
      answerList2[i].disabled=true;
      answerList3[i].disabled=true;
      buttonImg1[i].style.visibility='hidden';
      buttonImg2[i].style.visibility='hidden';
      buttonImg3[i].style.visibility='hidden';
      if(isCorrect){
        quizBoxAnswerTitle.innerText='正解！';
        quizBoxAnswerLabel.innerText='A';
        answerText.innerText=correctValue;
        quizBoxAnswerTitle.style.color='#e34e70';
      }
      else{
        quizBoxAnswerTitle.innerText='不正解...';
        quizBoxAnswerLabel.innerText='A';
        answerText.innerText=correctValue;
        quizBoxAnswerTitle.style.color='#0071bc';
        
  
      }
    });
  }
  
})

allQuiz.forEach(quiz =>{
  for(let i=0; i < answerList2.length; i++){
    const dataAnswer = answerList2[i].getAttribute('data-answer');
    const quizBoxAnswerTitle=quizBoxAnswerTitleBefore[i];
    const quizBoxAnswerLabel=quizBoxAnswerLabelBefore[i];
    const answerText=answerTextBefore[i];
    const indexNumber=CORRECT_ANSWERS[i].index;
    const correctValue=CORRECT_ANSWERS[i].value;
    
    answerList2[i].addEventListener('click',function(){
      answerList2[i].classList.add('is-selected');
      const isCorrect = Number(dataAnswer)===Number(indexNumber);
      quizBoxAnswer[i].classList.add(isCorrect? 'is-correct' : 'is-incorrect');
      answerList1[i].disabled=true;
      answerList3[i].disabled=true;
      buttonImg1[i].style.visibility='hidden';
      buttonImg2[i].style.visibility='hidden';
      buttonImg3[i].style.visibility='hidden';
      if(Number(dataAnswer)===Number(indexNumber)){
        quizBoxAnswerTitle.innerText='正解!';
        quizBoxAnswerLabel.innerText='A';
        answerText.innerText=correctValue;
        quizBoxAnswerTitle.style.color='#e34e70';
      }
      else{
        quizBoxAnswerTitle.innerText='不正解...';
        quizBoxAnswerLabel.innerText='A';
        answerText.innerText=correctValue;
        quizBoxAnswerTitle.style.color='#0071bc';
  
      }
    });
  }
  
})

allQuiz.forEach(quiz =>{
  for(let i=0; i < answerList3.length; i++){
    const dataAnswer = answerList3[i].getAttribute('data-answer');
    const quizBoxAnswerTitle=quizBoxAnswerTitleBefore[i];
    const quizBoxAnswerLabel=quizBoxAnswerLabelBefore[i];
    const answerText=answerTextBefore[i];
    const indexNumber=CORRECT_ANSWERS[i].index;
    const correctValue=CORRECT_ANSWERS[i].value;
    
    answerList3[i].addEventListener('click',function(){
      answerList3[i].classList.add('is-selected');
      const isCorrect = Number(dataAnswer)===Number(indexNumber);
      quizBoxAnswer[i].classList.add(isCorrect? 'is-correct' : 'is-incorrect');
      
      answerList1[i].disabled=true;
      answerList2[i].disabled=true;
      buttonImg1[i].style.visibility='hidden';
      buttonImg2[i].style.visibility='hidden';
      buttonImg3[i].style.visibility='hidden';
      if(Number(dataAnswer)===Number(indexNumber)){
        quizBoxAnswerTitle.innerText='正解!';
        quizBoxAnswerLabel.innerText='A';
        answerText.innerText=correctValue;
        quizBoxAnswerTitle.style.color='#e34e70';
      }
      else{
        quizBoxAnswerTitle.innerText='不正解...';
        quizBoxAnswerTitle.style.color='#0071bc';
        quizBoxAnswerLabel.innerText='A';
        answerText.innerText=correctValue;
  
      }
    });
  }
  
})