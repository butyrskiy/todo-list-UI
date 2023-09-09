import { createDOMElement } from "./workWithDOMElements";
import { taskBox } from "./constants";

function render(arr) {
  taskBox.innerHTML = '';

  arr.forEach(item => {
    createDOMElement(item.name);
  });
}

export { render };