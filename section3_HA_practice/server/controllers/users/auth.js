// 사용자 정보 조회, 인증에 따라 권한이 부여되며, 본인의 정보만 조회 가능함
const { user } = require('../../models');
const jwt = require('jsonwebtoken')

module.exports = {
  accessToken : async(req, res) => {
    
  },

  refreshToken: async(req, res) => {

  }
}