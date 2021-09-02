// controller : url을 축약하는 기능

const db = require('../../models/index');
const { getUrlTitle } = require('../../modules/utils');
//? 중괄호

exports.get = async (req, res) => {
    // GET /links
    const result = await db.url.findAll(); 
    res.status(200).json(result).send();    // 있다없다를 200
};

exports.getId = async (req, res) => {
    // GET /links/:id
    const id = req.params.id;
    const findUrl = await db.url.findByPk(id); 
    await findUrl.increment('visits', { by: 1 });
    res.status(302).redirect(findUrl.url);
};

exports.post = (req, res) => {
    // POST /links
    const url = req.body.url;
    getUrlTitle(url, async (err, title) => {
        const newData = await db.url.create({ url: url, title: title });
        res.status(201).json(newData).send();   // 축약된 url을 응답
    });
};