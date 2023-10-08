import { form, taskBox } from "./components/constants";
import { addTask } from "./components/addTask";
import { deleteTask } from "./components/deleteTask";
import { completeTask } from "./components/completeTask";
import { changePriority } from "./components/changePriority";
import { changeStatus } from "./components/changeStatus";

const todo = [];

form.addEventListener('submit', addTask);
taskBox.addEventListener('click', deleteTask);
taskBox.addEventListener('click', completeTask);
taskBox.addEventListener('change', changePriority);
taskBox.addEventListener('change', changeStatus);

export { todo };