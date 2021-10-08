import './style.css';
import { createTable } from './list';
const scoresURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Ahr8VUxI7b1t5hzEwQCC/scores'

const receiveData = async () => {
  let data;
  let xhr = new XMLHttpRequest();
  await xhr.open('GET', scoresURL);
  xhr.send();
  xhr.onload = () => { 
      if(xhr.status === 200) {
        data = JSON.parse(xhr.response);
        let scores = Object.values(data.result);
        for (let i = 0; i < scores.length; i++){
            createTable(scores[i])
        }
      }else {
          console.log(`error ${xhr.status}`)
      }
    }

  
}

const refreshButton = document.getElementById('refresh-button');
refreshButton.addEventListener('click', receiveData);