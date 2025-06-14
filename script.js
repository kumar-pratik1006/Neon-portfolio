// Simple animation for skill bars when they come into view
     const skillBars = document.querySelectorAll('.skill-progress');
        
     const observer = new IntersectionObserver((entries) => {
         entries.forEach(entry => {
             if (entry.isIntersecting) {
                 const width = entry.target.style.width;
                 entry.target.style.width = '0';
                 setTimeout(() => {
                     entry.target.style.width = width;
                 }, 100);
             }
         });
     }, {threshold: 0.5});

     skillBars.forEach(bar => {
         observer.observe(bar);
     });

     // Smooth scrolling for navigation links
     document.querySelectorAll('a[href^="#"]').forEach(anchor => {
         anchor.addEventListener('click', function (e) {
             e.preventDefault();
             document.querySelector(this.getAttribute('href')).scrollIntoView({
                 behavior: 'smooth'
             });
         });
     });
