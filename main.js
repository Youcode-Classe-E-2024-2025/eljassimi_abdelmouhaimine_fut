let addplayer = document.getElementById('addplayer');
let PlayerModal = document.getElementById('PlayerModal');
let closeModal = document.getElementById('closeModal');


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


const card = document.querySelectorAll("#card");
const allplayers = document.getElementById("allplayers");
const formation = document.getElementById("formation");

const cardsplayer = document.querySelectorAll("#cardsplayer");

let data = [];

async function fetchPlayers() {
    let storedData = localStorage.getItem('players');
    if (storedData) {
        data = JSON.parse(storedData);
    } else {
        try {
            const response = await fetch('./players.json');
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

let dataplayers = data.players;
console.log(dataplayers);



let players = document.getElementById("players");

function displayAllPlayers(dataplayers){
  players.innerHTML = ``;
    dataplayers.forEach(element => {
        if(element.position != 'GK'){
            players.innerHTML += `
              <div id="cardsplayer" data-display="1" data-id ="${element.id}" class="relative w-72 bg-cover bg-center p-4 text-black" style="background-image: url('src/assets/img/badge_gold.webp');">
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
            <div id="cardsplayer" data-display="1" data-id ="${element.id}" class="relative w-72 bg-cover bg-center p-4 text-black" style="background-image: url('src/assets/img/badge_gold.webp');">
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
  // addCardClickListeners();
}
displayAllPlayers(dataplayers);



addplayer.addEventListener('click',function(){
  PlayerModal.classList.remove('hidden');
})
closeModal.addEventListener('click', function(){
  PlayerModal.classList.add('hidden');
})

playerPhoto.addEventListener("change", function (event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      playerPhotoBase64 = e.target.result;
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


addplayerbtn.addEventListener('click', function (e) {
  e.preventDefault();

  const name = playerName.value;
  const powers = [
    playerRating.value,
    playerPace.value,
    playerShooting.value,
    playerPassing.value,
    playerDribbling.value,
    playerDefending.value,
    playerPhysical.value,
  ];

  let rejectname = document.getElementById('rejectname');
  let rejectclub = document.getElementById('rejectclub');
  let rejectphoto = document.getElementById('rejectphoto');
  let rejectlogo = document.getElementById('rejectlogo');
  let rejectflag = document.getElementById('rejectflag');
  let rejectpower = document.getElementById('rejectpower');
  let rejectnationality = document.getElementById('rejectnationality');

  rejectname.innerHTML = ``; rejectclub.innerHTML = ``;  rejectphoto.innerHTML = ``;  rejectlogo.innerHTML = ``;  rejectflag.innerHTML = ``;
  rejectpower.innerHTML = ``;  rejectnationality.innerHTML = ``;

  if (!name || /[0-9]/.test(name)) {
    rejectname.innerHTML += `<p class="text-red-600">Name incorrect</p>`
    return;
  }

  if (playerPhoto.files.length === 0) {
    rejectphoto.innerHTML += `<p class="text-red-600">Please select a file!</p>`
    return;
  }

  if (!playerNationality.value || /[0-9]/.test(playerNationality.value)) {
    rejectnationality.innerHTML += `<p class="text-red-600">Nationality incorrect</p>`
    return;
  }

  if (playerFlag.files.length === 0 ) {
    rejectflag.innerHTML += `<p class="text-red-600">Please select a file!</p>`
    return;
  }

  if (!playerClub.value || /[0-9]/.test(playerClub.value)) {
    rejectclub.innerHTML += `<p class="text-red-600">Club incorrect</p>`
    return;
  }

  if (playerLogo.files.length === 0) {
    rejectlogo.innerHTML += `<p class="text-red-600">Please select a file!</p>`
    return;
  }

  for (const power of powers) {
    if (power === '' || isNaN(power) || power < 0 || power > 100) {
      rejectpower.innerHTML += `<p class="text-red-600">power values between 0-100</p>`
      return;
    }
  }
    // idd  =  data.players.length + 1;
  if (playerPosition.value !== 'GK') {
    let newplayer = {
      id : data.players.length + 1,
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
      physical: playerPhysical.value,
    };

    data.players.push(newplayer);
  } else {
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
      positioning: playerPhysical.value,
    };

    data.players.push(newgoalkeeper);
  }

  localStorage.setItem('players', JSON.stringify(data));
  dataplayers = data.players;
  displayAllPlayers(dataplayers);
  PlayerModal.classList.add('hidden');
});



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

const closebtn = document.getElementById('closebtn');
closebtn.addEventListener('click', function(){
  allplayers.classList.add('hidden');
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



let cardPos;
let currentTarget;


card.forEach(cards => {
  cards.addEventListener('click', function (e) {
    allplayers.classList.remove('hidden');
    currentTarget= e.currentTarget;
    cardPos = e.currentTarget.dataset.position;
    const qrr = filtrePosition(cardPos);
    formation.classList.add('hidden');
    displayAllPlayers(qrr);
    ClickCard();
  });
});

function filtrePosition(pos){
  let a = [];

    dataplayers.forEach(element => {
      let existing = document.querySelector(`#player${element.id}`);
      console.log(existing);
      
      if(existing){
        return;
      }
      if(element.position === pos){
        a.push(element);
      }
    });
    return a;
}

function ClickCard(){
  const cardsplayer = document.querySelectorAll("#cardsplayer");
  cardsplayer.forEach(element =>{
    element.addEventListener("click",function(e){
      let playerdiv =  e.currentTarget.dataset.id;
      console.log(playerdiv);
      
      let foundPlr = dataplayers.find(plr => plr.id == playerdiv);      
      
      currentTarget.innerHTML = `
      <div id="player${foundPlr.id}" data-pos ="${foundPlr.position}" data-id="${foundPlr.id}" class="inteam relative h-28 w-20 bg-cover bg-center p-2 text-black" style="background-image: url('src/assets/img/badge_gold.webp');">
        <!-- Player Rating -->
        <div id="rating" class="absolute top-5 left-2 text-xs font-bold">
          ${foundPlr.rating}
        </div>
        <!-- Player Position -->
        <div id="position" class="absolute top-7 left-2 mt-1 text-xs font-bold">
          ${foundPlr.position}
        </div>

        <!-- Player Image and Info -->
        <div class="flex flex-col items-center">
          <img id="photo" src="${foundPlr.photo}" alt="Player" class="w-8 h-12 object-cover mt-4">

          <!-- Player Name -->
          <p id="name" class="text-[8px] font-bold text-center mt-1">
            ${foundPlr.name}
          </p>
        </div>
        <div class="flex items-center justify-center mt-1 space-x-1">
          <img id="flag" src="${foundPlr.flag}" alt="Flag" class="w-2 h-2">
          <img id="logo" src="${foundPlr.logo}" alt="Logo" class="w-2 h-2">
        </div>
         </div> `;

         allplayers.classList.add('hidden');
         formation.classList.remove('hidden');
        
    });
  })
}

