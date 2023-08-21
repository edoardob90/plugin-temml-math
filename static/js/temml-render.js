// Select all the elements inside a <math> tag
var mathElements = document.getElementsByTagName("math");

// Render all the math elements
for (let mathElem of mathElements) {
  const texToRender = mathElem.textContent;
  const displayMode = mathElem.classList.contains("display");
  // temml.render(texToRender, mathElem, { displayMode });
  const mathText = temml.renderToString(texToRender, { displayMode });
  mathElem.parentElement.innerHTML = mathText;
}
