// controller : url 축약
const db = require('../../models/index');
const {getUrlTitle} = require('../../modules/utils')

/*
GET /links
content-type: application/json
status code: 200 (성공적으로 조회했을 시)
response: URL 모델의 목록 (array of objects)

GET /links/:id
status code: 302 (성공적으로 리디렉션했을 시)
해당 id 값 바탕으로 url 모델을 찾아 리디렉션합니다.
원본 URL이 https://www.github.com 인 모델 id가 1일 경우
http://localhost:3000/links/1 로 접속하면 원본 URL로 리디렉션
/links/:id URL로 접근할 경우 visits 필드에 카운트가 1씩 증가해야 합니다.
*/
// Get /links
exports.get = async(req, res) => {
  const result = await db.url.findAll();
  res.status(200).json(result).send();
}

// Get /links:id
exports.getId = async(req, res) => {
  const id = req.params.id;
  // id값을 바탕으로 url모델 찾음
  const findUrl = await db.url.findByPk(id);
  await findUrl.increment('visits', {by : 1});
  res.status(302).redirect(findUrl.url);
}

// POST /links
// status code: 201 (성공적으로 생성했을 시)
/*
POST 요청을 구현할 때, 웹사이트의 제목을 가져오기 위해 
modules/utils.js를 이용할 수 있습니다.

node.js 에서 HTTP 요청을 하기 위해 request 라는 라이브러리를 사용하였습니다. 
비슷한 일을 하는 라이브러리로는 axios, node-fetch 등이 있습니다. 
node.js 내장 http, https 모듈을 이용해 이를 직접 구현할 수 있습니다.
node.js 에서 HTTP 요청을 할 수 있다는 점을 이용해 웹사이트 크롤링(긁어오기)을 구현할 수 있습니다.

*/
exports.post = (req, res) => {
  const url = req.body.url;
  getUrlTitle(url, async(err, title) => {
    const newData = await db.url.create({url: url, title: title});
    res.status(201).json(newData).send(); // 축약된 url 응답
  })
}