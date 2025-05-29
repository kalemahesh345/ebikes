


//    const btn = document.getElementById("menuButton");
//   console.log(btn)
//   btn.addEventListener("mouseenter", () => {
//     btn.textContent = "Open";
//   });
//   btn.addEventListener("mouseleave", () => {
//     btn.textContent = "Menu";
// });


// const video = document.getElementById('video-slide');

//     const swiper = new Swiper('.swiper', {
//       loop: true,
//       pagination: {
//         el: '.swiper-pagination',
//         clickable: true,
//       },
//       navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//       },
//       autoplay: {
//         delay: 5000,
//         disableOnInteraction: false,
//       },
//       on: {
//         slideChange: function () {
//           if (video) video.pause();
//         },
//         slideChangeTransitionEnd: function () {
//           const activeIndex = swiper.realIndex;
//           const videoSlideIndex = 1; // Adjust this if video is on a different slide
//           if (activeIndex === videoSlideIndex && video) {
//             video.currentTime = 0;
//             video.play();
//             swiper.autoplay.stop();
//             video.onended = () => {
//               swiper.autoplay.start();
//               swiper.slideNext();
//             };
//           }
//         }
//       }
//     });
  
// // const slides = document.querySelectorAll('.slide');

// //     function showSlide(index) {
// //       slides.forEach((slide, i) => {
// //         slide.classList.toggle('active', i === index);
// //         if (i === 1 && slide.querySelector('video')) {
// //           slide.querySelector('video').play();
// //         } else if (slide.querySelector('video')) {
// //           slide.querySelector('video').pause();
// //           slide.querySelector('video').currentTime = 0;
// //         }
// // });
// // }

// //  var swiper = new Swiper(".mySwiper", {
// //       navigation: {
// //         nextEl: ".swiper-button-next",
// //         prevEl: ".swiper-button-prev",
// //       },
// //     });

// // var swiper = new swiper(".mySwiper", {
// //       navigation: {
// //         nextEl: ".swiper-button-next",
// //         prevEl: ".swiper-button-prev",
// //       },
//     // });


// // shubham

// const images = ['https://www.joyebike.com/home/assets/img/bike/changingbike2.webp', 'https://www.joyebike.com/home/assets/img/bike/changingbike3.webp', ' https://www.joyebike.com/home/assets/img/bike/changingbike1.webp'];

//   let index = 0; 
//   function changeImage() {
//     index = (index + 1) % images.length; 
//     document.getElementById('slideshow').src = images[index];
//   }

// setInterval(changeImage, 2000);





//   const joyeContent = {
//     image: "https://www.joyebike.com/home/assets/img/bharat_ka_joy-logo.webp",
//     heading: "JOY E-BIKE: RIDES THAT RECREATE THE FUTURE, THE GREENER WAY",
//     paragraph: "We present to you the trendsetter of sustainability and innovation- The Joy e-bike. With zero carbon emissions and cutting-edge mobility, our cost-effective range of 12 advanced EV 2-wheelers aim to accelerate eco-friendly initiatives that sow the seeds of a greener tomorrow. Connecting people's commute needs with our planet's well-being, that's our motto, that's our dream!"
//   };



//  var image = document.getElementById('joyeimg');
// image.src=joyeContent.image;

// var heading = document.getElementById('joyeheading');
// heading.innerText=joyeContent.heading;

// var paragraph = document.getElementById('joyeparagraph');
// paragraph.innerText=joyeContent.paragraph;



// gsap.from(".joyechild h1", {
//   y: 120,
//   duration: 2.5,
//   opacity: 0,
//   scrollTrigger: {
//     trigger: ".joyechild",    
//     scroller: "highway1",
//     markers: true,            
//      start:"bottom 100%",
//       end:"top 0%",
//       scrub:5,
               
//     // pin: true              
//   }
// });

// gsap.from(".joyechild p", {
//   y: 120,
//   duration: 3,
//   opacity: 0,
//   scrollTrigger: {
//     trigger: ".joyechild",    
//     scroller: "body",
//     markers: true,            
//      start:"bottom 100%",
//       end:"top 0%",
//       scrub:5,
               
//     // pin: true              
// }
// });

// //shubham





