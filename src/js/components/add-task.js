import { createTaskFragment } from "./createTaskFragment";

const form = document.querySelector('.add-task__form');
const input = document.querySelector('.add-task__input');

function addTask(e) {
  e.preventDefault();

  createTaskFragment(input.value);

  input.value = '';
}

form.addEventListener('submit', addTask);