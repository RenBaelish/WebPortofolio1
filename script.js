document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle")
    const body = document.body
    const hamburger = document.getElementById("hamburger")
    const navMenu = document.querySelector(".nav-menu")

    // Theme toggle
    themeToggle.addEventListener("click", () => {
      body.classList.toggle("dark-mode")
    })

    // Hamburger menu toggle
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active")
      navMenu.classList.toggle("active")
    })

    // Close menu when clicking on a nav item
    document.querySelectorAll(".nav-menu li a").forEach((item) => {
      item.addEventListener("click", () => {
        hamburger.classList.remove("active")
        navMenu.classList.remove("active")
      })
    })

    // Typing effect for tagline
    const tagline = document.getElementById("tagline")
    const text = "Web Developer | Problem Solver | Tech Enthusiast"
    let i = 0

    function typeWriter() {
      if (i < text.length) {
        tagline.innerHTML += text.charAt(i)
        i++
        setTimeout(typeWriter, 50)
      }
    }

    typeWriter()

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault()
        document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth",
        })
      })
    })

    // Scroll reveal animation
    const revealElements = document.querySelectorAll(".skill-item, .project-item, .timeline-item")

    function revealOnScroll() {
      for (let i = 0; i < revealElements.length; i++) {
        const windowHeight = window.innerHeight
        const elementTop = revealElements[i].getBoundingClientRect().top
        const elementVisible = 150

        if (elementTop < windowHeight - elementVisible) {
          revealElements[i].classList.add("visible")
        }
      }
    }

    window.addEventListener("scroll", revealOnScroll)
    revealOnScroll()

    // Parallax effect for background decorations
    const leftDecoration = document.querySelector(".background-decoration.left")
    const rightDecoration = document.querySelector(".background-decoration.right")

    window.addEventListener("scroll", () => {
      const scrollPosition = window.pageYOffset
      leftDecoration.style.transform = `translateY(${scrollPosition * 0.5}px)`
      rightDecoration.style.transform = `translateY(${scrollPosition * -0.5}px)`
    })

    // Form validation
    const contactForm = document.getElementById("contact-form")

    contactForm.addEventListener("submit", (e) => {
      e.preventDefault()
      const name = contactForm.elements["name"].value
      const email = contactForm.elements["email"].value
      const message = contactForm.elements["message"].value

      if (name && email && message) {
        alert("Thank you for your message! I will get back to you soon.")
        contactForm.reset()
      } else {
        alert("Please fill in all fields.")
      }
    })
  })