// // karan
// const bikes = [
//   {
//     name: "Mihos",
//     image: "https://www.joyebike.com/home/assets/img/bike/highspeed-mihos_new.png",
//     showroomPrice: "₹135000/-",
//     offerPrice: "₹107619*/-",
//     description: "High-speed electric bike Mihos",
//     type: "high-speed",
//   },
//   {
//     name: "Nimo",
//     image: "https://joyebike.com/nemo/assets/img/nemo/NemoAnglewhite_old.png",
//     showroomPrice: "₹135000/-",
//     offerPrice: "₹94286*/-",
//     description: "Introductory model Nimo electric bike",
//     type: "high-speed",
//   },
//   {
//     name: "Wolf+",
//     image: "https://www.joyebike.com/home/assets/img/bike/Wolf%20plus.webp",
//     showroomPrice: "₹115694/-",
//     offerPrice: "₹71099*/-",
//     description: "Wolf+ affordable electric bike",
//     type: "standard",
//   },
//   {
//     name: "Gen-Next Nanu+",
//     image: "https://www.joyebike.com/home/assets/img/bike/Nanu%20plus.webp",
//     showroomPrice: "₹135000/-",
//     offerPrice: "₹107619*/-",
//     description: "Gen-Next Nanu+ advanced electric bike",
//     type: "standard",
//   },
 
// ];


// const HighlightText={
//       fleetText:"OUR FLEET OF",
//       Highlight:"HIGH SPEED ELECTIRIC BIKES",
//       button:"Book Now"
// }


 
// var fleetText=document.getElementById('fleetText');
// fleetText.innerText=HighlightText.fleetText;

// var fleetText=document.getElementById('fleetHigthText');
// fleetText.innerText=HighlightText.Highlight;

// var button=document.getElementById('bike_button1');
// button.innerText=HighlightText.button;

// var button=document.getElementById('bike_button2');
// button.innerText=HighlightText.button;

// var button=document.getElementById('bike_button3');
// button.innerText=HighlightText.button;

// var button=document.getElementById('bike_button4');
// button.innerText=HighlightText.button;

// for (let i = 0; i < bikes.length; i++) {
//   document.getElementById(`bikeImage${i + 1}`).src = bikes[i].image;
//   document.getElementById(`bikeName${i + 1}`).innerText = bikes[i].name;
//   document.getElementById(`showroomPrice${i + 1}`).innerText = Showroom `Price : ${bikes[i].showroomPrice}`;
//   document.getElementById(`offerPrice${i + 1}`).innerText = Offer `Price : ${bikes[i].offerPrice}`;
// }








// gsap.from(".our_fleet_text h1",{
//        opacity:-2,
//       y:-200,
//       duration:0.5,
//       scrollTrigger:{
//         trigger:"#fleetHigthText",
//         scroller:"body",
//         // markers:"true",
//         start:"top 100%",
//         end:"top 0%",
//         scrub:2
//       }
// });



// gsap.from(".bike_types_box_up img",{
//    scale:0,
//    opacity:-1,
//     duration:1,
//     delay:1,
//     scrollTrigger:{
//         trigger:"bike_types_box_up img",
//         scroller:"body",
//         // markers:"true",
//         start:"top -20%",
//         end:"top 40%",
//         scrub:5
// }

// })
// // karan


   









// new









