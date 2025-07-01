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
