// Menu.js : bascule de l'attribut data-state du bouton burger du menu au clic (opened/closed)

var menu = document.querySelector('.tmp-menu');
var burger = document.querySelector('.tmp-menu .burger');

burger.addEventListener('click', function(event){

    if (menu.getAttribute('data-state') === 'closed') {

        menu.setAttribute('data-state', 'opened');

    } else {

        menu.setAttribute('data-state', 'closed');

    }

});