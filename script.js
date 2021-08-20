// problem no 1
document.getElementById("top-player-title").style.color = 'red';
document.getElementById("top-blogs-title").style.color = 'red';
document.getElementById("courses-title").style.color = 'red';

// problem no 2
const players = document.getElementsByClassName("player-div");
for (const player of players) {
    player.style.backgroundColor = 'rgb(255,0,255,0.6)';
    player.style.padding = '10px';
    player.style.borderRadius = '10px';
}

// problem no 3
document.getElementById('adding-button').addEventListener('click', function () {
    // console.log("adding button clicked");
    const li = document.createElement('li');
    li.classList.add('list-item');

    li.innerText = 'New item added by js';
    // console.log(liText);

    const items = document.getElementById("items");
    items.appendChild(li);
})

// problem no 4
document.getElementById("count-button").addEventListener('click', function () {
    const countButton = document.getElementById("count-button");
    const inputField = document.getElementById("count-field");
    inputValue = inputField.value;
    // console.log(inputValue);

    if (inputField.value <= 4) {   // problem no 5
        inputValue++;
        inputField.value = inputValue;
    }
    else {
        countButton.setAttribute('disabled', true);
    }
    // increment korar por display te abar oi man show na korle kmne hbe ?????????
})

