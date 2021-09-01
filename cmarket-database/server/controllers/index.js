const models = require('../models');
/*
orders 에 대한 get, post 요청과 items에 대한 get 요청을 처리하는 로직이 이미 구현되어 있다. 
이를 참고하여 어떻게 서버에 요청을 보내고 응답을 전송하는지 알 수 있다.
*/
module.exports = {
  orders: {
    get: (req, res) => {
      const userId = req.params.userId;

      if (!userId) {
        return res.status(401).send('Unauthorized user.');
      } else {
        models.orders.get(Number(userId), (error, result) => {
          if (error) {
            res.status(404).send('No orders found.');
          } else {
            res.status(200).json(result);
          }
        });
      }
    },
    post: (req, res) => {
      const userId = req.params.userId;
      const { orders, totalPrice } = req.body;

      if (orders.length === 0) {
        return res.status(400).send('Bad request.');
      } else {
        models.orders.post(Number(userId), orders, totalPrice, (error, result) => {
          if (error) {
            res.status(404).send('Not found');
          } else {
            res.status(201).send('Order has been placed.');
          }
        });
      }
    }
  },
  items: {
    get: (req, res) => {
      models.items.get((error, result) => {
        if (error) {
          res.status(404).send('Not found');
        } else {
          res.status(200).json(result);
        }
      });
    }
  }
};
