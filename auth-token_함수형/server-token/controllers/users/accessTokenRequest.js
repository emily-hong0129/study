const { Users } = require('../../models');
const jwt = require('jsonwebtoken')

module.exports = async(req, res) => {
  // TODO: urclass의 가이드를 참고하여 GET /accesstokenrequest 구현에 필요한 로직을 작성하세요.
  /*
    클라이언트가 HTTP 헤더(authorization 헤더)에 토큰을 담아 서버에게 보낸 상태
    authorization header에 담긴 토큰이 서버에서 생성한 JWT인지 확인합니다.
    서버에서 생성한 유효한 토큰일 경우, 유효하지 않은 토큰일 경우 각각 다른 응답을 반환합니다.
  */
  // console.log(req.headers.authorization);

  const reqAuth = req.headers.authorization
  // console.log(reqAuth);

  if(!reqAuth){
    res.status(400).json({
      data:null,
      message: 'invalid access token'
    })
  }else{  // 토큰 해독
    const userData = reqAuth.split(' ')[1]
    // console.log(userData);

    const decodedData = jwt.verify(userData, process.env.ACCESS_SECRET)
    // console.log('======================',decodedData);

    const userInfo = await Users.findOne({
      where: {
        id: decodedData.id
      }
    })
    // console.log(userInfo);

    // 유저정보 확인
    if(!userInfo){
      res.status(400).json({data: null, message: 'invalid access token'})
    }else{
      const {id, userId, email, createdAt, updatedAt} = userInfo
      
      res.json({
        data: {userInfo: {id, userId, email, createdAt, updatedAt}},
        message: 'ok'
      })
    }
  }
};
