//sticky menu background
window.addEventListener('scroll', function() {
    if (window.scrollY > 150) {
        document.querySelector('#navbar') .style.opacity = 0.9;
    } else {
        document.querySelector('#navbar').style.opacity =1;}
}); 

// smooth scroll 
$ ('#navbar a, .btn') .on('click', function(event) { 
    event.preventDefault();
   if (this.hash !== "") {

    const hash = this.hash;
    $('html, body').animate(
        { 
            scrollTop: $(hash).offset().top - 100
        }, 
        800
    );
  } 
});
