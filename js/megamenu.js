var overlay = document.getElementById('overlay');
var closeMenu = document.getElementById('close-menu');

document.getElementById('open-menu').addEventListener('click', function() {
    overlay.classList.toggle('show-menu');
});

document.getElementById('close-menu').addEventListener('click', function() { 
    overlay.classList.toggle('rem-menu');
    setTimeout(location.reload.bind(location), 1300);
});

document.getElementById('li-menu').addEventListener('click', function() { 
    overlay.classList.toggle('rem-menu');
    setTimeout(location.reload.bind(location), 1000);
});
document.getElementById('li-menu1').addEventListener('click', function() { 
    overlay.classList.toggle('rem-menu');
    setTimeout(location.reload.bind(location), 1100);
});
document.getElementById('li-menu2').addEventListener('click', function() { 
    overlay.classList.toggle('rem-menu');
    setTimeout(location.reload.bind(location), 1000);
});
document.getElementById('li-menu3').addEventListener('click', function() { 
    overlay.classList.toggle('rem-menu');
    setTimeout(location.reload.bind(location), 1000);
});