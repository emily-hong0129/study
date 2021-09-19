const { Users } = require('../../models');
const jwt = require('jsonwebtoken')

module.exports = async(req, res) => {
  // TODO: urclass의 가이드를 참고하여 GET /refreshtokenrequest 구현에 필요한 로직을 작성하세요.
  /*
    요청에 담긴 refresh token이 유효하다면 새로운 access token을 발급해줌과 동시에 유저가 요청한 정보를 반환합니다.
    요청에 담긴 refresh token이 유효하지 않거나, 조작된 토큰일 경우 각각 다른 응답을 반환합니다.
  */

  // console.log(req.cookies);
  // console.log('================ refreshToken ================= : ', req.cookies.refreshToken);
  const refresh = req.cookies.refreshToken;

  // 쿠키에 리프레쉬 토큰이 없는 경우
  if(!refresh){
    res.status(400).json({
      data: null,
      message: 'refresh token not provided'
    })

  }

  // 유효하지 않은 리프레쉬 토큰을 전달받은 경우
  if(refresh === 'invalidtoken'){
    res.status(400).json({
      data: null,
      message: 'invalid refresh token, please log in again'
    })

  }else{  // 유효한 리프레쉬 토큰을 전달받은 경우
    const decodedData = jwt.verify(refresh, process.env.REFRESH_SECRET)
    // console.log('================= Refresh_Secret ================= : ',process.env.REFRESH_SECRET);
    // console.log(decodedData);


    const userInfo = await Users.findOne({
      where: {
        id: decodedData.id,
        userId: decodedData.userId,
        email: decodedData.email,
        createdAt: decodedData.createdAt,
        updatedAt: decodedData.updatedAt
      }
    })

    const {id, userId, email, createdAt, updatedAt} = userInfo
    const accessToken = jwt.sign({id, userId, email, createdAt, updatedAt}, process.env.ACCESS_SECRET)

    res.json({
      data: {accessToken, userInfo: {id, userId, email, createdAt, updatedAt}},
      accessToken,
      message: 'ok'
    })
  }

};
