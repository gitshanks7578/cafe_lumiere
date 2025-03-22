//smooth scroll


gsap.to(".header_txt hr",{
    width:"70%",
    duration:0.6,
    easing:"power2.out"
})
gsap.to(".coffee",{
    x:-10,
    opacity:1,
    duration:0.4,
    stagger:0.1,
    delay:0.4
})
gsap.to(".cof_img img",{
   
    opacity:1,
    duration:0.4,
    stagger:0.1,
    delay:0.6
})
gsap.to(".burger",{
    x:-10,
    opacity:1,
    duration:0.8,
    stagger:0.1,
   
    scrollTrigger:{
        scroller:"body",
        trigger:".burger",
        start:"top 50%",
        end:"top 40%",
        // markers:true,
        scrub:2,
    },
    
})