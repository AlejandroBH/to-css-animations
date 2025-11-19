const toogleSidebarBtn = document.querySelectorAll("[toogleSidebar]");
const sidebar = document.querySelector(".sidebar");

toogleSidebarBtn.forEach((element) => {
  element.addEventListener("click", () => {
    sidebar.classList.toggle("collapsed");
  });
});
