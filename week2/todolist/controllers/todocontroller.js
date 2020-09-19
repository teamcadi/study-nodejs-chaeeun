const todos = require('../database/todo');

module.exports = {
  getTodos: (req, res, next) => {
    const todoList = todos;
    res.status(200).json(todoList);
    console.log('todolist 조회');
  },
  addTodo: (req, res, next) => {
    const { title } = req.body;
    const newId = todos[todos.length - 1].id + 1;
    const newTodo = {
      id: newId,
      title,
      date: new Date().getDate(),
      completed: false,
    };
    todos.push(newTodo);
    res.status(201).json({ success: true });
  },
  removeTodo: (req, res, next) => {
    //req.params;
    const id = req.params.id;
    const newTodo = todos.filter((element) => element.id != id);
    todos = newTodo;
    res.status(200).json({ success: true });
  },
  toggleTodo: (req, res, next) => {
    //req.params;
    const { id } = req.params;
    todos.forEach((element) => {
      if (element.id == id) element.completed = !element.completed;
    });
    res.status(200).json({ success: true });
  },
};
