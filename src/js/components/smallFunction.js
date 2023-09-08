import { todo } from "../main";

function findTaskIndex(taskName) {
  return todo.findIndex(item => item.name === taskName);
}

export { findTaskIndex };