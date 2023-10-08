import { createDOMElement } from "./workWithDOMElements";
import { taskBox } from "./constants";

function render(todo) {
  taskBox.innerHTML = '';

  todo.forEach(task => {
    createDOMElement(task);
  });
}

export { render };