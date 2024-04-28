const scriptURL = ''
const form = document.forms['submit-to-google-sheet']
const mg = document.getElementById('mg')
form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        mg.innerHTML = "Message sent successfully"
        setTimeout(function(){
            mg.innerHTML = ""
        },3000)
        form.reset()
        })
    })
    .catch(error => console.error('Error!', error.message))

// ScollReveal Animation
ScrollReveal().reveal('.text',{delay:200,origin:'top'});
ScrollReveal().reveal('.form-container form',{delay:800,origin:'left'});
ScrollReveal().reveal('.heading',{delay:800,origin:'top'});
ScrollReveal().reveal('.ride-container .box',{delay:600,origin:'top'});
ScrollReveal().reveal('.services-container .box',{delay:600,origin:'top'});
ScrollReveal().reveal('.about-container .box',{delay:600,origin:'top'});
ScrollReveal().reveal('.reviews-container',{delay:600,origin:'top'});

/* Making responsive */
let menu=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

menu.onclick=()=>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll=()=>{
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}
