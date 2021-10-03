const express = require("express");//express가져오고
const https = require('https');
const fs = require('fs');
const cookieParser = require("cookie-parser");//쿠키파싱 추가
require("./models");

// TODO : express-session, cors 등 필요한 middleware를 추가하세요.

const cors = require('cors');//cors 추가
const session = require('express-session');//추가
const logger = require('morgan');//로깅?추가

const mainController = require("./controllers");
const app = express();
const port = 4000;

//추가
app.use(
  session({
    secret: '@codestates',
    resave: false,
    saveUninitialized: true,
    cookie: {
      domain: 'localhost',
      path:'/',
      maxAge: 24 * 6 * 60 * 10000,
      sameSite: 'none',
      httpOnly: true,
      secure: true,
    },
  })
);
app.use(logger('dev'));


// TODO : express-session, cors 등 필요한 middleware를 적용하세요.
app.use(express.json()); //추가
app.use(express.urlencoded({ extended: false })); 
//false면 기본으로 내장된 querystring 모듈을 사용하고 
//true면 따로 설치가 필요한 qs 모듈을 사용하여 쿼리 스트링을 해석합니다.
app.use( //추가
  cors({
    origin: ["https://localhost:3000"], 
    credentials: true,
    methods: ["GET", "POST", "OPTIONS"],
  })
);


app.use(cookieParser()); //추가
app.get("/user", mainController.userController);
app.post("/signin", mainController.signInController);
app.post("/signup", mainController.signUpController);
app.post("/signout", mainController.signOutController);
const HTTPS_PORT = process.env.HTTPS_PORT || 4000; //추가
process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;

// TODO : http 프로토콜 대신 https 프로토콜을 사용하는 서버를 작성하세요.

let server;
if(fs.existsSync("./key.pem") && fs.existsSync("./cert.pem")){
  const privateKey = fs.readFileSync(__dirname + "/key.pem", "utf8");
  const certificate = fs.readFileSync(__dirname + "/cert.pem", "utf8");
  const credentials = { key: privateKey, cert: certificate };
  server = https.createServer(credentials, app);
  server.listen(HTTPS_PORT, () => console.log("server runnning"));
} else {
  server = app.listen(HTTPS_PORT)
}
let httpsServer = server
module.exports = httpsServer;


// const server = app.listen(port, () => {

//     console.log(`server listening on ${port}`);
//   });
// module.exports = server;

