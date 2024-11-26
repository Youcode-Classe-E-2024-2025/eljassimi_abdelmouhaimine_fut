let data = [];

async function fetchPlayers() {
    let storedData = localStorage.getItem('players');
    if (storedData) {
        data = JSON.parse(storedData);
    } else {
        try {
            const response = await fetch('\players.json');
            const fetchedData = await response.json();
            if (fetchedData) {
                data = fetchedData;
                localStorage.setItem("players", JSON.stringify(data));
            }
        } catch (error) {
            console.error("Error fetching data:", error);
            
        }
    }
}

fetchPlayers();

dataplayers = data.players;
console.log('dataaaaa : ', dataplayers);

let players = document.getElementById("players");

function displayAllPlayers(dataplayers){
  players.innerHTML = ``;
    dataplayers.forEach(element => {
        if(element.position != 'GK'){
    players.innerHTML += `
      <div class="relative w-72 bg-cover bg-center p-4 text-black" style="background-image: url('src/assets/img/badge_gold.webp');">
            <div id="rating" class="absolute top-16 left-10   text-4xl font-bold">
              ${element.rating}
            </div>
            <div id="position" class=" absolute top-24 left-10 text-sm font-bold pt-1  text-black px-2 rounded">
            ${element.position}
            </div>
            <div class="flex flex-col items-center mt-12">
              <img id="photo" src="${element.photo}" alt="Lionel Messi" class="w-44">
              <h1 id="name" class="text-xl font-bold">${element.name}</h1>
              <div class="flex items-center">
                <img id="flag" src="${element.flag}" alt="Argentina" class="w-5 h-5 mr-2">
                <img id="logo" src="${element.logo}" alt="Inter Miami" class="w-5 h-5 mr-2">
              </div>
            </div>
            <div class="flex flex-col items-center space-y-1">
              <div class="flex justify-around w-full px-4">
                <span  class="text-sm text-black">PAC</span>
                <span  class="text-sm text-black">SHO</span>
                <span  class="text-sm text-black">KIC</span>
                <span  class="text-sm text-black">REF</span>
                <span  class="text-sm text-black">SPE</span>
                <span  class="text-sm text-black">POS</span>
              </div>
              <div class="flex justify-around w-full px-4 pb-6">
              <span id="pace" class="text-sm font-bold text-black">${element.pace}</span>
              <span id="shooting" class="text-sm font-bold text-black">${element.shooting}</span>
              <span id="passing" class="text-sm font-bold text-black">${element.passing}</span>
              <span id="dribbling" class="text-sm font-bold text-black">${element.dribbling}</span>
              <span id="defending" class="text-sm font-bold text-black">${element.defending}</span>
              <span id="physical" class="text-sm font-bold text-black">${element.physical}</span>
            </div>
           </div>
    `
  }else{
    players.innerHTML += `
    <div class="relative w-72 bg-cover bg-center p-4 text-black" style="background-image: url('src/assets/img/badge_gold.webp');">
          <div id="rating" class="absolute top-16 left-10   text-4xl font-bold">
            ${element.rating}
          </div>
          <div id="position" class=" absolute top-24 left-10 text-sm font-bold pt-1  text-black px-2 rounded">
          ${element.position}
          </div>
          <div class="flex flex-col items-center mt-12">
            <img id="photo" src="${element.photo}" alt="Lionel Messi" class="w-44">
            <h1 id="name" class="text-xl font-bold">${element.name}</h1>
            <div class="flex items-center">
              <img id="flag" src="${element.flag}" alt="Argentina" class="w-5 h-5 mr-2">
              <img id="logo" src="${element.logo}" alt="Inter Miami" class="w-5 h-5 mr-2">
            </div>
          </div>
          <div class="flex flex-col items-center space-y-1">
            <div class="flex justify-around w-full px-4">
              <span  class="text-sm text-black">DIV</span>
              <span  class="text-sm text-black">HAN</span>
              <span  class="text-sm text-black">PAS</span>
              <span  class="text-sm text-black">DRI</span>
              <span  class="text-sm text-black">DEF</span>
              <span  class="text-sm text-black">PHY</span>
            </div>
            <div class="flex justify-around w-full px-4 pb-6">
                <span id="pace" class="text-sm font-bold text-black">${element.diving}</span>
                <span id="shooting" class="text-sm font-bold text-black">${element.handling}</span>
                <span id="passing" class="text-sm font-bold text-black">${element.kicking}</span>
                <span id="dribbling" class="text-sm font-bold text-black">${element.reflexes}</span>
                <span id="defending" class="text-sm font-bold text-black">${element.speed}</span>
                <span id="physical" class="text-sm font-bold text-black">${element.positioning}</span>
              </div>
         </div>
  `

  }
  });
}
displayAllPlayers(dataplayers);

let addplayer = document.getElementById('addplayer');
let PlayerModal = document.getElementById('PlayerModal');
let closeModal = document.getElementById('closeModal');

addplayer.addEventListener('click',function(){
  PlayerModal.classList.remove('hidden');
})
closeModal.addEventListener('click', function(){
  PlayerModal.classList.add('hidden');
})

