const ALL_QUIZ = [
  {
    id:1,
    question: '日本のIT人材が2030年には最大どれくらい不足すると言われているでしょうか？',
    answers: ['約28万人', '約79万人', '約183万人'],
    correctNumber: 1,
    note: '経済産業省 2019年3月 － IT 人材需給に関する調査'
  },
  {
    id:2,
    question: '既存業界のビジネスと、先進的なテクノロジーを結びつけて生まれた、新しいビジネスのことをなんと言うでしょう？',
    answers: ['INTECH', 'cBIZZTECH', 'X-TECH'],
    correctNumber: 2,
  },
  {
    id:3,
    question: 'IoTとは何の略でしょう？',
    answers: ['Internet of Things', 'Integrate into Technology', 'Information on Tool'],
    correctNumber: 0,
  },
  {
    id:4,
    question: 'イギリスのコンピューター科学者であるギャビン・ウッド氏が提唱した、ブロックチェーン技術を活用した「次世代分散型インターネット」のことをなんと言うでしょう？',
    answers: ['Society 5.0', 'CyPhy', 'SDGs'],
    correctNumber: 0,
    note: 'Society5.0 - 科学技術政策 - 内閣府'
  },
  {
    id:5,
    question: 'イギリスのコンピューター科学者であるギャビン・ウッド氏が提唱した、ブロックチェーン技術を活用した「次世代分散型インターネット」のことをなんと言うでしょう？',
    answers: ['Web3.0', 'NFT', 'メタバース'],
    correctNumber: 0,
  },
  {
    id:6,
    question: '先進テクノロジー活用企業と出遅れた企業の収益性の差はどれくらいあると言われているでしょうか？',
    answers: ['約2倍', '約5倍', '約11倍'],
    correctNumber: 1,
    note: 'Accenture Technology Vision 2021'
  },
  


];




const quizQuestion=document.getElementById('js-quizContainer');

/**const quizQuestionProduct=ALL_QUIZ.map(item => item['question'])**/
const quizMaker=(quiz,quizNumber) => {

  const answersContent=quiz.answers.map((answer,answerNumber) =>
  `<li>
      <button class="answer-list-button-${answerNumber +1}" data-answer="${answerNumber}">${answer}<img class="button-img-${answerNumber +1}" src="./img/icon/icon-arrow.svg" alt="クリック">
      </button>
      </li>`

  
    ).join('');
 
  
  const noteContent=quiz.note? `<div class="answer-reference">
    <img src="./img/icon/icon-note.svg" alt="帽子マーク">
    <p>${quiz.note}</p>
  </div>` : '';

  

  return `<div class="quiz1">
    <section class="js-quiz" data-quiz="${quizNumber}">
      <div class="quiz-question">
        <section>
          <div class="quiz-number">Q${quizNumber+1}</div>
          <p class="quiz-question">${quiz.question}</p>
        </section>
        <div class="quiz-img">
          <img src="./img/quiz/img-quiz0${quiz.id}.png" alt="クイズ2">
        </div>
      </div>
      <div class="question-answer">
        <div class="answer-mark">A</div>
        <ul class="answer-list">
          ${answersContent}
        </ul>
        <div class="quiz-box-answer">
          <p class="quizBoxAnswerTitle"></p>
          <p class="quiz-box-answer-content">
            <span class="quizBoxAnswerLabel"></span>
            <span class="answertext"></span>
          </p>
        </div>
      </div>
      ${noteContent}
    </section> 
  </div>`

  
}

const shuffle=function shuffle(array){
  for (let i = array.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const quizShuffle = shuffle(ALL_QUIZ);


quizQuestion.innerHTML=quizShuffle.map((quiz,index) => {
  return quizMaker(quiz,index)
}).join('');



const answerList1=document.getElementsByClassName('answer-list-button-1');
const answerList2=document.getElementsByClassName('answer-list-button-2');
const answerList3=document.getElementsByClassName('answer-list-button-3');



const allQuiz=document.querySelectorAll('.js-quiz');
const quizBoxAnswerTitleBefore = document.querySelectorAll('.quizBoxAnswerTitle');
const quizBoxAnswerLabelBefore =document.querySelectorAll('.quizBoxAnswerLabel');
const answerTextBefore=document.querySelectorAll('.answertext');
const quizBoxAnswer=document.querySelectorAll('.quiz-box-answer');
const buttonImg1=document.querySelectorAll('.button-img-1');
const buttonImg2=document.querySelectorAll('.button-img-2');
const buttonImg3=document.querySelectorAll('.button-img-3');

allQuiz.forEach(quiz =>{
  for(let i=0; i < answerList1.length; i++){
    const dataAnswer = answerList1[i].getAttribute('data-answer');
    const quizBoxAnswerTitle=quizBoxAnswerTitleBefore[i];
    const quizBoxAnswerLabel=quizBoxAnswerLabelBefore[i];
    const answerText=answerTextBefore[i];
    const indexNumber=ALL_QUIZ[i].correctNumber;
    const correctValue=ALL_QUIZ[i].answers[Number(ALL_QUIZ[i].correctNumber)];

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
  for(let i=0; i < answerList2.length; i++){
    const dataAnswer = answerList2[i].getAttribute('data-answer');
    const quizBoxAnswerTitle=quizBoxAnswerTitleBefore[i];
    const quizBoxAnswerLabel=quizBoxAnswerLabelBefore[i];
    const answerText=answerTextBefore[i];
    const indexNumber=ALL_QUIZ[i].correctNumber;
    const correctValue=ALL_QUIZ[i].answers[Number(ALL_QUIZ[i].correctNumber)];
  
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
    const indexNumber=ALL_QUIZ[i].correctNumber;
    const correctValue=ALL_QUIZ[i].answers[Number(ALL_QUIZ[i].correctNumber)];
  
    answerList3[i].addEventListener('click',function(){
      answerList3[i].classList.add('is-selected');
      const isCorrect = Number(dataAnswer)===Number(indexNumber);
      quizBoxAnswer[i].classList.add(isCorrect? 'is-correct' : 'is-incorrect');
      
      answerList2[i].disabled=true;
      answerList1[i].disabled=true;
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
