/**
 * @user {id: number, email: string, password: string, name: string}
 */
// 유저 더미데이터
const users = [
  { id: 1, title: '안녕하세요 재가봉사 모집합니다', nor: '11', dov: '2020-10-01', tov: '11:00:00' },
  { id: 2, title: '안녕하세요 재가봉사 모집합니다', nor: '12', dov: '2020-10-02', tov: '12:00:00' },
  { id: 3, title: '안녕하세요 재가봉사 모집합니다', nor: '13', dov: '2020-10-03', tov: '13:00:00' },
  { id: 4, title: '안녕하세요 재가봉사 모집합니다', nor: '14', dov: '2020-10-04', tov: '14:00:00' },
  { id: 5, title: '안녕하세요 재가봉사 모집합니다', nor: '15', dov: '2020-10-05', tov: '15:00:00' },
  { id: 6, title: '안녕하세요 재가봉사 모집합니다', nor: '16', dov: '2020-10-06', tov: '16:00:00' },
];

// 유저 하나 조회하기 (아이디)
const getUser = (userId) => users.find((user) => user.id === userId);

// 유저 하나 조회하기 (이메일)
const getUserByEmail = (email) => users.find((user) => user.email === email);

module.exports = {
  users,
  getUser,
  getUserByEmail,
};
