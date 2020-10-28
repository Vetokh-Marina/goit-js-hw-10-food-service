import menuEl from "./menu.json";
import templateMenu from "./template.hbs";

const refs = {
  menu: document.querySelector(".js-menu"),
  checkBox: document.querySelector(".theme-switch__toggle"),
  body: document.querySelector("body"),
};
//замена темы
const Theme = {
  LIGHT: "light-theme",
  DARK: "dark-theme",
};

//чекбокс
refs.checkBox.addEventListener("change", onChangeTheme);
setLocalTheme();

function setLocalTheme() {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark-theme") {
   refs.body.classList.add(Theme.DARK);
    refs.checkBox.checked = true;
  }
}
//функции
function createMenuCardsMarkup(menuEl) {
  return menuEl.map(templateMenu).join("");
}
//шаблонизатор
const markupMenuCards = createMenuCardsMarkup(menuEl);
refs.menu.insertAdjacentHTML("beforeend", markupMenuCards);

function onChangeTheme() {
  if (refs.checkBox.checked) {
  refs.body.classList.add(Theme.DARK);
    refs.body.classList.remove(Theme.LIGHT); 
    localStorage.setItem("theme", "dark-theme");
  } else {
    refs.body.classList.add(Theme.LIGHT);
    refs.body.classList.remove(Theme.DARK);
    localStorage.setItem("theme", "light-theme");
  }
}


