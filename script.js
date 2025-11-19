// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    document.querySelector(link.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

// Form validation
document.getElementById("contactForm").addEventListener("submit", e => {
  e.preventDefault();
  alert("Form validated (demo)!");
});
