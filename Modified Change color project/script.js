const Col = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
const hex = document.querySelector('.hex');
const buttonCol = document.querySelector('.buttonCol');
const bodyBcg = document.querySelector('body');

buttonCol.addEventListener('click',changeColor);

function changeColor() {
    let hexCol = '#';
    
    for(i=0; i<6; i++) {
    
        let random = Math.floor(Math.random()*Col.length)
        hexCol +=Col[random];
       } 
    bodyBcg.style.backgroundColor = hexCol;
    hex.innerHTML = hexCol;
    }
