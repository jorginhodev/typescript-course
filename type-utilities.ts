type Todo = {
  title: string;
  description: string;
  completed: boolean;
};

// Readonly

const todo: Readonly<Todo> = {
  title: "Assistir Curso React Avançado",
  description:
    "Excelente curso que ensina React, NextJS, Strapi, Storybook, etc",
  completed: false,
};
console.log(todo);

// todo.completed = true;
// console.log(todo);

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate };
}

const todo2: Todo = updateTodo(todo, { completed: true });
console.log(todo2);

//// Pick
type TodoPreview = Pick<Todo, "title" | "completed">;

const todo3: TodoPreview = {
  title: "Zerar The Last of Us 2",
  completed: false,
};
console.log(todo3);

//// Omit
type TodoPreview2 = Omit<Todo, "description">;

const todo4: TodoPreview = {
  title: "Jogar Ghost of Tsushima",
  completed: false,
};
console.log(todo4);
