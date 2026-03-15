// ===============================
// Initial Task Data
// ===============================
const initialTasks = [
  {
    id: 1,
    title: "Launch Epic Career 🚀",
    description: "Create a killer Resume",
    status: "todo",
  },
  {
    id: 2,
    title: "Master JavaScript 💛",
    description: "Get comfortable with the fundamentals",
    status: "doing",
  },
  {
    id: 3,
    title: "Never give up 🏆",
    description: "You're almost there",
    status: "doing",
  },
  {
    id: 4,
    title: "Learn Data Structures 📚",
    description: "Study algorithms and problem solving",
    status: "todo",
  },
  {
    id: 5,
    title: "Build Portfolio 🛠️",
    description: "Create projects to showcase your skills",
    status: "done",
  },
];
// ===============================
// DOM ELEMENTS
// ===============================
const todoColumn = document.getElementById("todo-column");
const doingColumn = document.getElementById("doing-column");
const doneColumn = document.getElementById("done-column");

const modal = document.getElementById("task-modal");
const closeModalBtn = document.getElementById("close-modal-btn");

const titleInput = document.getElementById("task-title");
const descInput = document.getElementById("task-desc");
const statusSelect = document.getElementById("task-status");

// ===============================
// CLEAR HARDCODED CARDS
// ===============================

function clearExistingCards() {
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => card.remove());
}

// ===============================
// CREATE TASK CARD
// ===============================

/**
 * Creates a DOM element representing a task card.
 * @param {Object} task - Task object from initialTasks
 * @returns {HTMLElement} Task card element
 */
function createTaskCard(task) {
  const card = document.createElement("div");
  card.classList.add("card");
  card.textContent = task.title;

  card.addEventListener("click", () => {
    openTaskModal(task);
  });

  return card;
}
// ===============================
// RENDER TASKS
// ===============================
/**
 * Inserts tasks into their correct columns depending on status.
 */
function renderTasks() {
  initialTasks.forEach((task) => {
    const card = createTaskCard(task);

    if (task.status === "todo") {
      todoColumn.appendChild(card);
    } else if (task.status === "doing") {
      doingColumn.appendChild(card);
    } else if (task.status === "done") {
      doneColumn.appendChild(card);
    }
  });
}

// ===============================
// OPEN MODAL
// ===============================

/**
 * Opens the modal and fills it with
 * the selected task's data.
 * @param {Object} task - The clicked task
 */
function openTaskModal(task) {
  titleInput.value = task.title;
  descInput.value = task.description;
  statusSelect.value = task.status;

  modal.showModal();
}

// ===============================
// CLOSE MODAL
// ===============================

/**
 * Closes the task modal.
 */
function closeModal() {
  modal.close();
}

closeModalBtn.addEventListener("click", closeModal);

// ===============================
// INITIALIZE
// ===============================

function init() {
  clearExistingCards();
  renderTasks();
}
init();
