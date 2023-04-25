import createNavBar from "./navBar";
import loadPage from "./loadPage";
import renderFooter from "./footer";
import renderMenu from "./menu";

createNavBar();
loadPage();
renderFooter();

const selectTab = () => {
  const tabs = document.querySelectorAll("a");
  tabs.forEach((tab) => {
    tab.addEventListener("click", (e) => {
      if (e.target.textContent === "Home") {
        content.innerHTML = "";
        createNavBar();
        loadPage();
        renderFooter();
        selectTab();
        console.log("ok");
      }
      if (e.target.textContent === "Menu") {
        content.innerHTML = "";
        createNavBar();
        renderMenu();
        renderFooter();
        selectTab();
      }
    });
  });
};
selectTab();