window.addEventListener('DOMContentLoaded', () => {
  // ---------------- MENU BUTTON ----------------
  const btn = document.getElementById("menuButton");
  if (btn) {
    btn.addEventListener("mouseenter", () => {
      btn.textContent = "Open";
    });
    btn.addEventListener("mouseleave", () => {
      btn.textContent = "Menu";
    });
  }

  // ---------------- SWIPER SLIDER WITH VIDEO ----------------
  const video = document.getElementById('video-slide');
  const swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    on: {
      slideChange: function () {
        if (video) video.pause();
      },
      slideChangeTransitionEnd: function () {
        const activeIndex = swiper.realIndex;
        const videoSlideIndex = 1; // Update if video is on a different slide
        if (activeIndex === videoSlideIndex && video) {
          video.currentTime = 0;
          video.play();
          swiper.autoplay.stop();
          video.onended = () => {
            swiper.autoplay.start();
            swiper.slideNext();
          };
        }
      }
    }
  });

  // ---------------- IMAGE SLIDESHOW ----------------
  const images = [
    'https://www.joyebike.com/home/assets/img/bike/changingbike2.webp',
    'https://www.joyebike.com/home/assets/img/bike/changingbike3.webp',
    'https://www.joyebike.com/home/assets/img/bike/changingbike1.webp'
  ];

  let imageIndex = 0;
  function changeImage() {
    imageIndex = (imageIndex + 1) % images.length;
    const slideshow = document.getElementById('slideshow');
    if (slideshow) slideshow.src = images[imageIndex];
  }
  setInterval(changeImage, 2000);

  // ---------------- JOYE CONTENT ----------------
  const joyeContent = {
    image: "https://www.joyebike.com/home/assets/img/bharat_ka_joy-logo.webp",
    heading: "JOY E-BIKE: RIDES THAT RECREATE THE FUTURE, THE GREENER WAY",
    paragraph: "We  present  to  you the trendsetter of sustainability and innovation- The Joy e-bike. With zero carbon emissions and cutting-edge mobility, our cost-effective range of 12 advanced EV 2-wheelers aim to accelerate eco-friendly initiatives that sow the seeds of a greener tomorrow. Connecting people's commute needs with our planet's well-being, that's our motto, that's our dream!"
  };

  const joyeImg = document.getElementById('joyeimg');
  if (joyeImg) joyeImg.src = joyeContent.image;

  const joyeHeading = document.getElementById('joyeheading');
  if (joyeHeading) joyeHeading.innerText = joyeContent.heading;

  const joyeParagraph = document.getElementById('joyeparagraph');
  if (joyeParagraph) joyeParagraph.innerText = joyeContent.paragraph;

  // ---------------- JOYE ANIMATIONS ----------------
  gsap.from(".joyechild h1", {
    y: 120,
    duration: 2,
    opacity: 0,
    scrollTrigger: {
      trigger: ".joyechild",
      scroller: "body",
      // markers: true,
      start: "bottom 100%",
      end: "top 0%",
      scrub: 5
    }
  });

  gsap.from(".joyechild p", {
    y: 120,
    duration: 3,
    opacity: 0,
    scrollTrigger: {
      trigger: ".joyechild",
      scroller: "body",
      // markers: true,
      start: "bottom 90%",
      end: "top 0%",
      scrub: 5
    }
  });

  // ---------------- FLEET SECTION ----------------
  const HighlightText = {
    fleetText: "OUR FLEET OF",
    Highlight: "HIGH SPEED ELECTRIC BIKES",
    button: "Book Now"
  };

  const fleetTextMain = document.getElementById('fleetText');
  if (fleetTextMain) fleetTextMain.innerText = HighlightText.fleetText;

  const highlightHeading = document.getElementById('fleetHigthText');
  if (highlightHeading) highlightHeading.innerText = HighlightText.Highlight;

  ['bike_button1', 'bike_button2', 'bike_button3', 'bike_button4'].forEach(id => {
    const btn = document.getElementById(id);
    if (btn) btn.innerText = HighlightText.button;
  });

  const bikes = [
    {
      name: "Mihos",
      image: "https://www.joyebike.com/home/assets/img/bike/highspeed-mihos_new.png",
      showroomPrice: "₹135000/-",
      offerPrice: "₹107619*/-",
      description: "High-speed electric bike Mihos",
      type: "high-speed",
    },
    {
      name: "Nimo",
      image: "https://joyebike.com/nemo/assets/img/nemo/NemoAnglewhite_old.png",
      showroomPrice: "₹135000/-",
      offerPrice: "₹94286*/-",
      description: "Introductory model Nimo electric bike",
      type: "high-speed",
    },
    {
      name: "Wolf+",
      image: "https://www.joyebike.com/home/assets/img/bike/Wolf%20plus.webp",
      showroomPrice: "₹115694/-",
      offerPrice: "₹71099*/-",
      description: "Wolf+ affordable electric bike",
      type: "standard",
    },
    {
      name: "Gen-Next Nanu+",
      image: "https://www.joyebike.com/home/assets/img/bike/Nanu%20plus.webp",
      showroomPrice: "₹135000/-",
      offerPrice: "₹107619*/-",
      description: "Gen-Next Nanu+ advanced electric bike",
      type: "standard",
    },
  ];

  for (let i = 0; i < bikes.length; i++) {
    const img = document.getElementById(`bikeImage${i + 1}`);  // fixed id typo here
    const name = document.getElementById(`bikeName${i + 1}`);
    const showroom = document.getElementById(`showroomPrice${i + 1}`);
    const offer = document.getElementById(`offerPrice${i + 1}`);

    if (img) img.src = bikes[i].image;
    if (name) name.innerText = bikes[i].name;
    if (showroom) showroom.innerText = `Showroom Price : ${bikes[i].showroomPrice}`;
    if (offer) offer.innerText = `Offer Price : ${bikes[i].offerPrice}`;
  }

  // ---------------- GSAP FOR OUR FLEET ----------------
  gsap.from(".our_fleet_text h1", {
    opacity: 0,
    y: -200,
    duration: 2000,
    scrollTrigger: {
      trigger: "#fleetHigthText",
      scroller: "body",
      // markers: true,
      start: "top 80%",
      end: "top 0%",
      scrub: 2
    }
  });

  gsap.from(".bike_types_box_up img", {
    scale: 0,
    opacity: 0,
    duration: 2,
    delay: 2,
    scrollTrigger: {
      trigger: ".bike_types_box_up img",
      scroller: "body",
      // markers: true,
      start: "top 60%",
      end: "top 80%",
      scrub: 5
    }
  });
});


