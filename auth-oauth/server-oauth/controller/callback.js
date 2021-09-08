require('dotenv').config();

const clientID = process.env.GITHUB_CLIENT_ID;
const clientSecret = process.env.GITHUB_CLIENT_SECRET;
const axios = require('axios');

module.exports = (req, res) => {
  // req의 body로 authorization code가 들어옵니다. console.log를 통해 서버의 터미널창에서 확인해보세요!
  console.log(req.body.authorizationCode);

  // TODO : 이제 authorization code를 이용해 access token을 발급받기 위한 post 요청을 보냅니다. 다음 링크를 참고하세요.
  // https://docs.github.com/en/free-pro-team@latest/developers/apps/identifying-and-authorizing-users-for-github-apps#2-users-are-redirected-back-to-your-site-by-github

  const authCode = req.body.authorizationCode

  // 앱의 서버 -> github
  axios.post('https://github.com/login/oauth/access_token', {
    client_id : clientID,
    client_secret: clientSecret,
    code: authCode
  }, {
    headers: {accept: 'application/json'} // 해석할 파일 형식을 알려줘야 토큰을 보내줌
  })
  .then((data) => {  // github에서 응답받은 데이터를 클라이언트에 응답으로 전달
    console.log(data.data.access_token);
    // default 200
    res.json({accessToken: data.data.access_token})
  })
}
