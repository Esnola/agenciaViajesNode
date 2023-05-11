const enlaces = document.querySelectorAll('a')
const url = window.location.pathname;
//console.log(url)
enlaces.forEach(enlace =>{
    if (enlace.href.includes(url) && url.length != 1 ){
       enlace.addEventListener('click', e => e.preventDefault()) 
       enlace.classList.add('activa')
    }
}) 