// dnyanu



var beastD = [
  {
    sub_title: "OUR  FLEET  OF",
    maintitle: "HIGH PERFORMANCE E-BIKES",
    bikecard1: "https://www.joyebike.com/home/assets/img/bike/highperformance-hurricane.webp",
    bikedis: "Hurricane",
    bikecard: "https://www.joyebike.com/home/assets/img/bike/highperformance-beast.webp",
    Beast: "Beast",
  },
  {
    our: "OUR FLEET OF",
    maina: "LOW SPEED ELECTRIC BIKES",
    WolIMG: "https://joyebike.com/home/assets/img/bike/lowspeed_wolf.webp",
    woldis: "Wolf",
    wolp: "Showroom Price : ₹ 91350 /-",
    wolspan: "Offer Price : ₹ 54999* /-",
    WolDisBook: "Book Now",
  },
  {
    image: "https://joyebike.com/home/assets/img/bike/lowspeed_nanu.webp",
    name: "Joy Gen-Next Nanu",
    showroomPrice: "showroomPrice : ₹ 77400 /-",
    offerPrice: "offerPrice : ₹ 53999* /-",
    BookNow1: "Book Now",
  },
  {
    image: "https://joyebike.com/home/assets/img/bike/lowspeed_glow.webp",
    name: "Glob",
    showroomPrice: "showroomPrice : ₹ 77400 /-",
    offerPrice: "offerPrice : ₹ 70000* /-",
    GlobBook: "Book Now",
  },
];

var ecoBikes = [
  {
    title: "OUR FLEET OF",
    heading: "ECO MODEL E-BIKES",
  },
  {
    image: "https://www.joyebike.com/home/assets/img/bike/Wold%20Eco%20with%20Stand.webp",
    name: "Wolf Eco",
    showroomPrice: "ShowroomPrice : ₹ 91350 /-",
    offerPrice: "OfferPrice : ₹ 65099* /-",
    Book: "Book Now",
  },
  {
    image: "https://www.joyebike.com/home/assets/img/bike/Nanu%20Eco.webp",
    name: "Gen-Next Nanu Eco",
    showroomPrice: "ShowroomPrice : ₹ 88200 /-",
    offerPrice: "OfferPrice : ₹ 64099* /-",
    BookNow: "Book Now",
  },
];

// Populate ecoBikes section
document.querySelector('.title').innerText = ecoBikes[0].title;
document.querySelector('#heading').innerText = ecoBikes[0].heading;

document.querySelector('.image1').src = ecoBikes[1].image;
document.querySelector('.name1').innerText = ecoBikes[1].name;
document.querySelector('.aprice').innerText = ecoBikes[1].showroomPrice;
document.querySelector('.bprice').innerText = ecoBikes[1].offerPrice;
document.querySelector('.Book').innerText = ecoBikes[1].Book;

document.querySelector('.image2').src = ecoBikes[2].image;
document.querySelector('.name2').innerText = ecoBikes[2].name;
document.querySelector('.afterprice').innerText = ecoBikes[2].showroomPrice;
document.querySelector('.beforprice').innerText = ecoBikes[2].offerPrice;
document.querySelector('.BookNow').innerText = ecoBikes[2].BookNow;

// Populate beastD (lowspeed_glow)
document.querySelector('.image').src = beastD[3].image;
document.querySelector('.nameh').innerText = beastD[3].name;
document.querySelector('.showroomP').innerText = beastD[3].showroomPrice;
document.querySelector('.Price').innerText = beastD[3].offerPrice;
document.querySelector('.GlobBook').innerText = beastD[3].GlobBook;

