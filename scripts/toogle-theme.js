const toogleThemeBtn = document.querySelector("[toogleTheme]");
const theme = document.querySelector("[data-theme]");

toogleThemeBtn.addEventListener("click", () => {
  const currentTheme = theme.getAttribute("data-theme");
  const currentIcon = toogleThemeBtn.children[0];

  if (currentTheme === "dark") {
    theme.setAttribute("data-theme", "light");
    currentIcon.setAttribute("class", "fa-solid fa-sun");
  } else {
    theme.setAttribute("data-theme", "dark");
    currentIcon.setAttribute("class", "fa-solid fa-moon");
  }
});
