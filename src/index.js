import './style.css';
import { createTable } from './table';
import { table } from './table';
const scoresURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/4yIzMNcWW7DRdx34tn08/scores/'


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

let userInput = document.getElementById('user');
let scoreInput = document.getElementById('score');

const validateInput = (e) => {
    e.preventDefault();
    if (userInput.value == '' || scoreInput.value == '') {
        console.log('if is true');
        userInput.classList.add('alert-color');
        scoreInput.classList.add('alert-color');
        setTimeout(() => {
            userInput.classList.remove('alert-color');
            scoreInput.classList.remove('alert-color');
        }, 1500);
        return false;
    }else {
        submitData();
        const notification = document.getElementById('notification');
        notification.style.display = 'block';
        setTimeout(() => {
            notification.style.display = 'none';
        }, 1500);
        userInput.value = '';
        scoreInput.value = '';
    }
}

const submitData = () => {    
    let xhr = new XMLHttpRequest();
    xhr.open('POST', scoresURL);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({
        "user": userInput.value,
        "score": scoreInput.value
      })
    );
}

const submitButton = document.getElementById('submit-button');
submitButton.addEventListener('click', validateInput);

const refreshButton = document.getElementById('refresh-button');
refreshButton.addEventListener('click', receiveData);
receiveData();