// Mobile menu toggle
const toggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

toggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  if (navLinks.classList.contains("active")) {
    navLinks.style.display = "flex";
  } else {
    navLinks.style.display = "none";
  }
});

// Contact form submission
document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Thank you! Your message has been sent.");
  this.reset();
});

// Scroll animations
const animatedElements = document.querySelectorAll(".fade-in, .slide-left, .slide-right");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

animatedElements.forEach(el => observer.observe(el));



// flipping card

const card = document.querySelector('.card-inner');

card.addEventListener('click', () => {
  card.classList.toggle('flipped');
});


// Scroll box animation

const box = document.querySelector('.scroll-box');
  const inner = box.querySelector('.inner');
  const images = inner.querySelectorAll('img');
  let scrollInterval;
  let index1 = 0;

  box.addEventListener('mouseenter', () => {
    scrollInterval = setInterval(() => {
      index1++;
      if (index1 >= images.length) {
        index1 = 0;
      }
      inner.style.transform = `translateX(-${index1 * 300}px)`; // slide by container width
    }, 2000); // change image every 2 seconds
  });

  box.addEventListener('mouseleave', () => {
    clearInterval(scrollInterval);
    inner.style.transform = `translateX(0px)`; // reset to first image
    index1 = 0;
  });