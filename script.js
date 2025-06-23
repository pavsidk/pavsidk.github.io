// Initialize Lucide icons
document.addEventListener("DOMContentLoaded", () => {
  // Check if lucide is defined before using it
  if (typeof lucide !== "undefined") {
    lucide.createIcons()
  } else {
    console.warn("Lucide is not defined. Ensure it is properly imported or included.")
  }
})

// Mobile menu functionality
const mobileMenuBtn = document.getElementById("mobileMenuBtn")
const navLinks = document.querySelector(".nav-links")

if (mobileMenuBtn) {
  mobileMenuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active")
    mobileMenuBtn.classList.toggle("active")
  })
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Add scroll effect to navigation
window.addEventListener("scroll", () => {
  const nav = document.querySelector(".nav")
  if (window.scrollY > 100) {
    nav.style.background = "rgba(0, 0, 0, 0.95)"
  } else {
    nav.style.background = "rgba(0, 0, 0, 0.9)"
  }
})

// Contact button functionality
const contactBtn = document.querySelector(".contact-btn")
if (contactBtn) {
  contactBtn.addEventListener("click", () => {
    // You can replace this with actual contact form or email functionality
    alert("Contact form would open here! Replace this with your preferred contact method.")
  })
}

// Add hover effects to project cards
document.querySelectorAll(".project-card").forEach((card) => {
  card.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-2px)"
  })

  card.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0)"
  })
})
