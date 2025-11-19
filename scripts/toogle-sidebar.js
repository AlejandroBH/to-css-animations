const toogleSidebar = document.querySelectorAll("[toogleSidebar]");
const sidebar = document.querySelector(".sidebar");

toogleSidebar.forEach((element) => {
  element.addEventListener("click", () => {
    sidebar.classList.toggle("collapsed");
  });
});
