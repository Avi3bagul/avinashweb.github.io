window.addEventListener('scroll', function(){
    var navbar = this.document.getElementById('navbar')
    if(this.window.pageYOffset >= 300){
        navbar.classList.add('stycky');
    }
    else{
        navbar.classList.remove('stycky');
    }
 });


//  console.log(window.outerWidth)
//  var aos= document.querySelector('.fade-up-right')
//  if(window.outerWidth <= 1024){

//  }
 
 
 AOS.init({
    offset: 150,
    duration: 1000,
 });