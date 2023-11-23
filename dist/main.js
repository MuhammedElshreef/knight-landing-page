var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  effect: "fade",
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

let prevScrollPos = window.pageYOffset;
let scrollToTopBtn = document.getElementById("scroll-to-top-btn");

window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;

  // Determine the scroll direction
  if (window.scrollY >= 700) {
    if (prevScrollPos > currentScrollPos) {
      // Scrolling up, show the navbar
      document.getElementById("navBar").classList.remove("animate__slideOutUp");
      document.getElementById("navBar").classList.add("animate__slideInDown");
    } else {
      // Scrolling down, hide the navbar

      document
        .getElementById("navBar")
        .classList.remove("animate__slideInDown");
      document.getElementById("navBar").classList.add("animate__slideOutUp");
    }
    prevScrollPos = currentScrollPos;
  }

  if (window.scrollY > 700) {
    scrollToTopBtn.classList.remove("hidden");
    scrollToTopBtn.classList.remove("animate__fadeOutRight");
    scrollToTopBtn.classList.add("animate__fadeInRight");
  } else {
    scrollToTopBtn.classList.remove("animate__fadeInRight");
    scrollToTopBtn.classList.add("animate__fadeOutRight");
  }

  isElemntInView();
};
scrollToTopBtn.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
// animations for sections

function isElemntInView() {
  const featuresGrid = document.getElementById("features-grid");
  const featuresFooter = document.getElementById("features-footer");
  const pricingSection = document.getElementById("pricing");
  const pricingCover = document.getElementById("pricing-cover");
  const faqSection = document.getElementById("faq");
  const blogSection = document.getElementById("blog");
  const footerSection = document.getElementById("footer");
  var featuresGridPosition = featuresGrid.getBoundingClientRect();
  var featuresFooterPosition = featuresFooter.getBoundingClientRect();
  var pricingPosition = pricingSection.getBoundingClientRect();
  var pricingCoverPosition = pricingCover.getBoundingClientRect();
  var faqPosition = faqSection.getBoundingClientRect();
  var blogPosition = blogSection.getBoundingClientRect();
  var footerPosition = footerSection.getBoundingClientRect();

  // checking for partial visibility

  if (
    featuresGridPosition.top < window.innerHeight &&
    featuresGridPosition.bottom >= 0
  ) {
    featuresGrid.classList.add("animate__fadeIn");
  }
  if (
    featuresFooterPosition.top < window.innerHeight &&
    featuresFooterPosition.bottom >= 0
  ) {
    featuresFooter.classList.add("animate__fadeIn");
  }
  if (pricingPosition.top < window.innerHeight && pricingPosition.bottom >= 0) {
    pricingSection.classList.add("animate__fadeIn");
  }
  if (
    pricingCoverPosition.top < window.innerHeight &&
    pricingCoverPosition.bottom >= 0
  ) {
    pricingCover.classList.add("animate__fadeIn");
  }
  if (faqPosition.top < window.innerHeight && faqPosition.bottom >= 0) {
    faqSection.classList.add("animate__fadeIn");
  }

  if (blogPosition.top < window.innerHeight && blogPosition.bottom >= 0) {
    blogSection.classList.add("animate__fadeIn");
  }
  if (footerPosition.top < window.innerHeight && footerPosition.bottom >= 0) {
    footerSection.classList.add("animate__fadeIn");
  }
}

const hamBurgerCheckBox = document.getElementById("hamburger-checkbox");
const hamburgerMenu = document.getElementById("hamburger-menu");
const hamburgerMenuUl =
  document.getElementById("hamburger-menu").firstElementChild;
hamBurgerCheckBox.addEventListener("change", () => {
  if (hamBurgerCheckBox.checked) {
    hamburgerMenuUl.classList.remove("animate__slideOutRight");

    hamburgerMenuUl.classList.add("animate__slideInLeft");
    hamburgerMenu.classList.remove("hidden");
  } else {
    hamburgerMenuUl.classList.add("animate__slideOutRight");
    setTimeout(() => {
      hamburgerMenu.classList.add("hidden");
    }, 500);
  }
});
