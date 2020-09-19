const express = require('express');
const app = express();

/**
 * 루트 경로인 / 에 요청했을 때 요청 정보는 req 담겨오고,
 * 응답해야할 정보는 res 객체 안에 담아서 보내줌
 * 렌더링은 파편화된 데이터를 모아서 하나의 페이지를 만들어줌
 */
app.get('/', function (req, res) {
  // 구조 분해 할당 {a, b}
  let { a, b } = req.query;
  let result = Number(a) + Number(b);
  if (!result) res.send('result 없음');
  else res.send(result.toString());
});

app.get('/:name', (req, res) => {
  let { name } = req.params;
  res.send(name + '님 환영합니다.');
});

app.listen(9000, function () {
  console.log('server start');
});

// http://localhost:9000/?a=10&b=20
// URL
// URI /
