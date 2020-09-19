const express = require('express');
const app = express();
const path = require('path');

//정적파일을 제공해주는 api를 짤거에용
//정적파일 == 텍스트 이미지 ,,,

//* 미들웨어
// todo : 클라이언트가 서버로 요청 , 서버는 응답
// ? : 사용자 인증,요청받은 데이터 검사(validator),바디파싱

// 1
app.use(express.json());
// 2
app.use(express.urlencoded({ extended: true }));

//3
app.use('/public', express.static(path.join(__dirname, 'public')));
//4
app.post('/', (req, res) => {
  const data = req.body;
  console.log(data.name);
  // 디비에 유저 생성
  // 수정
  // 등등
});

// app.use('/public', express.static('public'));
//path.join ->절대경로로 바까주는거
//어플리케이션 레벨에서 미들웨어를 등록하는 메서드
//ex.카카오톡 프로필 사진 , 배너 이미지

//app이 많은 기능을 포함하고 서버를 열었따.
app.listen(9002, () => {
  console.log('서버실행중');
});
