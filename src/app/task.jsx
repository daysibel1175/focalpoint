// tasks.js

const tasksKey = 'tasks';



export const createTask = (task) => {
  const tasks = getTasks();
  tasks.push(task);
  localStorage.setItem(tasksKey, JSON.stringify(tasks));
};

export const getTasks = () => {
  const storedTasks = localStorage.getItem(tasksKey);
  return storedTasks ? JSON.parse(storedTasks) : []; console.log(hola)
};


export const deleteTask = (taskId) => {
  const tasks = getTasks();
  const updatedTasks = tasks.filter((task) => task.id !== taskId);
  localStorage.setItem(tasksKey, JSON.stringify(updatedTasks));
};

export const toggleTaskCompletion = (taskId) => {
  const tasks = getTasks();
  const updatedTasks = tasks.map((task) =>
    task.id === taskId ? { ...task, completed: !task.completed } : task
  );
  localStorage.setItem(tasksKey, JSON.stringify(updatedTasks));
};