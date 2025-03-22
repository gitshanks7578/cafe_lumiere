let sidebar_btn = document.querySelector(".sidebar_logo");
let cross = document.querySelector(".cross");
let up_sidebar = document.querySelector("up_sidebar");
document.addEventListener('DOMContentLoaded', function () {
    FastClick.attach(document.body);
});


// // gsap.registerPlugin(ScrollTrigger);
// // ScrollTrigger.defaults({ lazy: false });


sidebar_btn.addEventListener("click",()=>{
    gsap.to(".up_sidebar",{
            top:"0%",
            duration:0.4,
            opacity:1,
        })
    gsap.to(".upside_links li",{
 
               duration:0.4,
               opacity:1,
            
            })
})

cross.addEventListener("click",()=>{
gsap.to(".upside_links li",{

    duration:0.4,
    opacity:0,
 
 })
gsap.to(".up_sidebar",{
    top:"-100%",
    duration:1,
    opacity:0,
})
})

gsap.to("nav",{
    backgroundColor:"rgba(38, 38, 38, 0.32)",
    css: { 
        "backdrop-filter": "blur(40px)" 
    },
    scrollTrigger:{
        trigger:"nav",
        scroller:"body",
        // markers:true,
        scrub:3,
        start:"top -10%",
        end:"top -20%"
    }
})
gsap.to(".touch_txt hr",{
    width:"30%",
    duration:0.6,
    easing:"power2.out",
    delay:0.6,
    scrollTrigger:{
        trigger:".touch_txt hr",
        scroller:"body",
        scrub:3,
        start:"top 50%",
        end:"top 30%"
    }
})







  let faq_ans = document.querySelector(".faq-answer");
  let faq = document.querySelectorAll(".faq");
  let icon = document.querySelectorAll("i");


document.querySelectorAll(".seen").forEach(item => {
      item.addEventListener("click", () => {
          const answer = item.nextElementSibling;
          const isOpen = answer.offsetHeight > 0;
          const arrow = item.querySelector(".faq_arrow");

    
          document.querySelectorAll(".faq-answer").forEach(other => {
              gsap.to(other, {
                  height: 0,
                  opacity: 0,
                  padding: 0,
                  duration: 0.4,
                  ease: "power2.inOut"
              });
              gsap.to(icon, {
                  rotate: 0,
                  duration: 0.2
              })
          });
    
          document.querySelectorAll(".faq-arrow").forEach(otherArrow => {
              gsap.to(otherArrow, { 
                  rotate: 0, 
                  duration: 0.3, 
                  ease: "power2.inOut" 
              });
          });
    
          if (!isOpen) {
            gsap.to(arrow, { 
              rotate: 180, 
              duration: 0.3, 
              ease: "power2.inOut" 
          }); 
              gsap.to(answer, {
                  height: answer.scrollHeight,
                  opacity: 1,
                  padding: "10px 0px",
                  duration: 0.4,
                  ease: "power2.inOut"
              });
          }
      });
  });






// //   const container = document.querySelector(".hero_svg");
// //   const numSVGs = 6; // Number of SVGs
// //   const minDistance = 100; // Minimum distance between images
  
// //   const svgPaths = [
// //       "assets/coffee-cup-svgrepo-com.svg",
// // "assets/coffee-svgrepo-com.svg",
// // "assets/cookies-svgrepo-com.svg",
// // "assets/frappe-svgrepo-com.svg",
// // "assets/coffee-cup-svgrepo-com.svg",
// // "assets/coffee-svgrepo-com.svg",
// //   ];
  
// //   const svgs = [];
// //   const positions = [];
  
// //   function getNonOverlappingPosition(containerRect) {
// //       let x, y, tooClose;
  
// //       do {
// //           x = Math.random() * (containerRect.width - 40);
// //           y = Math.random() * (containerRect.height - 40);
  
// //           // Check distance from all existing positions
// //           tooClose = positions.some(pos => {
// //               const dx = pos.x - x;
// //               const dy = pos.y - y;
// //               return Math.sqrt(dx * dx + dy * dy) < minDistance; // Euclidean distance
// //           });
  
// //       } while (tooClose); // Keep generating until a non-overlapping position is found
  
// //       positions.push({ x, y });
// //       return { x, y };
// //   }
  
  
// //   for (let i = 0; i < numSVGs; i++) {
// //       const img = document.createElement("img");
// //       img.classList.add("moving-svg");
// //       img.src = svgPaths[i];
// //       container.appendChild(img);
// //       svgs.push(img);
// //   }

// //   function moveSVGs() {
// //       const containerRect = container.getBoundingClientRect();
// //       positions.length = 0; // Reset positions
  
// //       svgs.forEach(img => {
// //           const { x, y } = getNonOverlappingPosition(containerRect);
// //           img.style.transform = `translate(${x}px, ${y}px)`;
// //       });
// //   }

// //   setInterval(moveSVGs, 2000);
  
// //   moveSVGs(); 
  



