function animateCounter(element, target, suffix = "", duration = 2000) {
  let start = 0;
  let increment = target / (duration / 16);

  let counter = setInterval(() => {
    start += increment;
    if (start >= target) {
      start = target;
      clearInterval(counter);
    }
    element.textContent = formatNumber(Math.floor(start)) + suffix;
  }, 16);
}
function formatNumber(num) {
  if (num >= 1000000) return (num / 1000000).toFixed(1) + "M";
  if (num >= 1000) return (num / 1000).toFixed(0) + "k";
  return num;
}

// Run on page load
window.onload = () => {
  const millionElement = document.querySelector(".million-timer h3");
  const clientElement = document.querySelector(".k-timer h3");

  animateCounter(millionElement, 320000000, "+"); 
  animateCounter(clientElement, 590000, "+");
};

// sliddder
const slider = document.getElementById("slider");
const nextBtn = document.getElementById("nextBtn");

let translateX = 0;

nextBtn.addEventListener("click", (e) => {
  e.preventDefault();
  translateX -= 50; 
  slider.style.transform = `translateX(${translateX}px)`;
});


// toggle menu

  const toggleBtn = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector(".nav-menu");

  toggleBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });

  // for scroller
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});


