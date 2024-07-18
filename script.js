const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function moveminicircle(xscale , yscale){
    document.addEventListener('mousemove' , function(e){
    document.getElementById('minicircle').style.transform = `translate(${e.clientX}px , ${e.clientY}px) scale(${xscale} , ${yscale}) `
})
}

function firstPageAnim() {
    var tl = gsap.timeline();
  
    tl.from("#nav", {
      y: "-10",
      opacity: 0,
      duration: 1.5,
      ease: Expo.easeInOut,
    })
      .to(".boundingelem", {
        y: 0,
        ease: Expo.easeInOut,
        duration: 2,
        delay: -1.3,
        stagger: 0.2,
      })
      .from("#footer1", {
        y: -10,
        opacity: 0,
        duration: 1.5,
        delay: -1.3,
        ease: Expo.easeInOut,
      });
  }
  firstPageAnim();

function compressminicircle(){
  var timeout;
  var xscale = 1;
  var yscale = 1;
  var prevx = 0;
  var prevy = 0;
  document.addEventListener('mousemove' , function(e){
    clearTimeout(timeout);
         var xdiff = e.clientX - prevx;
         var ydiff = e.clientY - prevy;
         prevx = e.clientX
         prevy = e.clientY
         xscale = gsap.utils.clamp(0.8 , 1.2 , xdiff)
         yscale = gsap.utils.clamp(0.8 , 1.2 , ydiff)
         
         moveminicircle(xscale , yscale)
         timeout = setTimeout(() => {
           document.getElementById('minicircle').style.transform = `translate(${e.clientX}px , ${e.clientY}px) scale(1 , 1) `
         }, 100);
  })
}
compressminicircle();

document.querySelectorAll(".elem").forEach(element => {
  element.addEventListener('mouseleave' , function(e){
    gsap.to(element.querySelector("img") , {
      opacity:0,
      ease:Power3,
     duration : 0.5,
    })
  })
});

document.querySelectorAll(".elem").forEach(function (elem) {
var rotate = 0;
var rotatediff = 0;

  elem.addEventListener("mousemove", function (dets) {
    var diff = dets.clientY - elem.getBoundingClientRect().top;
    rotatediff = dets.clientX - rotate;
    rotate = dets.clientX;
    gsap.to(elem.querySelector("img"), {
      opacity: 1,
      ease: Power3,
      top: diff,
      left: dets.clientX,
      rotate : gsap.utils.clamp(-10 , 10 , rotatediff) ,
    });
  });
});


