const { Users } = require('../../models');
const jwt = require('jsonwebtoken')

module.exports = async(req, res) => {
  // TODO: urclass의 가이드를 참고하여 GET /accesstokenrequest 구현에 필요한 로직을 작성하세요.
  //authorization header에 담긴 토큰이 서버에서 생성한 JWT인지 확인합니다.
    // 서버에서 생성한 유효한 토큰일 경우, 유효하지 않은 토큰일 경우 각각 다른 응답을 반환합니다.
  // console.log(req.headers.authorization)
  const reqAuth = req.headers.authorization
  
  // 헤더 authorization 부분이 없는 요청 또는 잘못돤 토큰을 전달받은 경우
  if(!reqAuth){
    res.status(400).json({data:null, message: 'invalid access token'})
  }else{  // jwt 토큰이 존재하며 토큰에 유저정보가 담겨져 있는 경우, 해당 유저 정보를 리턴해야한다.
    // Bearer 없애기
    const userData = reqAuth.split(' ')[1]
    // console.log(userData);

    // 복호화
    const decodedUserData = jwt.verify(userData, process.env.ACCESS_SECRET)
    // console.log(decodedUserData);
    // userId로 이용
    const userInfo = await Users.findOne({
      where: {
        id: decodedUserData.id
      }
    })
    // console.log(userInfo);

    // 유저정보가 존재하는지 확인
    if(!userInfo){
      res.status(400)
    }else{  // 유저정보 있을 때
      const {id, userId, email, createdAt, updatedAt} = userInfo
      res
        .status(200)
        .json({
          data: {userInfo: {id, userId, email, createdAt, updatedAt}},
          message: 'ok'
        })
    }
  }
};
