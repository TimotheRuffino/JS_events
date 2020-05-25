
// Fonctionnalité 1

foot = document.querySelector('footer');

let count = 0;
count++

foot.addEventListener('click', function() { 
    console.log("clic numéro " + count++)
});

// Fonctionnalité 2

header = document.getElementById('navbarHeader'); 
nav = document.getElementsByClassName('navbar-toggler');

nav[0].addEventListener('click', function() {
  header.classList.toggle("collapse")
});

//  Fonctionnalité 3


edit = document.getElementsByClassName('card-body')[0].getElementsByClassName('btn-outline-secondary');
text = document.querySelectorAll('p.card-text');

edit[0].addEventListener('click', function() {
    text[0].style.color = "red"
});

// Fonctionnalité 4

edit_2 = document.getElementsByClassName('card-body')[1].getElementsByClassName('btn-outline-secondary');

edit_2[0].addEventListener('click', function() {
  if (text[1].style.color === 'green') {
    text[1].style.color = "";
  }
  else {
    text[1].style.color = 'green';
  }
    
});

// Fonctionnalité 5

link = (document.getElementsByTagName('link')[0]);
navbar = document.getElementsByTagName('header');

navbar[0].addEventListener('dblclick', function() {
  if (link.disabled == false) {
    link.disabled = true;
  }
  else {
    link.disabled = false;
  }
});

// Fonctionnalité 6


