import { todo } from "../main";
import { deleteDOMElement } from "./workWithDOMElements";
import { findTaskIndex } from "./smallFunction";
import { render } from "./render";

function deleteTask(e) {
  const elem = e.target;
  const parent = elem.closest('.task__item-bottom');
  const prevElemSibling = parent.previousElementSibling;
  const firstElemChild = prevElemSibling.firstElementChild;
  const taskName = firstElemChild.textContent;
  const task = findTaskIndex(taskName);
  
  deleteDOMElement(e);

  if(typeof(task) === 'number') {
    todo.splice(task, 1);
  } else {
    console.error(task);
  }

  render(todo);
}


export { deleteTask };