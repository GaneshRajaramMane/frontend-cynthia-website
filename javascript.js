const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function page1animate(){
    var t1=gsap.timeline()

    t1.from("#nav",{
        y:-10,
        opacity:0,
        duration:1,
        ease:Expo.allinout
    })

    t1.to(".boundingelem",{
        y:0,
        duration:2,
        ease:Expo.allinout,
        stagger:.2,
        delay:-1,
    })

    t1.from("#page1footer",{
        y:-10,
        opacity:0,
        duration:2,
        ease:Expo.allinout,
        stagger:.2,
        delay:-1,
    })
}



function mousemovement(xscale,yscale){
   var mouse= document.querySelector("#mouse")
   window.addEventListener("mousemove",function(dets){

   mouse.style.transform=`translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale},${yscale})`;
   
   })
}

var timeout;
function mouseanimate(){
    var xprev=0
    var yprev=0

    var xscale=1
    var yscale=1

window.addEventListener("mousemove",function(dets){
   this.clearTimeout(timeout)

     xscale= gsap.utils.clamp(.6,1.2,dets.clientX - xprev)
     yscale= gsap.utils.clamp(.6,1.2,dets.clientY - yprev)

     xprev = dets.clientX;
     yprev = dets.clientY;

     mousemovement(xscale,yscale)

     timeout=setTimeout(function(){
        mouse.style.transform=`translate(${dets.clientX}px,${dets.clientY}px) scale(1,1)`
        
     },100)
})    

}

mouseanimate();
mousemovement();
page1animate();


var diffro;
var rotate;
document.querySelectorAll(".elem").forEach(function(elem){
       elem.addEventListener("mousemove",function(dets){
       var diff=dets.clientY-elem.getBoundingClientRect().top;
     
        diffro=dets.clientX-rotate;
        rotate=dets.clientX;

         gsap.to(elem.querySelector("img"),{
            opacity:1,
            ease:Power1,
            top:diff,
            left:dets.clientX,
            rotate:gsap.utils.clamp(-20,20,diffro)
        });
       });
});


document.querySelectorAll(".elem").forEach(function(elem){
       elem.addEventListener("mouseleave",function(dets){
       var diff=dets.clientY-elem.getBoundingClientRect().top;
        gsap.to(elem.querySelector("img"),{
            opacity:0,
            ease:Power1,
        });
       });
});


