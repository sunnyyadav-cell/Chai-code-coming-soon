const form = document.querySelector(".signup-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thank you! We'll notify you when we launch.");
  form.reset();
});

