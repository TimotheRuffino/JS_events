
// Fonctionnalité 1

let footElmt = document.querySelector('footer');

let countElmt = 0;
countElmt++

footElmt.addEventListener('click', function() { 
    console.log("clic numéro " + countElmt++)
});

// Fonctionnalité 2

let headerElmt = document.getElementById('navbarHeader'); 
let navElmt = document.getElementsByClassName('navbar-toggler');

navElmt[0].addEventListener('click', function() {
  headerElmt.classList.toggle("collapse")
});

//  Fonctionnalité 3


let editElmt = document.getElementsByClassName('card-body')[0].getElementsByClassName('btn-outline-secondary');
let textElmt = document.querySelectorAll('p.card-text');

editElmt[0].addEventListener('click', function() {
  textElmt[0].style.color = "red"
});

// Fonctionnalité 4

let edit_2Elmt = document.getElementsByClassName('card-body')[1].getElementsByClassName('btn-outline-secondary');

edit_2Elmt[0].addEventListener('click', function() {
  if (textElmt[1].style.color === 'green') {
    textElmt[1].style.color = "";
  }
  else {
    textElmt[1].style.color = 'green';
  }
    
});

// Fonctionnalité 5

let linkElmt = document.getElementsByTagName('link')[0];
let navbarElmt = document.getElementsByTagName('header');

navbarElmt[0].addEventListener('dblclick', function() {
  if (linkElmt.disabled === false) {
    linkElmt.disabled = true;
  }
  else {
    linkElmt.disabled = false;
  }
});

// Fonctionnalité 6

let btnViewElmt = document.querySelectorAll('.btn-success'); 
let cardImgElmt = document.querySelectorAll('.card-img-top');

 
for (let i = 0; i < btnViewElmt.length; i++) {
  btnViewElmt[i].addEventListener('mouseover', function() {
   
      if (textElmt[i].style.display !== 'none'){
        textElmt[i].style.display = 'none';
        cardImgElmt[i].style.height = '20%';
        cardImgElmt[i].style.width = '20%';
      }
    else {
      textElmt[i].style.display = '';
        cardImgElmt[i].style.height = '100%';
        cardImgElmt[i].style.width = '100%';
    }
  }
     )};


// Fonctionnalité 7

let cardElmt = document.querySelector('.album > .container > .row');
let btnRightElmt = document.querySelector('.btn.btn-secondary.my-2');
 
btnRightElmt.addEventListener('click', function() {
  cardElmt.insertBefore(cardElmt.lastElementChild, cardElmt.firstElementChild);
})

// Fonctionnalité 8


