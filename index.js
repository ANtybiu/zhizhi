let showSettings = false;

function profiledrop(){
  showSettings = !showSettings
  document.getElementById('profile-container').style.padding = `10rem`;
  if(showSettings){
    setTimeout(()=>{
      document.getElementById('settings-dropdown').style.display = `block`;
      document.getElementById('profile').innerHTML += `<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 viewBox="0 0 512.000000 512.000000"
 preserveAspectRatio="xMidYMid meet" id="close-setting">

<g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
fill="#000000" stroke="none">
<path d="M395 5076 c-170 -41 -316 -188 -355 -356 -28 -120 -7 -261 54 -364
14 -23 419 -435 900 -916 l876 -875 -888 -890 c-956 -958 -930 -929 -967
-1070 -29 -115 -13 -234 47 -347 94 -177 315 -263 549 -214 140 30 103 -3
1054 947 484 483 885 879 890 879 5 0 406 -395 890 -879 816 -815 885 -881
945 -909 207 -96 457 -57 600 94 135 142 166 360 78 543 -29 61 -99 133 -927
958 l-896 891 871 874 c543 544 881 890 897 918 44 78 60 152 55 259 -6 115
-30 185 -93 269 -123 163 -346 232 -540 166 -111 -37 -161 -84 -1029 -953
l-850 -850 -875 872 c-941 936 -918 916 -1056 952 -69 18 -160 18 -230 1z"/>
</g>
</svg>`
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
  if(inputValue === 'cocnball'){window.open('https://antybiu.github.io/project_sundaecone/GAME1_V11/game.html','_self');
     return}
     if(inputValue === 'teecare'){window.open('https://weikiendental.com','_self');
      return}
      if(inputValue === 'scwaudit'){window.open('https://antybiu.github.io/lola','_self');
        return}
        if(inputValue === 'antybiu'){window.open('https://antybiu.github.io/antybiu','_self');
          return}
          if(inputValue === 'spacedildo'){window.open('https://www.spacex.com','_self');
            return}
            if(inputValue === 'openbutthole'){window.open('https://www.tesla.com','_self');
              return}
              if(inputValue === 'coc on my ballz'){window.open('https://antybiu.github.io/project_sundaecone/GAME1_V11/game.html','_self');
                return}
                if(inputValue === 'xyz'){window.open('https://www.desmos.com','_self');
                  return}
  if(!poopsicle){
    document.getElementById('input').style.position = 'fixed';
  document.getElementById('input').style.bottom = '35rem';
  document.getElementById('conversation').innerHTML = `
            <div class="row" id="row${rowID}" style="flex: 0 0 auto">
              <div id="user-message">${inputValue} <img id="pfp" src="flybooty69.jpg"></div>
              <div id="response"><svg version="1.0" xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 64.000000 64.000000"
 preserveAspectRatio="xMidYMid meet" id="chaiGPT-icon" class="chaiGPT-icons">

<g transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)"
fill="#000000" stroke="none">
<path d="M182 565 c-16 -36 -15 -66 4 -93 26 -38 39 -21 40 51 1 56 -2 67 -16
67 -9 0 -22 -11 -28 -25z"/>
<path d="M250 561 c-14 -34 -6 -84 16 -102 22 -18 29 -3 31 67 1 55 -1 64 -17
64 -10 0 -23 -12 -30 -29z"/>
<path d="M332 577 c-6 -6 -13 -24 -17 -38 -12 -49 42 -118 58 -76 3 8 1 20 -4
28 -5 8 -6 33 -3 57 5 33 3 42 -9 42 -8 0 -19 -6 -25 -13z"/>
<path d="M82 421 c-11 -6 -13 -36 -10 -131 3 -119 4 -122 31 -146 27 -23 35
-24 169 -24 l140 0 35 35 c19 19 44 35 54 35 11 0 31 11 44 25 52 51 23 185
-40 185 -12 0 -28 7 -35 15 -10 12 -45 15 -194 15 -99 0 -187 -4 -194 -9z
m348 -127 c0 -128 4 -124 -153 -124 -90 0 -137 4 -145 12 -8 8 -12 46 -12 105
l0 93 155 0 155 0 0 -86z m78 57 c9 -5 12 -25 10 -57 -3 -42 -6 -49 -25 -52
-21 -3 -23 0 -23 51 0 65 8 77 38 58z"/>
<path d="M122 73 c3 -16 18 -18 153 -18 127 0 150 2 150 15 0 13 -25 15 -153
18 -143 2 -153 1 -150 -15z"/>
</g>
</svg>The servers are down, please try again later.</div>
            </div>`;
  document.getElementById('input-box').value = '';
  document.getElementById('conversation').classList.add('convovo')
  document.getElementById('convopage').style.paddingTop = '10rem'
  document.body.style.paddingBottom = '100rem'
  poopsicle = true;
  rowID ++;
  }else{
    document.getElementById('conversation').innerHTML += `
            <div class="row" id="row${rowID}"  style="flex: 0 0 auto">
              <div id="user-message">${inputValue} <img id="pfp" src="flybooty69.jpg"></div>
              <div id="response"><svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 viewBox="0 0 64.000000 64.000000"
 preserveAspectRatio="xMidYMid meet" id="chaiGPT-icon" class="chaiGPT-icons">

<g transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)"
fill="#000000" stroke="none">
<path d="M182 565 c-16 -36 -15 -66 4 -93 26 -38 39 -21 40 51 1 56 -2 67 -16
67 -9 0 -22 -11 -28 -25z"/>
<path d="M250 561 c-14 -34 -6 -84 16 -102 22 -18 29 -3 31 67 1 55 -1 64 -17
64 -10 0 -23 -12 -30 -29z"/>
<path d="M332 577 c-6 -6 -13 -24 -17 -38 -12 -49 42 -118 58 -76 3 8 1 20 -4
28 -5 8 -6 33 -3 57 5 33 3 42 -9 42 -8 0 -19 -6 -25 -13z"/>
<path d="M82 421 c-11 -6 -13 -36 -10 -131 3 -119 4 -122 31 -146 27 -23 35
-24 169 -24 l140 0 35 35 c19 19 44 35 54 35 11 0 31 11 44 25 52 51 23 185
-40 185 -12 0 -28 7 -35 15 -10 12 -45 15 -194 15 -99 0 -187 -4 -194 -9z
m348 -127 c0 -128 4 -124 -153 -124 -90 0 -137 4 -145 12 -8 8 -12 46 -12 105
l0 93 155 0 155 0 0 -86z m78 57 c9 -5 12 -25 10 -57 -3 -42 -6 -49 -25 -52
-21 -3 -23 0 -23 51 0 65 8 77 38 58z"/>
<path d="M122 73 c3 -16 18 -18 153 -18 127 0 150 2 150 15 0 13 -25 15 -153
18 -143 2 -153 1 -150 -15z"/>
</g>
</svg>The servers are down, please try again later.</div>
            </div>`;
  document.getElementById('input-box').value = '';
  rowID ++;
  setTimeout(()=>{
    let conversation = document.getElementById('conversation');
    conversation.scrollTo({ top: conversation.scrollHeight, behavior: "smooth" });
  },50)
  }
}

let showMath = false;

function showOptions(){
  showMath = !showMath;
  if(!showMath){
    document.querySelector('.cont4').style.padding = '0rem';
  document.querySelector('.cont4').style.paddingRight = '0rem';
  document.querySelector('.cont4').style.cursor = 'default';
  setTimeout(()=>{
    document.querySelector('.cont4').innerHTML = `<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                onclick="showOptions()" viewBox="0 0 512.000000 512.000000"
                preserveAspectRatio="xMidYMid meet" id="calc">

                <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                fill="#000000" stroke="none">
                <path d="M1535 4226 c-37 -17 -70 -52 -84 -89 -7 -17 -11 -127 -11 -282 l0
                -254 -269 -3 c-254 -3 -271 -4 -297 -24 -53 -39 -69 -71 -69 -134 0 -63 16
                -95 69 -134 26 -20 43 -21 296 -24 l269 -3 3 -269 c3 -253 4 -270 24 -296 39
                -53 71 -69 134 -69 63 0 95 16 134 69 20 26 21 43 24 296 l3 269 269 3 c253 3
                270 4 296 24 53 39 69 71 69 134 0 63 -16 95 -69 134 -26 20 -43 21 -296 24
                l-269 3 -3 269 c-3 253 -4 270 -24 296 -11 15 -32 37 -46 47 -34 25 -113 32
                -153 13z"/>
                <path d="M2815 3586 c-67 -29 -105 -106 -91 -181 9 -47 59 -102 104 -115 25
                -8 257 -10 714 -8 665 3 677 3 704 24 53 39 69 71 69 134 0 63 -16 95 -69 134
                -27 21 -38 21 -714 23 -556 2 -693 0 -717 -11z"/>
                <path d="M1053 2140 c-46 -20 -79 -64 -89 -117 -13 -68 8 -98 215 -306 l196
                -197 -197 -198 c-108 -108 -202 -210 -208 -225 -17 -47 -12 -101 13 -138 47
                -69 121 -96 194 -69 15 6 117 100 225 208 l198 197 197 -197 c163 -161 206
                -198 241 -209 116 -34 227 77 193 193 -11 35 -48 78 -209 241 l-196 197 201
                203 c217 218 224 229 208 314 -9 49 -69 109 -118 118 -85 16 -96 9 -315 -208
                l-202 -202 -193 192 c-231 231 -259 247 -354 203z"/>
                <path d="M2815 1986 c-67 -29 -105 -106 -91 -181 9 -47 59 -102 104 -115 25
                -8 257 -10 714 -8 665 3 677 3 704 24 53 39 69 71 69 134 0 63 -16 95 -69 134
                -27 21 -38 21 -714 23 -556 2 -693 0 -717 -11z"/>
                <path d="M2815 1346 c-67 -29 -105 -106 -91 -181 9 -47 59 -102 104 -115 25
                -8 257 -10 714 -8 665 3 677 3 704 24 53 39 69 71 69 134 0 63 -16 95 -69 134
                -27 21 -38 21 -714 23 -556 2 -693 0 -717 -11z"/>
                </g>
                </svg>`
  },100)
  return
  }
  document.querySelector('.cont4').style.cursor = 'default';
  document.querySelector('.cont4').style.padding = '2rem';
  document.querySelector('.cont4').style.paddingRight = '5rem';
  setTimeout(()=>{
    document.querySelector('.cont4').innerHTML += `<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 512.000000 512.000000"
 preserveAspectRatio="xMidYMid meet" id="dy" class="sub-calc">

<g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
fill="#000000" stroke="none">
<path d="M2981 4895 c-30 -9 -68 -24 -85 -35 -50 -31 -114 -102 -135 -150 -11
-26 -194 -872 -406 -1880 -212 -1009 -391 -1853 -396 -1874 -28 -104 -155
-136 -223 -55 -22 26 -26 41 -26 92 0 122 -35 177 -111 177 -29 0 -47 -8 -71
-29 l-33 -29 0 -104 c0 -91 4 -110 28 -163 36 -78 95 -137 171 -172 122 -56
270 -32 373 60 83 75 60 -18 483 1992 215 1023 396 1872 402 1888 18 48 63 77
117 77 87 0 131 -56 131 -167 0 -83 14 -112 63 -136 31 -16 42 -17 72 -7 19 6
44 23 56 38 19 24 21 37 17 132 -3 90 -7 113 -31 162 -72 147 -243 226 -396
183z"/>
</g>
</svg>
`
  },75)
  setTimeout(()=>{
    document.querySelector('.cont4').innerHTML += `<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 64.000000 64.000000"
 preserveAspectRatio="xMidYMid meet" id="dollar" class="sub-calc">

<g transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)"
fill="#000000" stroke="none">
<path d="M270 606 c0 -30 -5 -37 -37 -53 -74 -36 -103 -120 -65 -185 21 -37
59 -60 143 -87 77 -25 104 -49 95 -84 -12 -47 -94 -61 -161 -27 l-39 20 -25
-23 c-15 -12 -28 -23 -30 -24 -11 -7 37 -44 75 -59 40 -15 44 -20 44 -50 0
-34 1 -34 45 -34 44 0 45 0 45 34 0 30 4 35 45 50 60 23 85 60 85 125 0 75
-37 112 -154 154 -100 36 -119 58 -86 99 14 18 28 23 67 23 26 0 62 -4 79 -8
28 -7 33 -5 53 25 l21 33 -38 17 c-20 10 -45 18 -54 18 -14 0 -18 8 -18 35 0
35 0 35 -45 35 -45 0 -45 0 -45 -34z"/>
</g>
</svg><span id="npv" class="sub-calc">NPV</span><span id="npv" class="sub-calc sixnine">MOl</span>`
  },100)
}

function openSettings(){
  document.getElementById('overlay').style.display = 'block';
  document.getElementById('prefrence-popup').style.display = 'flex'
}

function closeSettings(){
  document.getElementById('overlay').style.display = 'none';
  document.getElementById('prefrence-popup').style.display = 'none'
}

function color(reset){
  let r,g,b;
  if(!reset){
  let color = document.getElementById('color-input').value;
    color = color.replace(/^#/, ''); // Remove #
    let bigint = parseInt(color, 16);
     r = (bigint >> 16) & 255;
     g = (bigint >> 8) & 255;
     b = bigint & 255;
  }else{
    r=255;
    g=255;
    b=255;
  }

  document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
  document.getElementById('input-box').style.backgroundColor = `rgb(${r},${g},${b})`
  document.getElementById('profile-container').style.backgroundColor = `rgb(${r},${g},${b})`
  
}
function textColor(reset){
  let r,g,b;
  if(!reset){
  let color = document.getElementById('color-input2').value;
    color = color.replace(/^#/, ''); // Remove #
    let bigint = parseInt(color, 16);
     r = (bigint >> 16) & 255;
     g = (bigint >> 8) & 255;
     b = bigint & 255;
  }else{
    r=0;
    g=0;
    b=0;
  }


    document.getElementById('profile-container').style.boxShadow = `0 0 5px rgba(${r},${g},${b},0.5)`
    document.getElementById('input').style.boxShadow = `0 0 5px rgba(${r},${g},${b},0.5)`
    document.querySelectorAll('.text').forEach((element)=>{
      element.style.color = `rgb(${r},${g},${b})`
    })
    let svgElement = document.getElementById("www"); // Select the SVG
    let paths = svgElement.querySelectorAll("path"); // Select all <path> elements

    paths.forEach(path => {
        path.setAttribute("fill", `rgb(${r},${g},${b})`); // Change the fill color to red
    });
    let svgElement1 = document.getElementById("plusimg"); // Select the SVG
    let paths1 = svgElement1.querySelectorAll("path"); // Select all <path> elements

    paths1.forEach(path => {
        path.setAttribute("fill", `rgb(${r},${g},${b})`); // Change the fill color to red
    });

    let svgElement2 = document.getElementById("idea"); // Select the SVG
    let paths2 = svgElement2.querySelectorAll("path"); // Select all <path> elements

    paths2.forEach(path => {
        path.setAttribute("fill", `rgb(${r},${g},${b})`); // Change the fill color to red
    });

    let svgElement3 = document.getElementById("calc"); // Select the SVG
    let paths3 = svgElement3.querySelectorAll("path"); // Select all <path> elements

    paths3.forEach(path => {
        path.setAttribute("fill", `rgb(${r},${g},${b})`); // Change the fill color to red
    });

    let svgElement4 = document.getElementById("send"); // Select the SVG
    let paths4 = svgElement4.querySelectorAll("path"); // Select all <path> elements

    paths4.forEach(path => {
        path.setAttribute("fill", `rgb(${r},${g},${b})`); // Change the fill color to red
    });
    document.querySelector('.cont4').style.border = `1rem solid rgb(${r},${g},${b})`




    if(document.getElementById('close-setting')){
    let svgElement5 = document.getElementById("close-setting"); // Select the SVG
    let paths5 = svgElement5.querySelectorAll("path"); // Select all <path> elements

    paths5.forEach(path => {
        path.setAttribute("fill", `rgb(${r},${g},${b})`); // Change the fill color to red
    });
  }
  if(document.getElementById('dy')&&document.getElementById('dollar')){
    document.getElementById("npv").style.border = `1rem solid rgb(${r},${g},${b})`
    document.querySelector(".sixnine").style.border = `1rem solid rgb(${r},${g},${b})`
  let svgElement6 = document.getElementById("dy"); // Select the SVG
  document.getElementById("dy").style.border = `1rem solid rgb(${r},${g},${b})`;
  let paths6 = svgElement6.querySelectorAll("path"); // Select all <path> elements

    paths6.forEach(path => {
        path.setAttribute("fill", `rgb(${r},${g},${b})`); // Change the fill color to red
    });

    let svgElement7 = document.getElementById("dollar"); // Select the SVG
    document.getElementById("dollar").style.border = `1rem solid rgb(${r},${g},${b})`
    let paths7 = svgElement7.querySelectorAll("path"); // Select all <path> elements

    paths7.forEach(path => {
        path.setAttribute("fill", `rgb(${r},${g},${b})`); // Change the fill color to red
    });
  }
  
  if(document.querySelector('.chaiGPT-icons')){
    let svgElement10 = document.querySelectorAll(".chaiGPT-icons"); // Select the SVG
    svgElement10.forEach(element =>{
      element.style.border = `1rem solid rgb(${r},${g},${b})`;
  let paths10 = element.querySelectorAll("path"); // Select all <path> elements
    
    paths10.forEach(path => {
        path.setAttribute("fill", `rgb(${r},${g},${b})`); // Change the fill color to red
    });
    })
  
  }
}
setInterval(()=>{
  color();
  textColor();
},50)


let sidebarOpen = false;
function closeSideBar(){
  sidebarOpen = ! sidebarOpen
  if(sidebarOpen){
  document.getElementById('sidebar').style.display = `none`;
  document.body.style.paddingLeft = '0';
  document.getElementById('convopage').style.width = `100vw`;
  document.getElementById('header').style.width = `90%`
  document.getElementById('header').style.left = `70rem`
  document.getElementById('convopage').innerHTML += `<img id="close-sidebar2"src="sidebar.png" onclick="closeSideBar()">`
  document.getElementById('close-sidebar2').style.position = 'fixed';
  document.getElementById('close-sidebar2').style.top = '16rem';
  document.getElementById('close-sidebar2').style.left = `30rem`;
  document.getElementById('convo-body').style.width = `100%`;
  document.getElementById('model-verison').style.marginTop = `5rem`;
  document.getElementById('warning').style.left = `39.5%`;
  }else{
    document.getElementById('sidebar').removeAttribute('style')
  document.body.style.paddingLeft = '20vw';
  document.getElementById('convopage')
  document.getElementById('header').removeAttribute('style')
  document.getElementById('convopage').removeChild(document.getElementById('close-sidebar2')) 
  document.getElementById('convo-body').removeAttribute('style')
  document.getElementById('model-verison').removeAttribute('style')
  document.getElementById('warning').style.left = `47%`
  }
}
function resetTheme(){
  console.log('reset')
  document.getElementById('color-input').value = `#FFFFFF`;
  document.getElementById('color-input2').value = `#000000`;
  textColor('reset');
  color('reset')
}
