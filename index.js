let showSettings = false;

function profiledrop(){
  showSettings = !showSettings
  document.getElementById('profile-container').style.padding = `10rem`;
  if(showSettings){
    setTimeout(()=>{
      document.getElementById('settings-dropdown').style.display = `block`;
      document.getElementById('profile').innerHTML += `<img src="close.png" id="close-setting">`
    },50)
    
  } else{
    document.getElementById('profile-container').style.padding = `0rem`;
    setTimeout(()=>{
      document.getElementById('settings-dropdown').style.display = `none`
      document.getElementById('profile').innerHTML = `Zhiliang<img id="pfp" src="flybooty69.jpg">`
    },50)
    document.getElementById('profile-container').style.paddingTop = `7.5rem`
  }
}
let inputValue;
setInterval(()=>{
  inputValue = document.getElementById('input-box').value;
  if(inputValue){
    document.getElementById('send').style.opacity = '1';
    document.getElementById('send').style.cursor = 'pointer';
  }else{
    document.getElementById('send').style.opacity = '0.5'
    document.getElementById('send').style.cursor = 'not-allowed'
  }
},100)

let poopsicle = false;
let rowID = 1;
function startConvo(){
  if(!inputValue){return}
  if(!poopsicle){
    document.getElementById('input').style.position = 'fixed';
  document.getElementById('input').style.bottom = '35rem';
  document.getElementById('conversation').innerHTML = `
            <div class="row" id="row${rowID}">
              <div id="user-message">${inputValue} <img id="pfp" src="flybooty69.jpg"></div>
              <div id="response"><img id="chaiGPT-icon" src="coffee.png">The servers are down, please try again later.</div>
            </div>`;
  document.getElementById('input-box').value = '';
  document.getElementById('conversation').style.alignItems = 'start';
  document.getElementById('conversation').style.overflowY = 'auto';
  document.getElementById('convopage').style.paddingTop = '10rem'
  document.body.style.paddingBottom = '100rem'
  poopsicle = true;
  rowID ++;
  }else{
    document.getElementById('conversation').innerHTML += `
            <div class="row" id="row${rowID}">
              <div id="user-message">${inputValue} <img id="pfp" src="flybooty69.jpg"></div>
              <div id="response"><img id="chaiGPT-icon" src="coffee.png">The servers are down, please try again later.</div>
            </div>`;
  document.getElementById('input-box').value = '';
  rowID ++;
  }
}