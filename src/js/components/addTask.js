import { form, input } from "./constants";
import { todo } from "../main";
import { render } from "./render";
import { Task } from "./classes";

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
  const newTask = new Task(taskName);
  todo.push(newTask);

  console.log(todo);
}

export { addTask };