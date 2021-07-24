/**=================== MOBILE NAV =================== */
const mNav = document.querySelector(".mobile-nav");
const comsMenuBtn = document.querySelector(".coms-items");
const cta = document.querySelector(".cta i");

comsMenuBtn.addEventListener("click", () => {
  comsMenuBtn.classList.add("active");
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    mNav.classList.add("show");
  } else {
    mNav.classList.remove("show");
  }
});

window.addEventListener("click", (e) => {
  if (e.target !== comsMenuBtn && e.target !== cta) {
    comsMenuBtn.classList.remove("active");
  }
});

/**=================== HERO SECTION =================== */
const logo = document.querySelector(".hero h3");
const tagline = document.querySelector(".hero h1");
const btn = document.querySelector(".hero .cta-hero");
const secBtn = document.querySelector(".hero .explore");
const arrowDown = document.querySelector(".hero i");
const heroImg = document.querySelector(".hero img");

window.addEventListener("scroll", () => {
  if (window.scrollY == 0) {
    logo.style.transform = `translateY(0)`;
    tagline.style.transform = `translateY(0)`;
    btn.style.transform = `translateY(0)`;
    secBtn.style.transform = `translateY(0)`;
    arrowDown.style.transform = `translateY(0)`;
    heroImg.style.opacity = 0;
  } else {
    logo.style.transform = `translateY(-${window.scrollY * 3}px)`;
    tagline.style.transform = `translateY(-${window.scrollY * 2.5}px)`;
    btn.style.transform = `translateY(-${window.scrollY * 2}px)`;
    secBtn.style.transform = `translateY(-${window.scrollY * 1.5}px)`;
    arrowDown.style.transform = `translateY(-${window.scrollY * 1.3}px)`;
    heroImg.style.opacity = (window.scrollY + 1) / 100;
  }
});

/**=================== PRICING SECTION =================== */
const pricingCards = document.querySelectorAll(".pricing .card");

pricingCards.forEach((card) => {
  card.addEventListener("click", (e) => {
    hideAllPriceCards();
    card.classList.add("price-card-toggle");
  });
});

function hideAllPriceCards() {
  pricingCards.forEach((card) => {
    card.classList.remove("price-card-toggle");
  });
}
