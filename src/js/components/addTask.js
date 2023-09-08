import { createDOMElement } from "./workWithDOMElements";
import { STATUS, PRIORITY, form, input } from "./constants";
import { todo } from "../main";

function addTask(e) {
  e.preventDefault();

  const taskName = input.value;

  if(taskName === '') {
    console.error('Enter the name of task!');
  } else {
    createDOMElement(taskName);
    addTaskToArray(taskName);

    form.reset();
    console.log(todo); //! DELETE
  }
}

function addTaskToArray(taskName) {
  todo.push({
    name: taskName,
    status: STATUS.INBOX,
    priority: PRIORITY.LOW,
    id: Date.now(),
  });
}

export { addTask };