// Populate beastD (lowspeed_nanu)
document.querySelector('.Genimg').src = beastD[2].image;
document.querySelector('.joy').innerText = beastD[2].name;
document.querySelector('.showroomPrice').innerText = beastD[2].showroomPrice;
document.querySelector('.offerPrice').innerText = beastD[2].offerPrice;
document.querySelector('.BookNow1').innerText = beastD[2].BookNow1;

// Populate beastD (lowspeed_wolf)
document.querySelector('.our').innerText = beastD[1].our;
document.querySelector('.maina').innerText = beastD[1].maina;
document.querySelector('.WolIMG').src = beastD[1].WolIMG;
document.querySelector('.woldis').innerText = beastD[1].woldis;
document.querySelector('.wolp').innerText = beastD[1].wolp;
document.querySelector('.wolspan').innerText = beastD[1].wolspan;
document.querySelector('.WolDisBook').innerText = beastD[1].WolDisBook;

// Populate beastD (high performance)
document.querySelector('.subtitle').innerText = beastD[0].sub_title;
document.querySelector('#maintitle').innerText = beastD[0].maintitle;
document.querySelector('#bikecard1').src = beastD[0].bikecard1;
document.querySelector('.bikedis').innerText = beastD[0].bikedis;
document.querySelector('.bikecard').src = beastD[0].bikecard;
document.querySelector('.Beast').innerText = beastD[0].Beast;

// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

function desktopAnimations() {
  gsap.from(".bike-card img", {
    x: 700,
    duration: 0.5,
    scrollTrigger: {
      trigger: ".bike-card",
      scroller: "body",
      start: "top 100%",
      end: "top 0%",
      scrub: 5,
    },
  });

  gsap.from(".bike-card1 img", {
    x: -700,
    duration: 0.5,
    scrollTrigger: {
      trigger: ".bike-card1",
      scroller: "body",
      start: "top 100%",
      end: "top 0%",
      scrub: 5,
    },
  });

  gsap.from(".main-title", {
    y: -120,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: ".beast",
      // markers:true,
      scroller: "body",
      start: "top 80%",
      end: "top 80%",
      scrub: 5,
    },
  });

  gsap.from(".WolfDis img", {
    x: -700,
    duration: 0.5,
    scrollTrigger: {
     
      trigger: ".EcoHome",
      scroller: "body",
      start: "top -65%",
      end: "top 10%",
      scrub: 5,
    },
  });
  

  gsap.from(".Globdis img", {
    x: 700,
    duration: 0.5,
    scrollTrigger: {
      trigger: ".EcoHome",
      scroller: "body",
      start: "top -65%",
      end: "top 0%",
      scrub: 5,
    },
  });

  gsap.from(".Gen-Next img", {
    y: 200,
    opacity: 0,
    scale: 0,
    duration: 4,
    scrollTrigger: {
      trigger: ".EcoHome",
      scroller: "body",
      start: "top -55%",
      end: "top 0%",
      scrub: 5,
    },
  });

  gsap.from(".maina", {
    y: -120,
    opacity: 0,
    duration: 0.5,
    scrollTrigger: {
      trigger: ".EcoHome",
      scroller: "body",
      start: "top -40%",
      end: "top 50%",
      scrub: 5,
    },
  });
  
  gsap.from(".Ecodis h1", {
    y: -120,
    opacity: 0,
    duration: 0.5,
    scrollTrigger: {
      trigger: ".beast",
      scroller: "body",
      start: "top 0%",
      end: "top 50%",
      scrub: 5,
      // markers:true
    },
  });

// if (window.matchMedia("(max-width: 765px)").matches) {
//   gsap.killTweensOf(".bike-card img");
//   gsap.killTweensOf(".bike-card1 img");
//   gsap.killTweensOf(".main-title");
//    gsap.killTweensOf(".maina");
//   gsap.killTweensOf(".Gen-Next img");
//   gsap.killTweensOf(".Globdis img ");
//   gsap.killTweensOf(".WolfDis img");
// }
}

const mediaQuery = window.matchMedia('(max-width: 765px)');

