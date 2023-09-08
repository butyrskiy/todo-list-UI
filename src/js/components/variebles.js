export { STATUS, PRIORITY, form, input};

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

const form = document.querySelector('.add-task__form');
const input = document.querySelector('.add-task__input');