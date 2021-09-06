const { Users } = require('../../models');

module.exports = {
  get: async (req, res) => {

    // TODO: 세션 객체에 담긴 값의 존재 여부에 따라 응답을 구현하세요.
    // HINT: 세션 객체에 담긴 정보가 궁금하다면 req.session을 콘솔로 출력해보세요
    // console.log(req.session)
    // console.log('--------',req.session.userId)
    // console.log('--------',!req.session.userId)

    if (!req.session.userId) {  // 유효하지 않은 값
      // your code here
      res.status(400).json({message: 'not authorized'})
    } else {  // 값이 있을때
      // your code here
      // TODO: 데이터베이스에서 로그인한 사용자의 정보를 조회한 후 응답합니다.
      const result = await Users.findOne({
        where: { userId: req.session.userId}
      })
      res.status(200).json({message: 'ok'})
    }
  },
};
