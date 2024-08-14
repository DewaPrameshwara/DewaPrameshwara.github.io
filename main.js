gsap.registerPlugin(TextPlugin);
gsap.to(".lead", { duration: 2, delay: 1, text: "Student | Ordinary Person" });

const background = document.querySelector("#back-nav");

const handleScroll = () => {
  const { scrollY, innerHeight } = window;

  const currentIndex = Math.floor(scrollY / (innerHeight - 200));

  background.style.transform = `translateY(${currentIndex > 0 ? 56 * currentIndex : 0}px) translate(6px, 85px)`;
};

document.addEventListener("scroll", handleScroll, { passive: true });
