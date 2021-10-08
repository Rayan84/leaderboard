export const table = document.getElementById('table');
export const createTable = (name, score) => {
    let tr = document.createElement('TR');
    let nameTD = document.createElement('TD');
    let scoreTD = document.createElement('TD');
    nameTD.innerHTML = name;
    scoreTD.innerHTML = score;
    tr.appendChild(nameTD);
    tr.appendChild(scoreTD);
    table.appendChild(tr);
}