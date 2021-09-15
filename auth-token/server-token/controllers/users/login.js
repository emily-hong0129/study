const { Users } = require('../../models');
const jwt = require('jsonwebtoken')

module.exports = async(req, res) => {
  // TODO: urclass의 가이드를 참고하여 POST /login 구현에 필요한 로직을 작성하세요.
  // request로부터 받은 userId, password와 일치하는 유저가 DB에 존재하는지 확인
  // console.log(req.body);
  const userInfo = await Users.findOne({
    where: {
      userId: req.body.userId,
      password : req.body.password,
    },
  })
  // console.log(data);
  
  // 일치하는 유저가 없을 경우
    // 로그인 요청을 거정
  // 일치하는 유저가 있을 경우
    // 필요한 데이터를 담은 두 종류의 JWT(access, refresh)를 생성
    // 생성한 JWT를 적절한 방법으로 반환한다.
      // access token은 클라이언트에서 react state로 다루고 있다.
      // refresh token은 클라이언트의 쿠키에서 다루고 있다.
  if(!userInfo){
    res.status(400).json({message: 'not authorized'})
  }else{
    // console.log(data);
    const {id, userId, email, createdAt, updatedAt} = userInfo;
    // 토큰을 보내야함
    // option : 만료기간 7일
    const accessToken = jwt.sign({id, userId, email, createdAt, updatedAt}, process.env.ACCESS_SECRET, { expiresIn: '1d' })
    // console.log(accessToken);
    const refreshToken = jwt.sign({id, userId, email, createdAt, updatedAt}, process.env.REFRESH_SECRET, { expiresIn: '7d' })
    // console.log(refreshToken)    
    res
      .status(200)
      .cookie('refreshToken', refreshToken, {httpOnly:true, secure: true, sameSite: 'none', maxAge: 168 * 60 * 60 * 1000})
      .json({data: {accessToken}, message: 'ok'})
  }
};
