document.addEventListener('DOMContentLoaded', function() {
    scrollNav();
        
    navegacionFija();

    });
 function navegacionFija() {

    const barra = document.querySelector('.header')
  
    //Registrar el Intersection Obsserver   
    const observer = new IntersectionObserver( function (entries) {
       if(entries[0].isIntersecting) {
        barra.classList.remove('fijo');
       } else {
        barra.classList.add('fijo');
       }
    }) 

    //Elemento a Observar
    observer.observe(document.querySelector('.fijar'));
 }
function scrollNav() {
 const enlaces = document.querySelectorAll('.navegacion__enlace');
 
 enlaces.forEach(function (enlace) {
       console.log(enlace) 
       enlace.addEventListener('click', function (e) {
           e.preventDefault();

           const seccion = document.querySelector(e.target.attributes.href.value);

           seccion.scrollIntoView({
               behavior: 'smooth'
           });
       });
 });
}

$('.navegacion').hide();

