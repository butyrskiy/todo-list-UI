import { STATUS, PRIORITY } from "./constants";

class Task {
  constructor(taskName) {
    this.name = taskName;
    this.status = STATUS.INBOX;
    this.priority = PRIORITY.LOW;
  }
}

export { Task };