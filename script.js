// Mobile menu toggle
const toggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("navlinks");

if (toggle && navLinks) {
  toggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
  
  // Close menu when clicking on a link
  const navLinksItems = navLinks.querySelectorAll("a");
  navLinksItems.forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
    });
  });
}

// Contact form submission
const contactForm = document.getElementById("contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Thank you! Your message has been sent.");
    this.reset();
  });
}

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


// Scroll box animation - smooth sliding in intervals from right
const scrollBox = document.getElementById('scroll-box');
const scrollContent = document.getElementById('scroll-content');

if (scrollBox && scrollContent) {
  const images = scrollContent.querySelectorAll('img');
  let currentIndex = 0;
  let slideInterval;
  
  // Set the width of scroll-content to accommodate all images
  if (images.length > 0) {
    const boxWidth = scrollBox.offsetWidth;
    scrollContent.style.width = `${images.length * 100}%`;
    
    // Ensure each image takes exactly the box width
    images.forEach(img => {
      img.style.width = `${boxWidth}px`;
      img.style.minWidth = `${boxWidth}px`;
    });
  }
  
  // Function to slide to next image (sliding from right to left)
  function slideToNext() {
    currentIndex++;
    
    // If we've reached the last image, loop back to the first
    if (currentIndex >= images.length) {
      currentIndex = 0;
    }
    
    // Calculate the translateX value
    // Negative value moves content left, revealing next image from right
    const boxWidth = scrollBox.offsetWidth;
    const translateX = -currentIndex * boxWidth;
    scrollContent.style.transform = `translateX(${translateX}px)`;
  }
  
  // Start the automatic sliding
  function startSliding() {
    // Initial delay before first slide
    setTimeout(() => {
      slideInterval = setInterval(slideToNext, 4000); // Change image every 4 seconds
    }, 1000);
  }
  
  // Initialize when page loads
  if (images.length > 0) {
    // Set initial position - first image visible
    scrollContent.style.transform = 'translateX(0px)';
    startSliding();
  }
  
  // Optional: Pause on hover
  scrollBox.addEventListener('mouseenter', () => {
    if (slideInterval) {
      clearInterval(slideInterval);
    }
  });
  
  scrollBox.addEventListener('mouseleave', () => {
    startSliding();
  });
  
  // Handle window resize
  window.addEventListener('resize', () => {
    if (images.length > 0) {
      const boxWidth = scrollBox.offsetWidth;
      images.forEach(img => {
        img.style.width = `${boxWidth}px`;
        img.style.minWidth = `${boxWidth}px`;
      });
      scrollContent.style.width = `${images.length * 100}%`;
      // Update current position
      const translateX = -currentIndex * boxWidth;
      scrollContent.style.transform = `translateX(${translateX}px)`;
    }
  });
}