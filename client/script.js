const pokiContainer = document.querySelector(".poki-container");

// The template elem.
const pokiBoxTemplate = document.querySelector("#poki-template");
// clone the inner contents of the template to reuse it.
const templateContent = pokiBoxTemplate.content;


function updateElem(value) {
  const newItem = templateContent.cloneNode(true);
  newItem.querySelector("span").textContent = value;
  pokiContainer.appendChild(newItem);
}

const pokiResults = fetch("https://pokeapi.co/api/v2/type/")
  .then((response) => response.json())
  .then((result) => {
    const vals = result.results;
    vals.forEach((elem) => {
        console.log(elem, elem.name);
      updateElem(elem.name);
    });
  })
  .catch((err) => {
    console.error(err);
  });
