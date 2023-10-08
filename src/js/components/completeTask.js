import { todo } from "../main";
import { render } from "./render";
import { searchTaskName, findTaskIndex } from "./smallFunction";
import { STATUS } from "./constants";

function completeTask(e) {
  const elem = e.target;
  const doneBtn = elem.classList.contains('btn-done');

  if(doneBtn) {
    const taskName = searchTaskName(elem);
    const taskIndex = findTaskIndex(taskName);

    todo[taskIndex].status = STATUS.DONE;

    render(todo);
    console.log(todo); // ! DELETE
  }
}



export { completeTask };