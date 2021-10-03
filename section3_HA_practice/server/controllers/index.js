module.exports = {
  signup: require('./users/signup'),
  signin: require('./users/signin'),
  signout: require('./users/signout'),
  auth: require('./users/auth'),
};


//////////////////////////////////////////////////////////////////////

// const { user } = require("../models");
// const express = require('express');

// module.exports = {
//   signInController: async (req, res) => {
//     //console.log(req.body) -> { email: 'hoyong@codestates.com', password: 'password' }
//     // const { email, password } = req.body; 
//     const userInfo = await user.findOne({
//       where: { email: req.body.email, password: req.body.password },
//     }); // where 디비에서 해당하는 조건 찾을 때 

//     // console.log("===================================", req.session) -> 쿠키 정보 들어오는 중
//     if (!userInfo) {  //정보가 안맞으면
//       return  res.status(404).send("invalid user")
    
//     }else{  //정보가 맞으면
//     // console.log(userInfo)
//     //it should respond 200 status code with user id to signin data
//     req.session.userid = userInfo.email; //DB 조회에 성공시 세션에 userId라는 키를 생성, 유저의 email값을 저장

//     //console.log(req.session) ->
//     // Session {
//     //   cookie: {
//     //     path: '/',
//     //     _expires: 2021-06-02T05:15:13.517Z,
//     //     originalMaxAge: 86400000,
//     //     httpOnly: true,
//     //     domain: 'localhost',
//     //     sameSite: 'none',
//     //     secure: true
//     //   },
//     //   userId: 'hoyong@codestates.com'
//     // }
//     res.status(200).send({id:userInfo.email}) //req.body.email
//     }
//   },
  


//   signUpController: async(req, res) => {
//     // TODO : 회원가입 로직 및 유저 생성 로직 작성
//     // console.log(req.body) 
//     // {
//     //   email: 'testuser@gmail.com',
//     //   password: 'test',
//     //   username: 'testuser',
//     //   mobile: '010-0987-6543'
//     // }
    
//     // email 찾기
//     const userInfo = await user.findOne({
//       where: {email: req.body.email}
//     })

//     // console.log("===================", userInfo);

//     // 중복되는 이메일 있을 시
//     if(userInfo){ 
//       return res.status(409).send("email exists")
//     }else{
      
//       console.log("========================", req.body);
//       // const {email, password, username, mobile} = req.body
//       // res.status(201).json()
//     }


//     /*
//     const {email, password, username, mobile} = req.body;

//     const checkInfo = user.findOrCreate({
//       where: {email:email},
//       defaults: {
//         email:email,
//         password:password,
//         username:username,
//         mobile:mobile,
//       }
//     })
//     .then(([res]) => {
//       // if(!created){ //이미 있는 이메일일 때 
//       // return res.status(409).send("email exists")
//       // }
//       // else{//정보가 없는 경우 추가 
//       //   // const data = await user.get({plan:true});
//       //   req.session.userid = checkInfo; 
//       //   // console.log(req.session.userid)
//       //   res.status(201).send(user)
//       // }  
//       // console.log("=========================", res.dataValues);
//       // console.log("=============================", res.dataValues.email)
//       // res.status(201).json(res.dataValues)
//       if(!res.dataValues.email){
//         res.status(409).json({text: 'email exists'})
//       }

//     })

//     // const checkSign = user.findAll({
//     //   where: {email, password, username, mobile},
//     // })
    
//     // if(!checkSign){
//     // return res.status(422).send("insufficient parameters supplied")
//     // }
//     // if (!req.session.userid) {
//     //   res.status(401).send();
//     //   }
//     */
//   },




//   signOutController: async(req, res) => {
//     // TODO: 로그아웃 로직 작성
//     //it should respond with 205 status code
//     // status code 205
//     // form의 내용을 지우거나 캔버스 상태를 재설정하거나 UI를 새로 고치려면
//     // client의 문서뷰를 새로고침할 때
//     req.session.destroy((err) => {
//       if(err) {
//         console.log("logout error")
//       }else{
//         res.status(205).send("Logged out successfully")
//       }
//     });
//   },
//   userController: async(req, res) => {
//     // TODO : 유저 회원정보 요청 로직 작성
//     if (!req.session.userid) {
//       res.status(401).send();
//     }

//     const userInfo = await Users.findOne({
//       where: { email: req.session.userid },
//     });

//     console.log(userInfo)
//     const {dataValues} = userInfo;
//     const user = {...dataValues};
//     res.status(200).json(user);
//   }
// };
