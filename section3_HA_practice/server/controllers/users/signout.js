// 로그아웃 요청
const { user } = require('../../models');
const jwt = require('jsonwebtoken')

module.exports = async(req, res) => {
  const userInfo = await user.findOne({
    where: {
      userId: req.body.userId,
      password: req.body.password
    }
  })

  if(!userInfo){
    res.status(400).json({message: 'not authorized'})
  }

  // 토큰 삭제

  res.json('ok')

}
