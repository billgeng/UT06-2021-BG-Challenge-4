const username = document.querySelector('#username')
const saveScoreBtn = document.querySelector('#saveScoreBtn')
const finalScore = document.querySelector('#finalScore')
const mostReScore = localStorage.getItem('mostReScore');

const highScores = JSON.parse(localStorage.getItem('highScores')) || []

const MAX_HIGH_SCORES = 6

finalScore.innerText = 'Your Score :' +  mostReScore


saveHighScore = e => {
    e.preventDefault ()

    const score = {
        name : username.value,
        score: mostReScore
        
    }
    highScores.push(score)

    highScores.sort ((a,b) => {
        return b.score - a.score
    })

    highScores.splice(6)

    localStorage.setItem('highScores',JSON.stringify(highScores))
    window.location.assign('/')

}

