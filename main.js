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
ScollReveal().reveal('.text',{delay:200,origin:'top'});
ScollReveal().reveal('.form-container form',{delay:800,origin:'left'});
ScollReveal().reveal('.heading',{delay:800,origin:'top'});
ScollReveal().reveal('.ride-container .box',{delay:600,origin:'top'});
ScollReveal().reveal('.services-container .box',{delay:600,origin:'top'});
ScollReveal().reveal('.about-container .box',{delay:600,origin:'top'});
ScollReveal().reveal('.reviews-container',{delay:600,origin:'top'});

// /* Making responsive */
// let menu=document.querySelector('#menu-icon');
// let navbar=document.querySelector('.navbar');

// menu.onclick=()=>{
//     menu.classList.toggle('bx-x');
//     navbar.classList.toggle('active');
// }

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myDropdown() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
