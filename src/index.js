import './style.css';
import { createTable } from './table';
import { table } from './table';
const scoresURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Ahr8VUxI7b1t5hzEwQCC/scores/'

const receiveData = async () => {
  let data;
  let xhr = new XMLHttpRequest();
  await xhr.open('GET', scoresURL);
  xhr.send();
  xhr.onload = () => { 
      if(xhr.status === 200) {
        data = JSON.parse(xhr.response);
        let scores = Object.values(data.result);
        table.innerHTML = '';
        for (let i = 0; i < scores.length; i++){
          createTable(scores[i].user, scores[i].score);
        }
      }
    }  
}

const submit = (e) => {
    e.preventDefault();
    let user = document.getElementById('user');
    let score = document.getElementById('score');
    let xhr = new XMLHttpRequest();
    xhr.open('POST', scoresURL);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({
        "user": user.value,
        "score": score.value
    })
    );

    user.value = '';
    score.value = '';
}

const submitButton = document.getElementById('submit-button');
submitButton.addEventListener('click', submit);


const refreshButton = document.getElementById('refresh-button');
refreshButton.addEventListener('click', receiveData);
receiveData();