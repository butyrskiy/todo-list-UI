import { todo } from "../main";
import { searchTaskName, findTaskIndex } from "./smallFunction";
import { render } from "./render";

function changePriority(e) {
  const elem = e.target;
  const priorityValue = elem.value;
  const prioritySelect = elem.classList.contains('task__item-bottom-priority');

  if(prioritySelect) {
    const taskName = searchTaskName(elem);
    const taskIndex = findTaskIndex(taskName);

    todo[taskIndex].priority = priorityValue;

    render(todo);
    console.log(todo); // ! DELETE
  }
}

export { changePriority };