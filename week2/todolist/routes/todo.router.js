const router = require('express').Router();
const { getTodos, addTodo, removeTodo, toggleTodo } = require('../controllers/todocontroller');
// *-----------router 미들웨어 ---------*
router.use((req, res, next) => {
  console.log('todo라우터 접근');
  next();
});
// *------------------------------------*

function todocontroller(req, res, next) {}

/**
 * @description todo 모두 조회
 * @route GET / todo /
 */

router.get('/', getTodos);

/**
 * @description todo 생성
 * @route POST / todo /
 * @request @body {title , completed , date}
 */

router.post('/', addTodo);

/**
 * @description todo 삭제
 * @route DELETE / todo /:id
 */

router.delete('/:id', removeTodo);

/**
 * @description todo fin(토글 동작)
 * @route PATCH / todo / :id
 */

router.patch('/:id', toggleTodo);

module.exports = router;
