const username = document.querySelector('#username')
const saveScoreBtn = document.querySelector('#saveScoreBtn')
const finalScore = document.querySelector('#finalScore')
const mostReScore = localStorage.getItem('mostReScore');

const highScores = JSON.parse(localStorage.getItem('highScores')) || []

const MAX_HIGH_SCORES = 5

finalScore.innerText = 'Your Score :' +  mostReScore


saveHighScore = e => {
    e.preventDefault ()

    const score = {
        score: mostReScore,
        name : username.value
    }
    highScores.push(score)

    highScores.sort ((a,b) => {
        return b.score - a.score
    })

    highScores.splice(1)

    localStorage.setItem('highScores',JSON.stringify(highScores))
    window.location.assign('../index.html')


}

