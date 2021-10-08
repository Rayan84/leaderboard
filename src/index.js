import './style.css';
const baseURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/'
const scoresURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Ahr8VUxI7b1t5hzEwQCC/scores'


const createGame = async () => {

  let xhr = new XMLHttpRequest();
  xhr.open('POST',  `${baseURL}games/`);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(JSON.stringify({
    'name': 'my cool new game'
    })
  )
  xhr.responseType = 'json';
  await xhr.response;
  //console.log(xhr)
}


createGame();



const receiveData = async () => {
  let data;
  let xhr = new XMLHttpRequest();
  await xhr.open('GET', scoresURL);
  xhr.send();
  xhr.onload = () => { 
      if(xhr.status === 200) {
        data = JSON.parse(xhr.response);
        data = Object.values(data.result);
     //   console.log(data.length);
        for (let i = 0; i < data.length; i++){
      //      console.log(data[i])
        }
      }else {
          console.log(`error ${xhr.status}`)
      }
    }

  
}

const refreshButton = document.getElementById('refresh-button');
refreshButton.addEventListener('click', receiveData);