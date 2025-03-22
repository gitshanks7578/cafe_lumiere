gsap.to(".header_txt hr",{
    width:"70%",
    duration:0.6,
    easing:"power2.out",
    delay:0.6
})
gsap.to(".txt",{
    x:-10,
    opacity:1,
    duration:0.4,
    stagger:0.1,
    delay:0.3
})

// const lenis = new Lenis({
//     duration:1.2
// });
// lenis.on('scroll', (e) => {
//     console.log(e);
// });
// function raf(time) {
//     lenis.raf(time);
//     requestAnimationFrame(raf);
// }
// requestAnimationFrame(raf);
