import loadPage from "./loadPage";
const createNavBar = () => {
  const navBar = document.createElement("div");
  navBar.classList.add("nav-bar");
  const home = document.createElement("a");
  const menu = document.createElement("a");
  const about = document.createElement("a");

  home.textContent = "Home";
  menu.textContent = "Menu";
  about.textContent = "About";

  //   home.href = "../src/home.js";
  //   menu.href = "./menu.js";
  //   about.href = "./about.js";

  navBar.append(home);
  navBar.append(menu);
  navBar.append(about);
  content.append(navBar);
  return navBar;
};

export default createNavBar;
