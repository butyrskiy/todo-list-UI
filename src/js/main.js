import { form, taskBox } from "./components/constants";
import { addTask } from "./components/addTask";
import { deleteTask } from "./components/deleteTask";

const todo = [];

form.addEventListener('submit', addTask);
taskBox.addEventListener('click', deleteTask);


export { todo };