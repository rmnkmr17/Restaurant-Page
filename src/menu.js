import loadPage from "./loadPage";

const renderMenu = () => {
  const title = document.createElement("h2");
  title.textContent = "Our specialities";
  const dishes = document.createElement("ul");
  const dishOne = document.createElement("li");
  const dishTwo = document.createElement("li");
  const dishThree = document.createElement("li");
  const dishFour = document.createElement("li");

  dishOne.textContent = "Ravioli, Tortellini and Agnolotti";
  dishTwo.textContent = "Polenta";
  dishThree.textContent = "Fiorentina";
  dishFour.textContent = "Baccalà";
  content.append(title);
  dishes.append(dishOne, dishTwo, dishThree, dishFour);
  content.append(dishes);
  return content;
};

export default renderMenu;
