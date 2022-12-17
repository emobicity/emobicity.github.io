// titolo chi siamo
var titolo = document.querySelectorAll('.about');

// callback 
var callback = function(items){
  items.forEach((item) => {
    if(item.isIntersecting){
      item.target.classList.add("animate");
    } else{
      item.target.classList.remove("animate");
    }
  });
}
// observer
var observer = new IntersectionObserver(callback, { threshold: 0.5 } );
// apply
titolo.forEach((element) => {
  observer.observe(element); 
});




//sottotitolo chi siamo
var sottotitolo = document.querySelectorAll('.about-sub');
var callback = function(items){
  items.forEach((item) => {
    if(item.isIntersecting){
      item.target.classList.add("animate");
    } else{
      item.target.classList.remove("animate");
    }
  });
}
// observer
var observer = new IntersectionObserver(callback, { threshold: 0.5 } );
// apply
sottotitolo.forEach((element) => {
  observer.observe(element); 
});




//paragrafo chi siamo
var paragrafo = document.querySelectorAll('.about-par');

// callback 
var callback = function(items){
  items.forEach((item) => {
    if(item.isIntersecting){
      item.target.classList.add("animate");
    } else{
      item.target.classList.remove("animate");
    }
  });
}
// observer
var observer = new IntersectionObserver(callback, { threshold: 0.5 } );
// apply
paragrafo.forEach((element) => {
  observer.observe(element); 
});


//cov-special chi siamo
var covSpec = document.querySelectorAll('.cov-special');

// callback 
var callback = function(items){
  items.forEach((item) => {
    if(item.isIntersecting){
      item.target.classList.add("animate");
    } else{
      item.target.classList.remove("animate");
    }
  });
}
// observer
var observer = new IntersectionObserver(callback, { threshold: 0.5 } );
// apply
covSpec.forEach((element) => {
  observer.observe(element); 
});


//covSpecial3 Prototipo
var prototipoCov = document.querySelectorAll('.special-cov2');

// callback 
var callback = function(items){
  items.forEach((item) => {
    if(item.isIntersecting){
      item.target.classList.add("animate");
    } else{
      item.target.classList.remove("animate");
    }
  });
}
// observer
var observer = new IntersectionObserver(callback, { threshold: 0.5 } );
// apply
prototipoCov.forEach((element) => {
  observer.observe(element); 
});



//input mail
var inputMail = document.querySelectorAll('input');

// callback 
var callback = function(items){
  items.forEach((item) => {
    if(item.isIntersecting){
      item.target.classList.add("animate");
    } else{
      item.target.classList.remove("animate");
    }
  });
}
// observer
var observer = new IntersectionObserver(callback, { threshold: 0.5 } );
// apply
inputMail.forEach((element) => {
  observer.observe(element); 
});


function funzioneBottone() {

  var copyText = document.getElementById("myInput");


  copyText.select();
  copyText.setSelectionRange(0, 99999);

  navigator.clipboard.writeText(copyText.value);
}