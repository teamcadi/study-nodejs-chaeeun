const mysql = require('mysql2/promise');

//(익명함수)()
(async function () {
  const pool = await mysql.createPool({
    host: 'localhost', // '127.0.0.1'
    user: 'root',
    password: 'myhome105!',
    database: 'cadi',
    waitForConnections: false,
    connectionLimit: 10
  });
  const conn1 = await pool.getConnection();
//   console.log(1);
//   conn1.release();
  const conn2 = await pool.getConnection();
//   console.log(2);
  const conn3 = await pool.getConnection();
//   console.log(3);
//   const conn4 = await pool.getConnection();
//   console.log(4);

  //   const [[row]] = await conn.query('select * from todo');

  //   console.log(row.title);
})();
