// 🟦 Skills Section Scroll Animation
const skillElements = document.querySelectorAll(".skill-per");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      el.style.width = getComputedStyle(el).getPropertyValue("--percent");
      el.style.opacity = 1;
      observer.unobserve(el);
    }
  });
}, { threshold: 0.5 });

skillElements.forEach(skill => {
  observer.observe(skill);
});
// ✅ Typing Effect
const phrases = [
  "Final Year CSE Student",
  "AI/ML Researcher",
  "Compiler Explorer",
  "Creative Thinker 💡",
  "Future Innovator 🚀"
];

let i = 0;
let j = 0;
let isDeleting = false;
const speed = 100;
const delay = 1500;
const target = document.querySelector(".typewriter-text");

function type() {
  if (!target) return;

  const current = phrases[i];
  const visible = current.slice(0, j);

  target.innerHTML = visible + "<span class='cursor'>|</span>";

  if (!isDeleting && j < current.length) {
    j++;
    setTimeout(type, speed);
  } else if (isDeleting && j > 0) {
    j--;
    setTimeout(type, speed / 2);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) i = (i + 1) % phrases.length;
    setTimeout(type, delay);
  }
}
document.addEventListener("DOMContentLoaded", type);
