// navigation
function scrollHeaders() {
  const headers = document.getElementById("navigation");
  this.scrollY >= 40
    ? headers.classList.add("active")
    : headers.classList.remove("active");
}

window.addEventListener("scroll", scrollHeaders);
// scrolltop-btn
const navLinks = document.querySelectorAll(".navbar_link");
const secs = document.querySelectorAll("section");
const scroll_up = document.querySelector(".scroll-top");

const removeActive = () => {
  navLinks.forEach((nav) => {
    nav.classList.remove("navlink_active");
  });
};

document.querySelector(".navbar-nav").addEventListener("click", (e) => {
  const navLink = e.target.closest(".nav-link");
  removeActive();
  navLink.classList.add("navlink_active");
});

window.onscroll = () => {
  secs.forEach((sec) => {
    let top = window.scrollY;
    let offsetTop = sec.offsetTop - 150;
    let offsetHeight = sec.offsetHeight;
    const id = sec.getAttribute("id");

    if (top >= offsetTop && top < offsetTop + offsetHeight) {
      id === "home"
        ? scroll_up.classList.remove("active")
        : scroll_up.classList.add("active");
        removeActive();
              document
                .querySelector(`.navbar_link[href*='${id}']`)
                .classList.add("navlink_active");
    }
  });
};

//navbar active
// const navLinks = document.querySelectorAll(".navbar_link");

// const removeActive = () => {
//   navLinks.forEach((nav) => {
//     nav.classList.remove("navlink_active");
//   });
// };

// document.querySelector(".navbar-nav").addEventListener("click", (e) => {
//   const navLink = e.target.closest(".nav-link");
//   removeActive();
//   navLink.classList.add("navlink_active");
// });

// window.onscroll = () => {
//   secs.forEach((sec) => {
//     let top = window.scrollY;
//     let offsetTop = sec.offsetTop - 150;
//     let offsetHeight = sec.offsetHeight;
//     const id = sec.getAttribute("id");

//     if (top >= offsetTop && top < offsetTop + offsetHeight) {
//       removeActive();
//       document
//         .querySelector(`.navbar_link[href*='${id}']`)
//         .classList.add("navlink_active");
//     }
//   });
// };