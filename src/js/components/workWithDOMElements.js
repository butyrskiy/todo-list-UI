import { taskBox } from "./constants";

function createDOMElement(taskName) {
  const html = `
  <li class="task__item">
    <div class="task__item-top">
      <p class="task__item-name">${taskName}</p>
    </div>
    <div class="task__item-bottom">
      <div>
        <select class="task__item-bottom-priority">
          <option value="low">Low</option>
          <option value="middle">Middle</option>
          <option value="high">High</option>
        </select>
        <select class="task__item-bottom-status">
          <option value="inbox">Inbox</option>
          <option value="In progress">In Progress</option>
          <option value="Pause">Pause</option>
          <option value="Done">Done</option>
        </select>
      </div>
      <div class="task__item-bottom-btn">
        <button title="Delete task" class="btn btn-delete btn-reset">
        X
        </button>
        <button title="Complete task" class="btn btn-done btn-reset">
        V
        </button>
      </div>
    </div>
  </li>`
  
  taskBox.insertAdjacentHTML('afterbegin', html);
}

function deleteDOMElement(e) {
  if(e.target.className === 'btn btn-delete btn-reset') {
    const elem = e.target;
    const parent = elem.closest('.task__item');

    parent.remove();
  }
}

export { createDOMElement, deleteDOMElement };