 const navbar = document.getElementById('navbar');

    // Function to toggle "scrolled" class based on scroll position
    function handleScroll() {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Initial check incase page is loaded scrolled down
    handleScroll();