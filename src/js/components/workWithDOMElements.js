import { taskBox } from "./constants";
import { STATUS } from "./constants";

function createDOMElement(task) {
  const html = `
  <li class="task__item">
    <div class="task__item-top">
      <p class="task__item-name">${task.name}</p>
    </div>
    <div class="task__item-bottom">
      <div class="task__item-bottom-select">
        <select class="task__item-bottom-priority select" id="priority">
          <option value="Low">Low</option>
          <option value="Middle">Middle</option>
          <option value="High">High</option>
        </select>
        <select class="task__item-bottom-status select" id="status">
          <option value="Inbox">Inbox</option>
          <option value="In progress">In Progress</option>
          <option value="Pause">Pause</option>
          <option value="Done">Done</option>
        </select>
      </div>
      <div class="task__item-bottom-btn">
        <button title="Delete task" class="btn btn-delete btn-reset">
        X
        </button>
        <button title="Complete task" class="btn btn-done btn-reset" id="btn">
        V
        </button>
      </div>
    </div>
  </li>`

  taskBox.insertAdjacentHTML('afterbegin', html);
  document.getElementById('priority').value = task.priority;
  document.getElementById('status').value = task.status;

  if(task.status === STATUS.DONE) {
    document.querySelector('.task__item-name').classList.add('done');
    document.getElementById('priority').setAttribute('disabled', 'disabled');
    document.getElementById('status').setAttribute('disabled', 'disabled');
    document.querySelector('.btn-done').classList.add('btn-off');
    document.getElementById('btn').setAttribute('disabled', 'disabled');
  }
}


function deleteDOMElement(e) {
  const elem = e.target;
  const parent = elem.closest('.task__item');

  parent.remove();
}


export { createDOMElement, deleteDOMElement };