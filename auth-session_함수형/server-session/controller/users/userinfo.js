const { Users } = require('../../models');

module.exports = {
  get: async (req, res) => {

    // TODO: 세션 객체에 담긴 값의 존재 여부에 따라 응답을 구현하세요.
    // HINT: 세션 객체에 담긴 정보가 궁금하다면 req.session을 콘솔로 출력해보세요
    // console.log(req.session)

    // 세션 객체에 저장한 값이 존재하면
      //  사용자 정보를 데이터베이스에서 조회한 후 응답으로 전달한다.
    // 세션 객체에 저장한 값이 존재하지 않으면
      //  요청을 거절한다.

    
    if (!req.session.userId) {  // 세션객체에 저장한 값이 존재하지 않을 때
      res.status(400).json({message: 'not authorized'})

    } else {
      // TODO: 데이터베이스에서 로그인한 사용자의 정보를 조회한 후 응답합니다.
      // 로그인 이후 사용자 정보를 요청하는 경우 
      const userInfo = await Users.findOne({ // 조회
        where: {
          userId: req.session.userId
        }
      })
      res.json({data: userInfo, message: 'ok'})
    }
  },
};
