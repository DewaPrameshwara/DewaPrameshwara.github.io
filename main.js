const scriptURL = "https://script.google.com/macros/s/AKfycbyD_xi757IjUEU_t-v42Mzl4CrJcqMHzI2InAkPbp9zp7Xg_DFxvVJ_Gyqx2Jr7Zm4/exec";
const form = document.forms["dode-contact-form"];
const btnKirim = document.querySelector(".btn-kirim");
const btnLoading = document.querySelector(".btn-loading");
const myAlert = document.querySelector(".alert");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // saat tombol submit di klik
  // tampilkan tombol loading dan hilangkan tombol kirim
  btnLoading.classList.toggle("d-none");
  btnKirim.classList.toggle("d-none");
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      // saat tombol submit di klik
      // tampilkan tombol kirim dan hilangkan tombol loading
      btnLoading.classList.toggle("d-none");
      btnKirim.classList.toggle("d-none");
      // tampilkan alert
      myAlert.classList.toggle("d-none");
      // reset form
      form.reset();
      console.log("Success!", response);
    })
    .catch((error) => console.error("Error!", error.message));
});

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
