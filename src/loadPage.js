const loadPage = () => {
  const content = document.querySelector("#content");
  const headline = document.createElement("h1");
  const p = document.createElement("p");
  const footer = document.createElement("footer");
  headline.textContent = "Vesuvio";
  p.textContent = "Italian food, at its very best.";
  footer.textContent = `© Vesuvio 2023`;
  content.append(headline);
  content.append(p);
  content.append(footer);
  return content;
};
export default loadPage;