function handleTabletChange(e) {
  if (e.matches) {
    gsap.set(".bike-card img", {
    opacity: 1,
    y: 0,
    scale: 1,
  });

    gsap.from(".bike-card img",{
    x:1600,
    duration:0.5,
    scrollTrigger:{
      trigger:".bike-card1 ",
      scroller:"body",
    //   markers:true,
      start:"top 100%",
      end:"top -10%",
      scrub:5,
    //   pin:true
      
    
    }});
gsap.set(".bike-card1 img", {
    opacity: 1,
    y: 0,
    scale: 1,
  });

      
   gsap.from(".bike-card1 img",{
    x:-2000,
    // x:-800,
    duration:0.5,
    scrollTrigger:{
      trigger:".Globdis ",
      scroller:"body",
      // markers:true,
      start:"top 30%",
      end:"top -10%",
      scrub:5,
      
    //   pin:true
      
    
    }});

 gsap.set(".Gen-Next img", {
    opacity: 1,
    y: 0,
    scale: 1,
  });

   gsap.from(".Gen-Next img",{
    y:300,
    // x:-800,
    opacity:0,
    duration:4,
     scale: 0,
      scrollTrigger:{
      trigger:".WolfDis",
      scroller:"body",
    //   markers:true,
      start:"top 35%",
      end:"top 0%",
      scrub:5,
     
    //   pin:true
      
    
 }});

   gsap.set(".main-title", {
    opacity: 1,
    y: 0,
  });

   gsap.from(".main-title ",{
    y:-220,
    // x:-800,
    duration:1,
     opacity:0,
    scrollTrigger:{
      trigger:".Globdis ",
      scroller:"body",
    //   markers:true,
      start:"top bvb%",
      end:"top 20%",
      scrub:5,
     
    //   pin:true
      
    
    }});
     gsap.set(".maina", {
    opacity: 1,
    y: 0,vbv
  });
   gsap.from(".maina ",{
    y:-120,
    // x:-800,
    duration:0.5,
     opacity:0,
    scrollTrigger:{
      trigger:".NanuImg ",
      scroller:"body",
      // markers:true,
     start:"top 20%",
      end:"top 20%",
      scrub:5,
     
    //   pin:true
      
    
    }});

     gsap.set(".Globdis img", {
    x: 0,
    opacity: 1,
  });
    gsap.from(".Globdis img ", {
    x:2000,
    duration: 0.5,
    scrollTrigger: {
      trigger: ".Gen-Next",
      scroller: "body",
      // markers:true,
      start: "top -10%",
      end: "top 0%",
      scrub: 5,
    }
  });

 
     gsap.set(".WolfDis img", {
    x: 0,
    opacity: 1,
     });
    gsap.from(".WolfDis img ",{
    x:-700,
    // x:-800,
    duration:0.5,
    scrollTrigger:{
      trigger:".Ecohome",
      scroller:"body",
      // markers:true,
      start:"top -65%",
      end:"top 0%",
      scrub:5,
      
    //   pin:true
      
    
 }});
// 

    console.log('Screen is 768px or less');
  } else {
    console.log('Screen is wider than 768px');
  }
}

// Register event listener
// mediaQuery.addListener(handleTabletChange);

// Initial check
// handleTabletChange(mediaQuery);

// function mobileAnimations() {
  
//   gsap.set(".bike-card img", {
//     opacity: 1,
//     y: 0,
//     scale: 1,
//   });
//   gsap.from(".bike-card img", {
//     x: 1600,
//     duration: 0.5,
//     scrollTrigger: {
//       trigger: ".bike-card1",
//       scroller: "body",
//       start: "top 100%",
//       end: "top -10%",
//       scrub: 5,
//     },
//   });
 
//   gsap.set(".bike-card1 img", {
//     opacity: 1,
//     y: 0,
//     scale: 1,
//   });
//   gsap.from(".bike-card1 img", {
//     x: -2000,
//     duration: 0.5,
//     scrollTrigger: {
//       trigger: ".Globdis",
//       scroller: "body",
//       start: "top 30%",
//       end: "top -10%",
//       scrub: 5,
//     },
//   });

//   gsap.set(".Gen-Next img", {
//     opacity: 1,
//     y: 0,
//     scale: 1,
//   });

//   gsap.from(".Gen-Next img", {
//     y: 300,
//     opacity: 0,
//     scale: 0,
//     duration: 4,
//     scrollTrigger: {
//       trigger: ".WolfDis",
//       scroller: "body",
//       start: "top 35%",
//       end: "top 0%",
//       scrub: 5,
//     },
//   });

