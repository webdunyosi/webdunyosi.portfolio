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

document.addEventListener("DOMContentLoaded", () => {
  const tabButtons = document.querySelectorAll(".tab-button")
  const tabContents = document.querySelectorAll(".tab-content")

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const targetTab = button.getAttribute("data-tab")

      tabContents.forEach((content) => {
        if (content.id === targetTab) {
          content.classList.remove("hidden")
        } else {
          content.classList.add("hidden")
        }
      })

      tabButtons.forEach((btn) => {
        if (btn === button) {
          btn.classList.add("active-tab-button")
          btn.classList.remove(
            "text-gray-400",
            "hover:text-white",
            "bg-transparent"
          )
          // Set icon color for active tab
          btn.querySelector("svg").classList.remove("text-gray-400")
          btn.querySelector("svg").classList.add("text-white")
        } else {
          btn.classList.remove("active-tab-button")
          btn.classList.add(
            "text-gray-400",
            "hover:text-white",
            "bg-transparent"
          )
          // Set icon color for inactive tabs
          btn.querySelector("svg").classList.remove("text-white")
          btn.querySelector("svg").classList.add("text-gray-400")
        }
      })
    })
  })

  // Set initial active tab
  if (tabButtons.length > 0) {
    tabButtons[0].click()
  }
})

// Handle contact form submission
const contactForm = document.getElementById("contact-form")

contactForm.addEventListener("submit", function (event) {
  event.preventDefault() // Prevent the default form submission

  const name = document.getElementById("name").value
  const email = document.getElementById("email").value
  const message = document.getElementById("message").value

  const botToken = "7768613770:AAFI5eOb3MpVGvc9sFu9G5t8qdvN-EC4IHQ"
  const chatId = "-1002607241253"

  const telegramMessage = `
Yangi xabar:
Ism: ${name}
Email: ${email}
Xabar: ${message}
  `

  // Send message to Telegram bot
  fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      chat_id: chatId,
      text: telegramMessage,
      parse_mode: "HTML",
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data)
      // Show a success message to the user
      alert("Xabaringiz yuborildi!")
      contactForm.reset() // Clear the form
    })
    .catch((error) => {
      console.error("Error:", error)
      // Show an error message to the user
      alert("Xabar yuborishda xatolik yuz berdi.")
    })
})
