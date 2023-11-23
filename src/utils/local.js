let array_todos = [
  {
    id: 1,
    title: "Web Portofolio Continuation",
    description: "Menghias CV masing masing dengan CSS",
    createdAt: "2023-10-25",
  },
  {
    id: 2,
    title: "Mengerjakan course codeCademy",
    description:
      "Selesaikan course pada url https://www.codecademy.com/enrolled/courses/learn-css",
    createdAt: "2023-11-05",
  },
  {
    id: 3,
    title: "Individual Project - Server Side",
    description: "membuat Server (BE) dari suatu Aplikasi dengan tema Bebas",
    createdAt: "2023-11-08",
  },
  {
    id: 4,
    title: "Selesaikan LMS",
    description: "Mempelajari materi pada LMS Vocasia week 13",
    createdAt: "2023-11-12",
  },
];

function getTodos() {
  return array_todos;
}

function deleteTodos(deleted_index) {
  array_todos = array_todos.filter((todo, index) => index !== deleted_index);
}

function addTodo(todo) {
  array_todos = [...array_todos, todo];
}

export { getTodos, deleteTodos, addTodo };
