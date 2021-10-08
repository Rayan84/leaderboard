import './style.css';
const baseURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/'
const scoresURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Ahr8VUxI7b1t5hzEwQCC/scores'


const createGame = () => {

  let xhr = new XMLHttpRequest();
  xhr.open('POST',  `${baseURL}games/`);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(JSON.stringify({
    'name': 'my cool new game'
    })
  )
  .then = () => console.log('Game created...');
}

createGame();