//   gsap.set(".main-title", {
//     opacity: 1,
//     y: 0,
//   });

//   gsap.from(".main-title", {
//     y: -220,
//     opacity: 0,
//     duration: 1,
//     scrollTrigger: {
//       trigger: ".Globdis",
//       scroller: "body",
//       start: "top 20%",
//       end: "top 20%",
//       scrub: 5,
//     },
//   });

//   gsap.set(".maina", {
//     opacity: 1,
//     y: 0,
//   });

//   gsap.from(".maina", {
//     y: -120,
//     opacity: 0,
//     duration: 0.5,
//     scrollTrigger: {
//       trigger: ".NanuImg",
//       scroller: "body",
//       start: "top 20%",
//       end: "top 20%",
//       scrub: 5,
//     },
//   });

//   gsap.set(".Globdis img", {
//     x: 0,
//     opacity: 1,
//   });

//   gsap.from(".Globdis img", {
//     x: 2000,
//     duration: 0.5,
//     scrollTrigger: {
//       trigger: ".Gen-Next",
//       scroller: "body",
//       start: "top -10%",
//       end: "top 0%",
//       scrub: 5,
//     },
//   });

//   gsap.set(".WolfDis img", {
//     x: 0,
//     opacity: 1,
//   });

//   gsap.from(".WolfDis img", {
//     x: -700,
//     duration: 0.5,
//     scrollTrigger: {
//       trigger: ".Ecohome",
//       scroller: "body",
//       start: "top -65%",
//       end: "top 0%",
//       scrub: 5,
//     },
//   });
// }





// On resize or load, switch animation based on width
function handleResize() {
  // Kill all existing tweens before creating new ones to avoid duplicates
  // gsap.killTweensOf(".bike-card img");
  // gsap.killTweensOf(".bike-card1 img");
  // gsap.killTweensOf(".main-title");
  // gsap.killTweensOf(".maina");
  // gsap.killTweensOf(".Gen-Next img");
  // gsap.killTweensOf(".Globdis img");
  // gsap.killTweensOf(".WolfDis img");

  if (window.matchMedia("(max-width: 768px)").matches) {
    mobileAnimations();
  } else {
    desktopAnimations();
  }
}

window.addEventListener('resize', handleResize);
window.addEventListener('load', handleResize);



 // dnyanu

//  karan

const connectSection = {
  heading: "STAY CONNECTED TO YOUR RIDE, FOREVER WITH JOY E-BIKE APP",
  connectLogo: 'https://www.joyebike.com/home/assets/img/bike_icon.png',
  description: "It's time to go keyless and still be privileged to remotely turn on the ignition. It's time to stay aware of the charging status, battery voltage & temperature alerts of your bike, remotely! It's time to be easily accessible to your bike with our cloud_based user_friendly application, JOY E_CONNECT.",
  images: [
    "https://www.joyebike.com/home/assets/img/iot1.webp",
    "https://www.joyebike.com/home/assets/img/iot2.webp"
  ]
};



var connectLogo = document.getElementById('connectLogo');
connectLogo.src=connectSection.connectLogo;
  
var connectHeadings= document.getElementById('connectHeadings');
connectHeadings.innerText=connectSection.heading;

var connectText =document.getElementById('connectText');
connectText.innerText=connectSection.description;

var mobileImage1=document.getElementById('mobileImage1');
mobileImage1.src=connectSection.images[0];

var mobileImage2=document.getElementById('mobileImage2');
mobileImage2.src=connectSection.images[1];



gsap.registerPlugin(ScrollTrigger);
gsap.from(".connect_text",{
    x:-700,
    duration:1.50,
      scrollTrigger:{
        trigger:".connect_text",
        scroller:"body",
        // markers:"true",
        start:"top 79%",
        end:"top 40%",
        scrub:3
      }
});


gsap.from(".text_headings",{
    x:-700,
    duration:3.50,
     scrollTrigger:{
        trigger:".connect_text",
        scroller:"body",
        // markers:"true",
        start:"top 14%",
        end:"top 40%",
        scrub:3
      }
});


gsap.from(".mahi22",{
     x:700,
    duration:1.30,
      scrollTrigger:{
        trigger:".mahi22",
        scroller:"body",
        // markers:"true",
        start:"top 80%",
        end:"top 50%",
        scrub:3
      }
})



