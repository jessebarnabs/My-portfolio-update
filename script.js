// ---------- Select the elements we need ----------
const nav = document.querySelector("#nav");
const menuBtn = document.querySelector("#menuBtn");
const greeting = document.querySelector("#greeting");
const cards = document.querySelector("#cards");
const moreBtn = document.querySelector("#moreBtn");
const form = document.querySelector("#form");
const msg = document.querySelector("#msg");

// ---------- Hamburger menu ----------
menuBtn.addEventListener("click", function () {
  nav.classList.toggle("open");          // add "open" if missing, remove it if there
});

nav.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", function () {
    nav.classList.remove("open");        // close the menu after choosing a link
  });
});

// ---------- Greeting: a function with conditionals ----------
function getGreeting(hour) {
  if (hour < 12) {
    return "Good morning";
  } else if (hour < 18) {
    return "Good afternoon";
  } else {
    return "Good evening";
  }
}

greeting.textContent = getGreeting(new Date().getHours()) + "! Welcome to my portfolio.";
document.querySelector("#year").textContent = new Date().getFullYear();

// ---------- "Show more projects" button: adds new content ----------
const moreProjects = [
  { title: "Project 4: Student Performance Analysis",
    text: "A Python OOP program that reads student records from a CSV file, works out grades and prints a report." },
  { title: "Project 5: This Portfolio",
    text: "My portfolio website, built with HTML, CSS and JavaScript." }
];

moreBtn.addEventListener("click", function () {
  moreProjects.forEach(function (project) {
    const card = document.createElement("div");
    card.className = "card new";
    card.innerHTML = "<h3>" + project.title + "</h3><p>" + project.text + "</p>";
    cards.appendChild(card);
  });
  moreBtn.disabled = true;
  moreBtn.textContent = "All projects shown";
});

// ---------- Contact form validation ----------
form.addEventListener("submit", function (event) {
  event.preventDefault();                // stop the page reloading

  const name = form.querySelector("#name").value.trim();
  const email = form.querySelector("#email").value.trim();
  const message = form.querySelector("#message").value.trim();
  const errors = [];

  if (name.length < 2) {
    errors.push("Enter your name (at least 2 letters).");
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.push("Enter a valid email, like name@example.com.");
  }
  if (message.length < 10) {
    errors.push("Your message must be at least 10 characters.");
  }

  if (errors.length > 0) {
    msg.className = "error";
    msg.textContent = errors.join(" ");
  } else {
    msg.className = "";
    msg.textContent = "Thanks, " + name + "! Your message passed the checks. (This practice form does not send email.)";
    form.reset();
  }
});