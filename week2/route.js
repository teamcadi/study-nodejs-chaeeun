const router = require('express').Router();

const users = [
  {
    id: '1',
    name: '채은',
    password: '0000',
    nickname: 'ㅊㅇ',
  },
  {
    id: '2',
    name: '태호',
    password: '0000',
    nickname: 'ㅌㅎ',
  },
  {
    id: '3',
    name: '태우',
    password: '0000',
    nickname: 'ㅌㅇ',
  },
  {
    id: '4',
    name: '해미',
    password: '0000',
    nickname: 'ㅎㅁ',
  },
  {
    id: '5',
    name: '태영',
    password: '0000',
    nickname: 'ㅌㅇ',
  },
];

/**
 * @description 유저들 조회
 * @route GET /
 */

router.get('/', (req, res, next) => {
  const members = users;
  res.status(200).json(members);
});

/**
 * @description 유저가입
 * @route POST /
 * @request @body {name, password, nickname}
 */

router.post('/', function (req, res, nest) {
    
  console.log(req.body);
  const { name, password, nickname } = req.body;
  const lastId = users[users.length - 1].id; // 5
  const userId = Number(lastId) + 1 + '';
  const user = { id: userId, name, password, nickname };
  users.push(user);
  res.status(201).json({ success: true, message: '가입성공' });
});

// router.use();
// router.patch();
// router.put();

module.exports = router;
