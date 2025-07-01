// 🟦 Skills Section Scroll Animation
document.querySelectorAll(".skill-per").forEach(skill => {
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        skill.style.width = getComputedStyle(skill).getPropertyValue("--percent");
        skill.style.opacity = 1;
        obs.unobserve(skill);
      }
    });
  }, { threshold: 0.5 });

  observer.observe(skill);
});

// ✅ Typing Effect (Looped TypeWriter)
const phrases = [
  "Final Year CSE Student",
  "AI/ML Researcher",
  "Compiler Explorer",
  "Creative Thinker 💡",
  "Future Innovator 🚀"
];

const typewriter = document.querySelector(".typewriter-text");
let phraseIndex = 0;
let charIndex = 0;
let deleting = false;

function typeLoop() {
  const currentPhrase = phrases[phraseIndex];
  const displayText = currentPhrase.slice(0, charIndex);
  typewriter.innerHTML = displayText + "<span class='cursor'>|</span>";

  if (!deleting && charIndex < currentPhrase.length) {
    charIndex++;
    setTimeout(typeLoop, 100);
  } else if (deleting && charIndex > 0) {
    charIndex--;
    setTimeout(typeLoop, 60);
  } else {
    deleting = !deleting;
    if (!deleting) phraseIndex = (phraseIndex + 1) % phrases.length;
    setTimeout(typeLoop, 1500);
  }
}

document.addEventListener("DOMContentLoaded", typeLoop);
