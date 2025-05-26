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

// Typing animation for skills
const typingTextElement = document.getElementById("typing-text")
const skills = [
  "Computer Science & Engg.",
  "Web Development",
  "Frontend",
  "Backend",
  "Databases",
] // Skills to type
let skillIndex = 0
let charIndex = 0
const typingSpeed = 70 // Milliseconds per character
const erasingSpeed = 50 // Milliseconds per character
const newSkillDelay = 1500 // Milliseconds before typing the next skill

function type() {
  if (skillIndex < skills.length) {
    if (charIndex < skills[skillIndex].length) {
      typingTextElement.textContent += skills[skillIndex].charAt(charIndex)
      charIndex++
      setTimeout(type, typingSpeed)
    } else {
      // Start erasing after a delay
      setTimeout(erase, newSkillDelay)
    }
  }
}

function erase() {
  if (charIndex > 0) {
    typingTextElement.textContent = skills[skillIndex].substring(
      0,
      charIndex - 1
    )
    charIndex--
    setTimeout(erase, erasingSpeed)
  } else {
    // Move to the next skill after erasing
    skillIndex++
    if (skillIndex >= skills.length) {
      skillIndex = 0 // Loop back to the first skill
    }
    setTimeout(type, typingSpeed)
  }
}

// Start the typing animation when the page loads
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(type, newSkillDelay) // Initial delay before typing starts
})
