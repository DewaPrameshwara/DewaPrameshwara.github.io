gsap.registerPlugin(TextPlugin);
gsap.to(".lead", { duration: 2, delay: 1, text: "Student | Ordinary Person" });

const background = document.querySelector("#back-nav");
const backTb = document.querySelector("#back-nav-tb");

const handleScroll = () => {
  const { scrollY, innerHeight } = window;

  const currentIndex = Math.floor(scrollY / (innerHeight + 50));
  const currentIndexTb = Math.floor(scrollY / (innerHeight - 200));

  background.style.transform = `translateY(${currentIndex > 0 ? 75 * currentIndex : 0}px) translate(6px, 85px)`;

  backTb.style.transform = `translateY(${currentIndexTb > 0 ? 75 * currentIndexTb : 0}px) translate(6px, 85px)`;
};

document.addEventListener("scroll", handleScroll, { passive: true });
