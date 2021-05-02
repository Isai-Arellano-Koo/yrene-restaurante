document.addEventListener('DOMContentLoaded', function() {
    scrollNav();
        
    navegacionFija();

    });
 function navegacionFija() {

    const barra = document.querySelector('.nav')
  
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

function Mostrar() {
    
    document.getElementById('nav').style.display = 'flex';

}
function Ocultar() {
    document.getElementById('nav').style.display = 'none'
}
function Mostrar_Ocultar() {
    const nav = document.getElementById('nav');
    if(nav.style.display == 'none'){
        Mostrar();
    }else {
        Ocultar();
    }

}
function ocu() {
    const Media = window.matchMedia("(max-width: 1200px)")
    if(Media.matches) {
        Ocultar();
    }else {

    }
}
let ubicacionP = window.pageYOffset;
window.onscroll = () => {
    const desplazamientoActual = window.pageYOffset;
    if(ubicacionP >= desplazamientoActual){
        document.getElementById('todoNav').style.top = '0';
    }else {
        document.getElementById('todoNav').style.top = '-100px';
       
    }
    ubicacionP = desplazamientoActual;

}

// function MostrarInfo1() {
    
//     document.getElementById('informacion1').style.display = 'block';

// }
// function OcultarInfo1() {
//     document.getElementById('informacion1').style.display = 'none'
// }
// function Mostrar_OcultarInfo1() {
//     const info = document.getElementById('informacion1');
//     if(info.style.display == 'none'){
//         MostrarInfo1();
//     }else {
//         OcultarInfo1();
//     }

// }
// function MostrarInfo2() {
    
//     document.getElementById('informacion2').style.display = 'block';

// }
// function OcultarInfo2() {
//     document.getElementById('informacion2').style.display = 'none'
// }
// function Mostrar_OcultarInfo2() {
//     const info = document.getElementById('informacion2');
//     if(info.style.display == 'none'){
//     MostrarInfo2();
//     }else {
//         OcultarInfo2();
//     }

// }
// function MostrarInfo3() {
    
//     document.getElementById('informacion3').style.display = 'block';

// }
// function OcultarInfo3() {
//     document.getElementById('informacion3').style.display = 'none'
// }
// function Mostrar_OcultarInfo3() {
//     const info = document.getElementById('informacion3');
//     if(info.style.display == 'none'){
//         MostrarInfo3();
//     }else {
//         OcultarInfo3();
//     }

// }
// function MostrarInfo4() {
    
//     document.getElementById('informacion4').style.display = 'block';

// }
// function OcultarInfo4() {
//     document.getElementById('informacion4').style.display = 'none'
// }
// function Mostrar_OcultarInfo4() {
//     const info = document.getElementById('informacion4');
//     if(info.style.display == 'none'){
//         MostrarInfo4();
//     }else {
//         OcultarInfo4();
//     }

// }
// function MostrarInfo5() {
    
//     document.getElementById('informacion5').style.display = 'block';

// }
// function OcultarInfo5() {
//     document.getElementById('informacion5').style.display = 'none'
// }
// function Mostrar_OcultarInfo5() {
//     const info = document.getElementById('informacion5');
//     if(info.style.display == 'none'){
//         MostrarInfo5();
//     }else {
//         OcultarInfo5();
//     }

// }
// function MostrarInfo6() {
    
//     document.getElementById('informacion6').style.display = 'block';

// }
// function OcultarInfo6() {
//     document.getElementById('informacion6').style.display = 'none'
// }
// function Mostrar_OcultarInfo6() {
//     const info = document.getElementById('informacion6');
//     if(info.style.display == 'none'){
//     MostrarInfo6();
//     }else {
//         OcultarInfo6();
//     }

// }
// function MostrarInfo7() {
    
//     document.getElementById('informacion7').style.display = 'block';

// }
// function OcultarInfo7() {
//     document.getElementById('informacion7').style.display = 'none'
// }
// function Mostrar_OcultarInfo7() {
//     const info = document.getElementById('informacion7');
//     if(info.style.display == 'none'){
//         MostrarInfo7();
//     }else {
//         OcultarInfo7();
//     }

// }
// function MostrarInfo8() {
    
//     document.getElementById('informacion8').style.display = 'block';

// }
// function OcultarInfo8() {
//     document.getElementById('informacion8').style.display = 'none'
// }
// function Mostrar_OcultarInfo8() {
//     const info = document.getElementById('informacion8');
//     if(info.style.display == 'none'){
//         MostrarInfo8();
//     }else {
//         OcultarInfo8();
//     }

// }
// function MostrarInfo9() {
    
//     document.getElementById('informacion9').style.display = 'block';

// }
// function OcultarInfo9() {
//     document.getElementById('informacion9').style.display = 'none'
// }
// function Mostrar_OcultarInfo9() {
//     const info = document.getElementById('informacion9');
//     if(info.style.display == 'none'){
//         MostrarInfo9();
//     }else {
//         OcultarInfo9();
//     }

// }
// function MostrarInfo10() {
    
//     document.getElementById('informacion10').style.display = 'block';

// }
// function OcultarInfo10() {
//     document.getElementById('informacion10').style.display = 'none'
// }
// function Mostrar_OcultarInfo10() {
//     const info = document.getElementById('informacion10');
//     if(info.style.display == 'none'){
//         MostrarInfo10();
//     }else {
//         OcultarInfo10();
//     }

// }
// function MostrarInfo11() {
    
//     document.getElementById('informacion11').style.display = 'block';

// }
// function OcultarInfo11() {
//     document.getElementById('informacion11').style.display = 'none'
// }
// function Mostrar_OcultarInfo11() {
//     const info = document.getElementById('informacion11');
//     if(info.style.display == 'none'){
//         MostrarInfo11();
//     }else {
//         OcultarInfo11();
//     }

// }
// function MostrarInfo12() {
    
//     document.getElementById('informacion12').style.display = 'block';

// }
// function OcultarInfo12() {
//     document.getElementById('informacion12').style.display = 'none'
// }
// function Mostrar_OcultarInfo12() {
//     const info = document.getElementById('informacion12');
//     if(info.style.display == 'none'){
//         MostrarInfo12();
//     }else {
//         OcultarInfo12();
//     }

// }
// function MostrarInfo13() {
    
//     document.getElementById('informacion13').style.display = 'block';

// }
// function OcultarInfo13() {
//     document.getElementById('informacion13').style.display = 'none'
// }
// function Mostrar_OcultarInfo13() {
//     const info = document.getElementById('informacion13');
//     if(info.style.display == 'none'){
//         MostrarInfo13();
//     }else {
//         OcultarInfo13();
//     }

// }
// function MostrarInfo14() {
    
//     document.getElementById('informacion14').style.display = 'block';

// }
// function OcultarInfo14() {
//     document.getElementById('informacion14').style.display = 'none'
// }
// function Mostrar_OcultarInfo14() {
//     const info = document.getElementById('informacion14');
//     if(info.style.display == 'none'){
//         MostrarInfo14();
//     }else {
//         OcultarInfo14();
//     }

// }
// function MostrarInfo15() {
    
//     document.getElementById('informacion15').style.display = 'block';

// }
// function OcultarInfo15() {
//     document.getElementById('informacion15').style.display = 'none'
// }
// function Mostrar_OcultarInfo15() {
//     const info = document.getElementById('informacion15');
//     if(info.style.display == 'none'){
//         MostrarInfo15();
//     }else {
//         OcultarInfo15();
//     }

// }
// function MostrarInfo16() {
    
//     document.getElementById('informacion16').style.display = 'block';

// }
// function OcultarInfo16() {
//     document.getElementById('informacion16').style.display = 'none'
// }
// function Mostrar_OcultarInfo16() {
//     const info = document.getElementById('informacion16');
//     if(info.style.display == 'none'){
//         MostrarInfo16();
//     }else {
//         OcultarInfo16();
//     }

// }
// function MostrarInfo17() {
    
//     document.getElementById('informacion17').style.display = 'block';

// }
// function OcultarInfo17() {
//     document.getElementById('informacion17').style.display = 'none'
// }
// function Mostrar_OcultarInfo17() {
//     const info = document.getElementById('informacion17');
//     if(info.style.display == 'none'){
//         MostrarInfo17();
//     }else {
//         OcultarInfo17();
//     }

// }
// function MostrarInfo18() {
    
//     document.getElementById('informacion18').style.display = 'block';

// }
// function OcultarInfo18() {
//     document.getElementById('informacion18').style.display = 'none'
// }
// function Mostrar_OcultarInfo18() {
//     const info = document.getElementById('informacion18');
//     if(info.style.display == 'none'){
//         MostrarInfo18();
//     }else {
//         OcultarInfo18();
//     }

// }
// function MostrarInfo19() {
    
//     document.getElementById('informacion19').style.display = 'block';

// }
// function OcultarInfo19() {
//     document.getElementById('informacion19').style.display = 'none'
// }
// function Mostrar_OcultarInfo19() {
//     const info = document.getElementById('informacion19');
//     if(info.style.display == 'none'){
//         MostrarInfo19();
//     }else {
//         OcultarInfo19();
//     }

// }
// function MostrarInfo20() {
    
//     document.getElementById('informacion20').style.display = 'block';

// }
// function OcultarInfo20() {
//     document.getElementById('informacion20').style.display = 'none'
// }
// function Mostrar_OcultarInfo20() {
//     const info = document.getElementById('informacion20');
//     if(info.style.display == 'none'){
//         MostrarInfo20();
//     }else {
//         OcultarInfo20();
//     }

// }
// function MostrarInfo21() {
    
//     document.getElementById('informacion21').style.display = 'block';

// }
// function OcultarInfo21() {
//     document.getElementById('informacion21').style.display = 'none'
// }
// function Mostrar_OcultarInfo21() {
//     const info = document.getElementById('informacion21');
//     if(info.style.display == 'none'){
//         MostrarInfo21();
//     }else {
//         OcultarInfo21();
//     }

// }
// function MostrarInfo22() {
    
//     document.getElementById('informacion22').style.display = 'block';

// }
// function OcultarInfo22() {
//     document.getElementById('informacion22').style.display = 'none'
// }
// function Mostrar_OcultarInfo22() {
//     const info = document.getElementById('informacion22');
//     if(info.style.display == 'none'){
//         MostrarInfo22();
//     }else {
//         OcultarInfo22();
//     }

// }
// function MostrarInfo23() {
    
//     document.getElementById('informacion23').style.display = 'block';

// }
// function OcultarInfo23() {
//     document.getElementById('informacion23').style.display = 'none'
// }
// function Mostrar_OcultarInfo23() {
//     const info = document.getElementById('informacion23');
//     if(info.style.display == 'none'){
//     MostrarInfo23();
//     }else {
//         OcultarInfo23();
//     }

// }
// function MostrarInfo24() {
    
//     document.getElementById('informacion24').style.display = 'block';

// }
// function OcultarInfo24() {
//     document.getElementById('informacion24').style.display = 'none'
// }
// function Mostrar_OcultarInfo24() {
//     const info = document.getElementById('informacion24');
//     if(info.style.display == 'none'){
//         MostrarInfo24();
//     }else {
//         OcultarInfo24();
//     }

// }
// function MostrarInfo25() {
    
//     document.getElementById('informacion25').style.display = 'block';

// }
// function OcultarInfo25() {
//     document.getElementById('informacion25').style.display = 'none'
// }
// function Mostrar_OcultarInfo25() {
//     const info = document.getElementById('informacion25');
//     if(info.style.display == 'none'){
//         MostrarInfo25();
//     }else {
//         OcultarInfo25();
//     }

// }
// function MostrarInfo26() {
    
//     document.getElementById('informacion26').style.display = 'block';

// }
// function OcultarInfo26() {
//     document.getElementById('informacion26').style.display = 'none'
// }
// function Mostrar_OcultarInfo26() {
//     const info = document.getElementById('informacion26');
//     if(info.style.display == 'none'){
//         MostrarInfo26();
//     }else {
//         OcultarInfo26();
//     }

// }
// function MostrarInfo27() {
    
//     document.getElementById('informacion27').style.display = 'block';

// }
// function OcultarInfo27() {
//     document.getElementById('informacion27').style.display = 'none'
// }
// function Mostrar_OcultarInfo27() {
//     const info = document.getElementById('informacion27');
//     if(info.style.display == 'none'){
//         MostrarInfo27();
//     }else {
//         OcultarInfo27();
//     }

// }
// function MostrarInfo28() {
    
//     document.getElementById('informacion28').style.display = 'block';

// }
// function OcultarInfo28() {
//     document.getElementById('informacion28').style.display = 'none'
// }
// function Mostrar_OcultarInfo28() {
//     const info = document.getElementById('informacion28');
//     if(info.style.display == 'none'){
//         MostrarInfo28();
//     }else {
//         OcultarInfo28();
//     }

// }
// function MostrarInfo29() {
    
//     document.getElementById('informacion29').style.display = 'block';

// }
// function OcultarInfo29() {
//     document.getElementById('informacion29').style.display = 'none'
// }
// function Mostrar_OcultarInfo29() {
//     const info = document.getElementById('informacion29');
//     if(info.style.display == 'none'){
//         MostrarInfo29();
//     }else {
//         OcultarInfo29();
//     }

// }
// function MostrarInfo30() {
    
//     document.getElementById('informacion30').style.display = 'block';

// }
// function OcultarInfo30() {
//     document.getElementById('informacion30').style.display = 'none'
// }
// function Mostrar_OcultarInfo30() {
//     const info = document.getElementById('informacion30');
//     if(info.style.display == 'none'){
//         MostrarInfo30();
//     }else {
//         OcultarInfo30();
//     }

// }
// function MostrarInfo31() {
    
//     document.getElementById('informacion31').style.display = 'block';

// }
// function OcultarInfo31() {
//     document.getElementById('informacion31').style.display = 'none'
// }
// function Mostrar_OcultarInfo31() {
//     const info = document.getElementById('informacion31');
//     if(info.style.display == 'none'){
//         MostrarInfo31();
//     }else {
//         OcultarInfo31();
//     }

// }
// function MostrarInfo32() {
//     document.getElementById('informacion32').style.display = 'block';
// }

    
// function OcultarInfo32() {
//     document.getElementById('informacion32').style.display = 'none'
// }
// function Mostrar_OcultarInfo32() {
//     const info = document.getElementById('informacion33');
//     if(info.style.display == 'none'){
//     MostrarInfo32();
//     }else {
//         OcultarInfo32();
//     }

// }
// function MostrarInfo33() {
    
//     document.getElementById('informacion33').style.display = 'block';

// }
// function OcultarInfo33() {
//     document.getElementById('informacion33').style.display = 'none'
// }
// function Mostrar_OcultarInfo33() {
//     const info = document.getElementById('informacion33');
//     if(info.style.display == 'none'){
//         MostrarInfo33();
//     }else {
//         OcultarInfo33();
//     }

// }
// function MostrarInfo34() {
    
//     document.getElementById('informacion34').style.display = 'block';

// }
// function OcultarInfo34() {
//     document.getElementById('informacion34').style.display = 'none'
// }
// function Mostrar_OcultarInfo34() {
//     const info = document.getElementById('informacion34');
//     if(info.style.display == 'none'){
//         MostrarInfo34();
//     }else {
//         OcultarInfo34();
//     }

// }
// function MostrarInfo35() {
    
//     document.getElementById('informacion35').style.display = 'block';

// }
// function OcultarInfo35() {
//     document.getElementById('informacion35').style.display = 'none'
// }
// function Mostrar_OcultarInfo35() {
//     const info = document.getElementById('informacion35');
//     if(info.style.display == 'none'){
//         MostrarInfo35();
//     }else {
//         OcultarInfo35();
//     }

// }
// function MostrarInfo36() {
    
//     document.getElementById('informacion36').style.display = 'block';

// }
// function OcultarInfo36() {
//     document.getElementById('informacion36').style.display = 'none'
// }
// function Mostrar_OcultarInfo36() {
//     const info = document.getElementById('informacion36');
//     if(info.style.display == 'none'){
//         MostrarInfo36();
//     }else {
//         OcultarInfo36();
//     }

// }
// function MostrarInfo37() {
    
//     document.getElementById('informacion37').style.display = 'block';

// }
// function OcultarInfo37() {
//     document.getElementById('informacion37').style.display = 'none'
// }
// function Mostrar_OcultarInfo37() {
//     const info = document.getElementById('informacion37');
//     if(info.style.display == 'none'){
//         MostrarInfo37();
//     }else {
//         OcultarInfo37();
//     }

// }
// function MostrarInfo38() {
    
//     document.getElementById('informacion38').style.display = 'block';

// }
// function OcultarInfo38() {
//     document.getElementById('informacion38').style.display = 'none'
// }
// function Mostrar_OcultarInfo38() {
//     const info = document.getElementById('informacion38');
//     if(info.style.display == 'none'){
//         MostrarInfo38();
//     }else {
//         OcultarInfo38();
//     }

// }
// function MostrarInfo39() {
    
//     document.getElementById('informacion39').style.display = 'block';

// }
// function OcultarInfo39() {
//     document.getElementById('informacion39').style.display = 'none'
// }
// function Mostrar_OcultarInfo39() {
//     const info = document.getElementById('informacion39');
//     if(info.style.display == 'none'){
//         MostrarInfo39();
//     }else {
//         OcultarInfo39();
//     }

// }
// function MostrarInfo40() {
    
//     document.getElementById('informacion40').style.display = 'block';

// }
// function OcultarInfo40() {
//     document.getElementById('informacion40').style.display = 'none'
// }
// function Mostrar_OcultarInfo40() {
//     const info = document.getElementById('informacion40');
//     if(info.style.display == 'none'){
//         MostrarInfo40();
//     }else {
//         OcultarInfo40();
//     }

// }




