const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');
const timer = document.querySelector('#timer');


let currentQuestion = []
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let timerCounter = 100


let questions = [
    {
        question : 'How do you write "Hello World" in an alert box?',
        choice1 : 'msg("Hello World")',
        choice2 : 'alert("Hello World")',
        choice3 : 'msgBox("Hello World")',
        choice4 : 'alertBox("Hello World")',
        answer : 2,
    },

   {
        question: 'How to write an IF statement in JavaScript?',
        choice1: 'if i = 5',
        choice2: 'if (i == 5)',
        choice3: 'if i == 5 then',
        choice4: 'if i = 5 then',
        answer: 2,
    },

    {
        question: 'Which event occurs when the user clicks on an HTML element?',
        choice1: 'onclick',
        choice2: 'onmouseclick',
        choice3: 'onchange',
        choice4: 'onmouseover',
        answer: 1,
    },

    {
        question:' Choose the correct HTML element to define important text ',
        choice1: '<strong>',
        choice2: '<i>',
        choice3: '<important>',
        choice4: '<b>',
        answer: 1,
    },

    {
        question: 'what is the correct HTML for making a drop-down list?',
        choice1:'<input type="dropdown">',
        choice2: '<list>',
        choice3: '<input type="list">',
        choice4:  '<select>',
        answer: 4,
    }
]

const SCORE_POINTS = 20
const MAX_QUESTIONS = 5

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    
    var timerMachine = setInterval(() => {
        
        timerCounter --
        timer.innerText = timerCounter  
        if (timerCounter === 0) {
            return window.location.assign('./end.html') 
        }
        
    }, 1000);
  
    getNewQuestion()
}

getNewQuestion = () => {
  if (availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS || timerCounter === 0) {
      localStorage.setItem ('finalScore',score)
    
      return window.location.assign('./end.html')
  }
    questionCounter++ 
    progressText.innerText = 'Question:'+'    ' + questionCounter +'/' + MAX_QUESTIONS

    


    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset.number
        choice.innerText = currentQuestion['choice' + number]
    })
    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true

}

choices.forEach(choice => {
    
    choice.addEventListener('click',e => {
        if (!acceptingAnswers) return 
    
        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'
    
        if (classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
           }
           selectedChoice.parentElement.classList.add(classToApply)
           timerQuestion ()
                 
           setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()
        }, 1000)

        function timerQuestion () {
                        
            if (classToApply === 'incorrect') {
                timerCounter -= 30
                
            } else { timerCounter -- }

            if (timerCounter <= 0) {
                clearInterval (timerCounter)
                return window.location.assign('./end.html')
            
           }
         }


    })

   
     
})  

incrementScore = num => {
    score += num
    scoreText.innerText = score
}

startGame()



