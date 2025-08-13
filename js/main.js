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
