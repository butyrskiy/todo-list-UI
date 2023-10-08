import { todo } from "../main";

function searchTaskName(elem) {
  const parent = elem.closest('.task__item-bottom');
  const prevElemSibling = parent.previousElementSibling;
  const firstElemChild = prevElemSibling.firstElementChild;
  const taskName = firstElemChild.textContent;

  return taskName;
}

function searchTaskNode(elem) {
  const parent = elem.closest('.task__item-bottom');
  const prevElemSibling = parent.previousElementSibling;
  const taskNode = prevElemSibling.firstElementChild;

  return taskNode;
}

function findTaskIndex(taskName) {
  return todo.findIndex(item => item.name === taskName);
}

export { searchTaskName, findTaskIndex, searchTaskNode };