gsap.from(".mahi",{
    x:700,
    duration:1.50,
     scrollTrigger:{
        trigger:".mahi21",
        scroller:"body",
        // markers:"true",
        start:"top 17%",
        end:"top 40%",
        scrub:3
}
});

//karan

// shubham

const featuresSection = {
  title: {
    image: "https://www.joyebike.com/home/assets/img/gif/setting-new-gif.gif",
    heading1: "KEY",
    heading2: "FEATURES"
  },
  features: [
    {
      title: "Tubeless Tyre",
      description: "Enhanced grip and durability",
      image: "https://www.joyebike.com/home/assets/img/gif/Tubeless-tyre.gif"
    },
    {
      title: "Battery",
      description: "Enhanced battery management technology and fast charging mechanism",
      image: "https://www.joyebike.com/home/assets/img/gif/Battery-charge.gif"
    },
    {
      title: "Brake System",
      description: "Combi Brake System for Smooth, Safe Handling and Collision Prevention",
      image: "https://www.joyebike.com/home/assets/img/gif/break-system.gif"
    },
    {
      title: "Hydraulic Suspension",
      description: "Advanced road force absorption for Smoother and Comfier Driving",
      image: "https://www.joyebike.com/home/assets/img/gif/suspension.gif"
    },
    {
      title: "Waterproof Protection",
      description: "Water-resistant and Dust-proof Battery Pack with High-Pressure Jet Protection",
      image: "https://www.joyebike.com/home/assets/img/gif/waterproof-protection.gif"
    }
  ],
  extraImage: "https://www.joyebike.com/home/assets/img/keyfeatures.png"
};




var featureimg = document.getElementById("featureimg");
featureimg.src = featuresSection.title.image;

var featureheading1 = document.getElementById("featureheading1");
featureheading1.innerText = featuresSection.title.heading1;

var featureheading2 = document.getElementById("featureheading2");
featureheading2.innerText = featuresSection.title.heading2;

var tyreimg = document.getElementById("tyreimg");
tyreimg.src = featuresSection.features[0].image;

var tyreheading = document.getElementById("tyreheading");
tyreheading.innerText = featuresSection.features[0].title;

var tyrepara = document.getElementById("tyrepara");
tyrepara.innerText = featuresSection.features[0].description;

var batteryimg = document.getElementById("batteryimg");
batteryimg.src = featuresSection.features[1].image;

var batteryheading = document.getElementById("batteryheading");
batteryheading.innerText = featuresSection.features[1].title;

var batterypara = document.getElementById("batterypara");
batterypara.innerText = featuresSection.features[1].description;

var brakeimg = document.getElementById("brakeimg");
brakeimg.src = featuresSection.features[2].image;

var brakeheading = document.getElementById("brakeheading");
brakeheading.innerText = featuresSection.features[2].title;

var brakepara = document.getElementById("brakepara");
brakepara.innerText = featuresSection.features[2].description;

var suspensionimg = document.getElementById("suspensionimg");
suspensionimg.src = featuresSection.features[3].image;

var suspensionheading = document.getElementById("suspensionheading");
suspensionheading.innerText = featuresSection.features[3].title;

var suspensionpara = document.getElementById("suspensionpara");
suspensionpara.innerText = featuresSection.features[3].description;

var waterproofimg = document.getElementById("waterproofimg");
waterproofimg.src = featuresSection.features[4].image;

var waterproofheading = document.getElementById("waterproofheading");
waterproofheading.innerText = featuresSection.features[4].title;

var waterproofpara = document.getElementById("waterproofpara");
waterproofpara.innerText = featuresSection.features[4].description;

var extrafeatureimg = document.getElementById("extrafeatureimg");
extrafeatureimg.src = featuresSection.extraImage;



gsap.from(".key h1 ",{
    y:-120,
    // x:-800,
    duration:1,
     opacity:0,
    scrollTrigger:{
      trigger:".key h1 ",
      scroller:"body",
      // markers:true,
      start:"top 40%",
      end:"top 50%",
      scrub:5,
     
    //   pin:true
}});
// shubham

gsap.from(".ourf ",{
    y:120,
    // x:-800,
    duration:2,
     opacity:0,
    scrollTrigger:{
      trigger:".ourf ",
      scroller:"body",
      // markers:true,
      start:"top 85%",
      end:"top 90%",
      scrub:5,
     
    //   pin:true
}});
