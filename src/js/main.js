import { form } from "./components/variebles";
import { addTask } from "./components/addTask";

const todo = [];

form.addEventListener('submit', addTask);

export { todo };