let playerName = document.getElementById('playerName');
let playerPhoto = document.getElementById('playerPhoto');
let playerNationality = document.getElementById('playerNationality');
let playerFlag = document.getElementById('playerFlag');
let playerClub = document.getElementById('playerClub');
let playerLogo = document.getElementById('playerLogo');
let playerRating = document.getElementById('playerRating');
let playerPace = document.getElementById('playerPace');
let playerShooting = document.getElementById('playerShooting');
let playerPassing = document.getElementById('playerPassing');
let playerDribbling = document.getElementById('playerDribbling');
let playerDefending = document.getElementById('playerDefending');
let playerPhysical = document.getElementById('playerPhysical');


let addplayerbtn = document.getElementById('addplayerbtn');


let playerPhotoBase64 = "";
let playerFlagBase64 = "";
let playerLogoBase64 = "";

playerPhoto.addEventListener("change", function (event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      playerPhotoBase64 = e.target.result;
      console.log("Base64 String:", playerPhotoBase64);
    };
    reader.readAsDataURL(file);
  }
});

playerFlag.addEventListener("change", function (event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      playerFlagBase64 = e.target.result;
    };
    reader.readAsDataURL(file);
  }
});

playerLogo.addEventListener("change", function (event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      playerLogoBase64 = e.target.result;
    };
    reader.readAsDataURL(file);
  }
});


addplayerbtn.addEventListener('click', function(e){
  e.preventDefault();
  if(playerPosition.value != 'GK'){
    let newplayer = {
            name: playerName.value,
            photo: playerPhotoBase64,
            position: playerPosition.value,
            nationality: playerNationality.value,
            flag: playerFlagBase64,
            club: playerClub.value,
            logo: playerLogoBase64,
            rating: playerRating.value,
            pace: playerPace.value,
            shooting: playerShooting.value,
            passing: playerPassing.value,
            dribbling: playerDribbling.value,
            defending: playerDefending.value,
            physical: playerPhysical.value
          }
            data.players.push(newplayer);
            localStorage.setItem("players", JSON.stringify(data));
            dataplayers = data.players;
            displayAllPlayers(dataplayers)
            PlayerModal.classList.add('hidden');
  }else{
          let newgoalkeeper = {
            name: playerName.value,
            photo: playerPhotoBase64,
            position: playerPosition.value,
            nationality: playerNationality.value,
            flag: playerFlagBase64,
            club: playerClub.value,
            logo: playerLogoBase64,
            rating: playerRating.value,
            diving: playerPace.value,
            handling: playerShooting.value,
            kicking: playerPassing.value,
            reflexes: playerDribbling.value,
            speed: playerDefending.value,
            positioning: playerPhysical.value
          }
            data.players.push(newgoalkeeper);
            localStorage.setItem("players", JSON.stringify(data));
            dataplayers = data.players;
            displayAllPlayers(dataplayers)
            PlayerModal.classList.add('hidden');
  }
})


const card = document.querySelectorAll("#card");
const allplayers = document.getElementById("allplayers");
const formation = document.getElementById("formation");

const positions = {
  LW: 'LW',
  ST: 'ST',
  RW: 'RW',
  CM: 'CM',
  LB: 'LB',
  CB: 'CB',
  RB: 'RB',
  GK: 'GK'
}

card.forEach(cards => {
  cards.addEventListener('click', function (e) {
    Object.values(positions).forEach((value) => {
      if (cards.dataset.position === value) {
        let playersArray = [];
        data.players.forEach(element => {
          if (element.position === value) {
            playersArray.push(element);
          }
        });

        displayAllPlayers(playersArray);

        allplayers.classList.remove('hidden');
        setTimeout(() => {
          allplayers.classList.add('opacity-100', 'scale-100');
          allplayers.classList.remove('opacity-0', 'scale-95');
        }, 10);

        formation.classList.add('hidden');
      }
    });
  });
});

const closebtn = document.getElementById('closebtn');

closebtn.addEventListener('click', function(){
  allplayers.classList.add('hidden');
  formation.classList.remove('hidden');

  allplayers.classList.add('hidden');
        setTimeout(() => {
          allplayers.classList.add('opacity-0', 'scale-95');
          allplayers.classList.remove('opacity-100', 'scale-100');
        }, 10);
        formation.classList.remove('hidden');
});



document.addEventListener('DOMContentLoaded', function() {
  const pace = document.getElementById('p');
  const shooting = document.getElementById('s');
  const passing = document.getElementById('pas');
  const dribbling = document.getElementById('dri');
  const defending = document.getElementById('def');
  const physical = document.getElementById('phys');
  let playerPosition = document.getElementById('playerPosition');
  
  playerPosition.addEventListener('change', function(e) {
    e.preventDefault();
    if(playerPosition.value === 'GK') {
      
      pace.innerText = 'Diving';
      shooting.innerText = 'Handling';
      passing.innerText = 'Kicking';
      dribbling.innerText = 'Reflexes';
      defending.innerText = 'Speed';
      physical.innerText = 'Positioning';
    }else{
      pace.innerText = 'Pace';
      shooting.innerText = 'Shooting';
      passing.innerText = 'Passing';
      dribbling.innerText = 'Dribbling';
      defending.innerText = 'Defending';
      physical.innerText = 'Physical';

    }
  });
});
