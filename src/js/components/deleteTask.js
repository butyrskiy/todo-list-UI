import { todo } from "../main";
import { deleteDOMElement } from "./workWithDOMElements";
import { searchTaskName, findTaskIndex } from "./smallFunction";
import { render } from "./render";

function deleteTask(e) {
  const elem = e.target;
  const deleteBtn = elem.classList.contains('btn-delete');

  if(deleteBtn) {
    const taskName = searchTaskName(elem);
    const taskIndex = findTaskIndex(taskName);

    if(taskIndex >= 0) {
      todo.splice(taskIndex, 1);
    } else {
      console.error('The task is not defined');
    }
    
    deleteDOMElement(e);

    render(todo);

    console.log(todo); //! DELETE
  }
}

export { deleteTask };