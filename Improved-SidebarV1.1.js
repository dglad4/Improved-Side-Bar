/*put this at bottom of body - <script src="package-V1.1/Improved-SidebarV1.1.js"></script>*/

const menuBtn = document.querySelector(".menu-btn");
const sideBar = document.querySelector(".modal.sidebar");
const closeBtn = document.querySelector(".close-button");
const overlay = document.querySelector(".overlay");

let menuOpen = false;

menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    sideBar.classList.add("open");
    overlay.classList.add("open");
    menuOpen = true;
  } else {
    menuBtn.classList.remove("open");
    sideBar.classList.remove("open");
    menuOpen = false;
  }
});

closeBtn.addEventListener("click", () => {
  menuBtn.classList.remove("open");
  sideBar.classList.remove("open");
  overlay.classList.remove("open");
  menuOpen = false;
});

overlay.addEventListener("click", () => {
  menuBtn.classList.remove("open");
  sideBar.classList.remove("open");
  overlay.classList.remove("open");
  menuOpen = false;
});
