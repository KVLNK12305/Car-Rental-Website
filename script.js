const scriptURL = 'https://script.google.com/macros/s/AKfycbwUuVDcYK16sejHZiYoYZa2DncKKpDzPHT0EpqUL-_c0-_SLl4jKkyqFW3uw_9W9zClHQ/exec'
const form = document.forms['submit-to-google-sheet']
const mg = document.getElementById('send')
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

    /* Dropdown for smaller width */
// When the user clicks on the button, toggle between hiding and showing the dropdown content 
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

