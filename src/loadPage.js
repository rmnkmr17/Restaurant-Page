const loadPage = () => {
  const content = document.querySelector("#content");
  const headline = document.createElement("h1");
  const p = document.createElement("p");
  headline.textContent = "Vesuvio";
  p.textContent = "Italian food, at its very best.";
  content.append(headline);
  content.append(p);
  return content;
};

export default loadPage;
