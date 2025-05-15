// 1. Button click - change text color randomly
const colorBtn = document.getElementById("colorBtn");
colorBtn.addEventListener("click", () => {
  const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
  colorBtn.style.backgroundColor = randomColor;
  colorBtn.textContent = "Color: " + randomColor;
});

// 2. Hover effect on div
const hoverBox = document.getElementById("hoverBox");
hoverBox.addEventListener("mouseenter", () => {
  hoverBox.classList.add("hovered");
});
hoverBox.addEventListener("mouseleave", () => {
  hoverBox.classList.remove("hovered");
});

// 3. Keypress detection in input
const keyInput = document.getElementById("keyInput");
keyInput.addEventListener("keypress", (event) => {
  console.log(`Key pressed: ${event.key}`);
});

// Bonus: double-click secret action
const secret = document.getElementById("secret");
secret.addEventListener("dblclick", () => {
  alert("🎉 You found the secret double-click action! 🎉");
});

// 4. Image Gallery: click thumbnails to change main image
const galleryImages = document.querySelectorAll(".gallery-img");
const mainImage = document.getElementById("mainImage");

galleryImages.forEach((img) => {
  img.addEventListener("click", () => {
    
    galleryImages.forEach(i => i.classList.remove("selected"));
    
    img.classList.add("selected");
    
    mainImage.src = img.src;
  });
});

// 5. Tabs: switch content on tab click
const tabButtons = document.querySelectorAll(".tab-button");
const tabContents = document.querySelectorAll(".tab-content");

tabButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    
    tabButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    
    tabContents.forEach(c => (c.style.display = "none"));

    // Show selected tab content
    const tabNum = btn.dataset.tab;
    document.getElementById(`tab-${tabNum}`).style.display = "block";
  });
});

// 6. Form Validation
const form = document.getElementById("signupForm");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const emailFeedback = document.getElementById("emailFeedback");
const passwordFeedback = document.getElementById("passwordFeedback");

// Real-time feedback for email
emailInput.addEventListener("input", () => {
  const emailVal = emailInput.value;
  if (!validateEmail(emailVal)) {
    emailFeedback.textContent = "Invalid email format";
  } else {
    emailFeedback.textContent = "";
  }
});

// Real-time feedback for password
passwordInput.addEventListener("input", () => {
  if (passwordInput.value.length < 8) {
    passwordFeedback.textContent = "Password must be at least 8 characters";
  } else {
    passwordFeedback.textContent = "";
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const emailVal = emailInput.value.trim();
  const passwordVal = passwordInput.value;

  let isValid = true;

  if (!validateEmail(emailVal)) {
    emailFeedback.textContent = "Please enter a valid email";
    isValid = false;
  }

  if (passwordVal.length < 8) {
    passwordFeedback.textContent = "Password must be at least 8 characters";
    isValid = false;
  }

  if (isValid) {
    alert("Form submitted successfully!");
    form.reset();
    emailFeedback.textContent = "";
    passwordFeedback.textContent = "";
  }
});

// Helper function to validate email format
function validateEmail(email) {
  // Simple email regex (not perfect but enough for demo)
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}
