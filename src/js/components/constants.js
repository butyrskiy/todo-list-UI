export { STATUS, PRIORITY, input, form, taskBox, deleteBtn, doneBtn };

const STATUS = {
  'INBOX': 'Inbox',
  'IN_PROGRESS': 'In progress',
  'PAUSE': 'Pause',
  'DONE': 'Done'
}

const PRIORITY = {
  'HIGH': 'High',
  'MIDDLE': 'Middle',
  'LOW': 'Low'
}

const input = document.querySelector('.add-task__input');
const form = document.querySelector('.add-task__form');
const taskBox = document.querySelector('.task-list__box');
const deleteBtn = document.querySelector('.btn-delete');
const doneBtn = document.querySelector('.btn-done');