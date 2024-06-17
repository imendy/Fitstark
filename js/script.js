

// document.addEventListener('DOMContentLoaded', () => {
//     const hamburger = document.querySelector('.hamburger');
//     const cancel = document.querySelector('.cancel');
//     const navLinks = document.querySelector('.nav-links');
//     const buttons = document.querySelector('.buttons');
//     const navItems = document.querySelectorAll('.nav-links li a');
//     const buttonLinks = buttons.querySelectorAll('a, button');

//     const closeMenu = () => {
//         navLinks.classList.remove('active');
//         buttons.classList.remove('active');
//         hamburger.style.display = 'block';
//         cancel.style.display = 'none';
//     };

//     hamburger.addEventListener('click', () => {
//         navLinks.classList.add('active');
//         buttons.classList.add('active');
//         hamburger.style.display = 'none';
//         cancel.style.display = 'block';
//     });

//     cancel.addEventListener('click', closeMenu);

//     navItems.forEach(item => {
//         item.addEventListener('click', closeMenu);
//     });

//     buttonLinks.forEach(button => {
//         button.addEventListener('click', closeMenu);
//     });

//     window.addEventListener('resize', () => {
//         if (window.innerWidth > 960) {
//             navLinks.classList.remove('active');
//             buttons.classList.remove('active');
//             hamburger.style.display = 'none';
//             cancel.style.display = 'none';
//         } else {
//             hamburger.style.display = 'block';
//         }
//     });

//     if (window.innerWidth <= 960) {
//         hamburger.style.display = 'block';
//     }
// });


// document.addEventListener("DOMContentLoaded", function () {
//     const scrollNavLinks = document.querySelectorAll('.nav-items');

//     scrollNavLinks.forEach(link => {
//       link.addEventListener('click', function(event) {
//         event.preventDefault();

//         const targetId = this.getAttribute('href').substring(1);
//         const targetSection = document.getElementById(targetId);

//         if (targetSection) {
//           window.scrollTo({
//             top: targetSection.offsetTop,
//             behavior: 'smooth'
//           });
//         }
//       });
//     });
//   });


document.addEventListener("DOMContentLoaded", function () {
    const scrollNavLinks = document.querySelectorAll('.nav-items');

    scrollNavLinks.forEach(link => {
      link.addEventListener('click', function(event) {
        event.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
          window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
          });
        }
      });
    });

    // Check if the URL has a hash value
    if (window.location.hash) {
      const hashTargetId = window.location.hash.substring(1);
      const updateSection = document.getElementById(hashTargetId);
      if (updateSection) {
        window.scrollTo({
          top: updateSection.offsetTop,
          behavior: 'smooth'
        });
      }
    }
});









document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.querySelector(".carousel");
    const products = document.querySelectorAll(".product");
    const leftArrow = document.querySelector(".left-arrow");
    const rightArrow = document.querySelector(".right-arrow");
    
    let currentIndex = 0;
    const productWidth = products[0].getBoundingClientRect().width + 20; // Including margin
    const visibleProducts = Math.floor(carousel.parentElement.clientWidth / productWidth);
    
    // Arrow click event handlers
    rightArrow.addEventListener("click", () => {
        if (currentIndex < products.length - visibleProducts) {
            currentIndex++;
            carousel.style.transform = `translateX(-${currentIndex * productWidth}px)`;
        }
    });
    
    leftArrow.addEventListener("click", () => {
        if (currentIndex > 0) {
            currentIndex--;
            carousel.style.transform = `translateX(-${currentIndex * productWidth}px)`;
        }
    });
    
    // Drag functionality
    let isDragging = false;
    let startPosition = 0;
    let currentTranslate = 0;
    let prevTranslate = 0;
    let animationID = 0;
    
    carousel.addEventListener("mousedown", startDrag);
    carousel.addEventListener("mouseup", endDrag);
    carousel.addEventListener("mouseleave", endDrag);
    carousel.addEventListener("mousemove", dragging);
    
    carousel.addEventListener("touchstart", startDrag);
    carousel.addEventListener("touchend", endDrag);
    carousel.addEventListener("touchmove", dragging);
    
    function startDrag(e) {
        isDragging = true;
        startPosition = getPositionX(e);
        animationID = requestAnimationFrame(animation);
    }
    
    function endDrag() {
        isDragging = false;
        cancelAnimationFrame(animationID);
        
        const movedBy = currentTranslate - prevTranslate;
        if (movedBy < -100 && currentIndex < products.length - visibleProducts) {
            currentIndex++;
        }
        
        if (movedBy > 100 && currentIndex > 0) {
            currentIndex--;
        }
        
        setPositionByIndex();
    }
    
    function dragging(e) {
        if (isDragging) {
            const currentPosition = getPositionX(e);
            currentTranslate = prevTranslate + currentPosition - startPosition;
        }
    }
    
    function getPositionX(event) {
        return event.type.includes("mouse") ? event.pageX : event.touches[0].clientX;
    }
    
    function animation() {
        setSliderPosition();
        if (isDragging) requestAnimationFrame(animation);
    }
    
    function setSliderPosition() {
        carousel.style.transform = `translateX(${currentTranslate}px)`;
    }
    
    function setPositionByIndex() {
        currentTranslate = currentIndex * -productWidth;
        prevTranslate = currentTranslate;
        setSliderPosition();
    }
});



// PROGRESS SCROLL TO TOP BAR 

let calcScrollValue = () => {
    let scrollProgress = document.getElementById("progress");
    let progressValue = document.getElementById("progress-value");
    let pos = document.documentElement.scrollTop;
    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100) / calcHeight);
  
    if (pos > 100) {
      scrollProgress.style.display = "grid";
    }
    else {
      scrollProgress.style.display = "none";
    }
  
    scrollProgress.addEventListener("click", () => {
      document.documentElement.scrollTop = 0;
    })
  
    scrollProgress.style.background = `conic-gradient(#95BF1D ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
  }
  
  window.onscroll = calcScrollValue
  window.onload =  calcScrollValue



  


