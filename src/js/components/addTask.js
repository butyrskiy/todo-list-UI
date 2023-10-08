import { createDOMElement } from "./workWithDOMElements";
import { STATUS, PRIORITY, form, input } from "./constants";
import { todo } from "../main";
import { render } from "./render";

function addTask(e) {
  e.preventDefault();

  const taskName = input.value;

  try {
    if(taskName === '' || taskName.length > 30) {
      throw new Error('Task length name not valid!');
    } else {
      addTaskToArray(taskName);
      render(todo);
      form.reset();
    }
  } catch (error) {
    console.log(error.message);
  }
}

function addTaskToArray(taskName) {
  todo.push({
    name: taskName,
    status: STATUS.INBOX,
    priority: PRIORITY.LOW,
  });
  console.log(todo); // ! DELETE
}

export { addTask };