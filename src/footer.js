import loadPage from "./loadPage";
const renderFooter = () => {
  const footer = document.createElement("footer");
  footer.textContent = `© Vesuvio 2023`;
  content.append(footer);
  return footer;
};

export default renderFooter;
