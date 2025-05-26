// Mobile menu toggle
const mobileMenuButton = document.getElementById("mobile-menu-button")
const navigationLinks = document.getElementById("navigation-links")

mobileMenuButton.addEventListener("click", () => {
  navigationLinks.classList.toggle("hidden")
  navigationLinks.classList.toggle("flex")
})

// Optional: Hide the mobile menu when a link is clicked
navigationLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    if (window.innerWidth < 768) {
      // Assuming 768px is the 'md' breakpoint
      navigationLinks.classList.add("hidden")
      navigationLinks.classList.remove("flex")
    }
  })
})
