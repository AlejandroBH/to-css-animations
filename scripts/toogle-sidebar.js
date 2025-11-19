const toogleSidebar = document.getElementById("toogle-sidebar");
const sidebar = document.querySelector(".sidebar");

toogleSidebar.addEventListener("click", () => {
  sidebar.classList.toggle("collapsed");
});
