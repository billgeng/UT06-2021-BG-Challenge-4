
const highScoresList = document.querySelector('#highScoresList')
const highScores = JSON.parse(localStorage.getItem('highScores')) || []


highScoresList.innerHTML = highScores.map(score => {
 return '<li class="high-score"> highScores[$].name.value - (highScore[$].score)</li>'
}).join('')
 
console.log (highScores[1].name)
