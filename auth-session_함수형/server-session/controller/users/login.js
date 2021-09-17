// 해당 모델의 인스턴스를 models/index.js에서 가져옵니다.
const { Users } = require('../../models');

module.exports = {
  post: async (req, res) => {
    // userInfo는 유저정보가 데이터베이스에 존재하고, 완벽히 일치하는 경우에만 데이터가 존재합니다.
    // 만약 userInfo가 NULL 혹은 빈 객체라면 전달받은 유저정보가 데이터베이스에 존재하는지 확인해 보세요
    // console.log(req.body);
    const userInfo = await Users.findOne({
      where: { userId: req.body.userId, password: req.body.password },
    });

    // console.log(userInfo);

    // index.js 세션설정필요
    
    // TODO: userInfo 결과 존재 여부에 따라 응답을 구현하세요.
    // 결과가 존재하는 경우 세션 객체에 userId가 저장되어야 합니다.
    if (!userInfo) {  // 일치안할때
      // your code here
      res.status(400).json({data: null , message: `not authorized`})

    } else {  // 알치할때
      // your code here
      // HINT: req.session을 사용하세요.
      // 세션에 userId 저장
      req.session.userId = userInfo.userId
      res.status(200).json({data: userInfo, message: 'asdfasdfasdfads'})
    }
  }
}