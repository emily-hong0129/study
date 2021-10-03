// 회원가입 요청 (모든 필드 필요)
const { user } = require('../../models');
const jwt = require('jsonwebtoken')

module.exports = async(req, res) => {
  // TODO : 회원가입 로직 및 유저 생성 로직 작성
  // 회원가입 전 email이 중복되는지 확인
  const userInfo = await user.findOne({
    where: {
      email: req.body.email
    }
  })

  if(userInfo){ // 이메일 중복될때
    return res.status(409).send("email exists")

  }else{  // 사용가능한 이메일
    const {email, password, username, mobile} = req.body
    // username, email, password, or mobile 파라미터가 없을경우 (422)
    if(eamil === '' || password === '' || username === '' || mobile === ''){
      res.status(422).json("insufficient parameters supplied")
    }else{  // 있을 경우(201)
      // 토큰 생성
      const newAccessToken = jwt.sign({id, email, mobile, createdAt, updatedAt}, process.env.ACCESS_SECRET, {expiresIn: '1h'})
      const newRefreshToken = jwt.sign({id, email, mobile, createdAt, updatedAt}, process.env.REFRESH_SECRET, {expiresIn: '1d'})

      res
        .status(201)
        .cookie('refreshToken', newRefreshToken, {httpOnly: true, secure: true, sameSite: 'none', maxAge: 30000})
        .json({data:{newAccessToken}, message: '회원가입 성공'})

    }
  }

}
