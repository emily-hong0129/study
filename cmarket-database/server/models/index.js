/*
controller에서 사용할 orders, items 모델을 정의해야 한다. 
기본적인 틀은 짜여져 있고, db/index.js의 함수를 불러와 SQL을 사용하여 쿼리문을 통해 DB의 정보를 처리한다. 
데이터베이스 쿼리는 반드시 비동기 요청인점을 고려해야 한다.
*/

const db = require('../db');

module.exports = {
  orders: {
    get: (userId, callback) => {
      // TODO: 해당 유저가 작성한 모든 주문을 가져오는 함수를 작성하세요
      let query = 
      `SELECT orders.id, orders.created_at, orders.total_price, items.image, items.name, items.price, order_items.order_quantity
        FROM orders
        INNER JOIN order_items
        ON orders.id = order_items.order_id
        INNER JOIN items
        ON order_items.item_id = items.id
        INNER JOIN users
        ON orders.user_id = users.id
        WHERE users.id = ${userId}
      ;`
      db.query(query, (err, result) => {
        if(err) {
          callback(err)
        } else {
          callback(null, result);
        }
      })
    },
    post: (userId, orders, totalPrice, callback) => {
      // TODO: 해당 유저의 주문 요청을 데이터베이스에 생성하는 함수를 작성하세요
      // user의 주문내역 저장
      // orders : 레코드를 생성하는 쿼리를 날림
      // 위에꺼 한번 날리고 잘 실행되었으면
      // callback함수에서 아래 쿼리가 실행되도록 해야함
      // orders_items : 이 테이블에 order_items.order_id 라는 포린키가 있음 -> 방금 날린 쿼리로 인해 생성된 레코드의 PK일 것임
      // 두번째 쿼리 실행할때 result.insertId를 가져와서 FK로 넣어줌
      // 그리고 한번에 여러 아이템에 대한 레코드를 생성해야되니까 bult insert를 해야된다.
      // req.body로 가져온 item 객체를 배열로 mapping 해야함
      let newOrders_query = `INSERT INTO orders(user_id, total_price) VALUES (${userId}, ${totalPrice});` // 
      let newOrdersItem_query = `INSERT INTO order_items(order_id, item_id, order_quantity) VALUES ?;`

      db.query(newOrders_query, (err, result) => {
        let order = orders.map(item => [
          result.insertId,
          item.itemId,
          item.quantity,
        ]);
        console.log(order);

        db.query(newOrdersItem_query, [order], () => callback(err, result));
      });
    }
  },
  items: {
    get: (callback) => {
      // TODO: Cmarket의 모든 상품을 가져오는 함수를 작성하세요
      const query = `SELECT * FROM items`
      // 쿼리를 작성
      // db.query 메소드에 쿼리를 넘겨주고,
      // 두번째 인자로 쿼리가 실행되고나서 callback 실행될 함수를 정의
      db.query(query, (err, result) => {
        if(err){
          callback(err)
        }else {
          callback(null, result)
        }
      })
    }
  }
};
