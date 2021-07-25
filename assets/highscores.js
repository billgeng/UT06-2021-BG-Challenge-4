
const highScoreList = document.querySelector ('#highScoresList')
const highScores = JSON.parse(localStorage.getItem('highScores')) || []

function ScoreAdd(){
//var ulEl = document.getElementById('#highScoresList');
var liEl = document.createElement("li") ;
var highScoreText = [];
var liText = [];

//const highScoreText = highScores.map(score => {
//    return '<li> ${highScores.name} - ${highScores.score} </li>'}).join('')

 for (var i=0;i<highScores.length;i++){
     highScoreText = highScores[i];
     liText = 'Name: ' + highScoreText.name + '  ' + 'Score: ' + highScoreText.score;
     console.log(liText);
     highScoreList.innerHTML = liText; 
     //liEl.textContent = liText;
     //ulEl.appendChild(liEl);
     
 }
    
}

ScoreAdd()
   