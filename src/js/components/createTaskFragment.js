const taskListBox = document.querySelector('.task-list__box');

function createTaskFragment(taskName) {
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
  
  taskListBox.insertAdjacentHTML('afterbegin', html);
}

export { createTaskFragment };