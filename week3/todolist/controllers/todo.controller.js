const { getConn } = require('../database/pool');

module.exports = {
  getTodo: async (req, res, next) => {
    console.log('왜이래ㅠㅠ');
    let conn;
    try {
      conn = await getConn();
      const [rows] = await conn.query('select * from todo');
      res.json(rows);
    } catch (getTodoErr) {
      if (conn) conn.release();
      next(getTodoErr);
    }
  },
  addTodo: async (req, res, next) => {},
  removeTodo: async (req, res, next) => {},
  modifyTodo: async (req, res, next) => {},
  isCompleted: async (req, res, next) => {},
};
