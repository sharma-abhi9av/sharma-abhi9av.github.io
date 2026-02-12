document.addEventListener("DOMContentLoaded", function () {

  // Apply saved theme
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "hacker") {
    document.body.classList.add("hacker");
  }

  const button = document.createElement("button");
  button.innerText = "🟢";
  button.style.position = "fixed";
  button.style.bottom = "20px";
  button.style.right = "20px";
  button.style.zIndex = "9999";
  button.style.padding = "10px";
  button.style.borderRadius = "8px";
  button.style.border = "none";
  button.style.cursor = "pointer";

  document.body.appendChild(button);

  button.addEventListener("click", function () {

    if (document.body.classList.contains("hacker")) {
      document.body.classList.remove("hacker");
      localStorage.setItem("theme", "default");
    } else {
      document.body.classList.add("hacker");
      localStorage.setItem("theme", "hacker");
    }

  });

});
