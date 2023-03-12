const monthContainers = document.getElementsByClassName("month-container");

// On scroll, check which month container is in view
// Set the corresponding nav item to active
window.addEventListener('scroll', function(ev) {
  // Check distance from viewport top of each month container
  Array.from(monthContainers).forEach(e => {
    const distTop = e.getBoundingClientRect().top;
    if (distTop > 0 && distTop < window.innerHeight/2) {
      // Unset active status from nav elements
      const navMonths = document.getElementsByClassName("nav-month"); 
      Array.from(navMonths).forEach(n => n.classList.remove("active"))

      // Set active status
      const activeMonth = e.getAttribute("id")
      const activeNav = document.getElementById(`l-${activeMonth}`);
      activeNav.classList.add("active")
      //window.location.hash = `#${activeMonth}`;
    }
  })
});
