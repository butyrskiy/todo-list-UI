import { todo } from "../main";
import { searchTaskName, findTaskIndex } from "./smallFunction";
import { render } from "./render";

function changeStatus(e) {
  const elem = e.target;
  const statusValue = elem.value;
  const statusSelect = elem.classList.contains('task__item-bottom-status');

  if(statusSelect) {
    const taskName = searchTaskName(elem);
    const taskIndex = findTaskIndex(taskName);

    todo[taskIndex].status = statusValue;
    
    render(todo);
    console.log(todo); // ! DELETE
  }
}

export { changeStatus };