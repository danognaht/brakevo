let casino = document.querySelector('img')          
casino.onclick = function() {
    let nguon = casino.getAttribute('src')
    if(nguon === 'images/firefox-icon.png') {
        casino.setAttribute('src','images/camping.png')
    } else{
        casino.setAttribute('src','images/firefox-icon.png')
    }
}

let mybutton = document.querySelector('button');
let myheading = document.querySelector('h1');

function sethername() {
    let hername = prompt('Touch the butt of.');
    if(!hername)  {
        serhername();
    } else {
    localStorage.setItem('name', hername);
    myheading.textContent = 'Do you feel happy? ' + hername;
    }
}
if(!localStorage.getItem('name')) {
    sethername();
} else {
    let storedname = localStorage.getItem('name');
    myheading.textContent = 'Do you feel happy? ' + storedname;
}

mybutton.onclick = function() {
    sethername();
}
