import React, { useState } from 'react';
import Nav from './components/Nav';
import ItemListContainer from './pages/ItemListContainer';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import ShoppingCart from './pages/ShoppingCart';
import { initialState } from './assets/state';  // 아이템 정보 데이터

function App() {

  const [items, setItems] = useState(initialState.items);
  const [cartItems, setCartItems] = useState(initialState.cartItems);

  // 1. 장바구니에 담기
  const addCart = (item) => {
    console.log(item);
    const cartItemsId = cartItems.map((el) => el.itemId)  // 이미 장바구니에 있는 아이템의 id를 가져옴
    const newCartItems = cartItems.slice(); // 배열을 복사 
    const newCartItem = {
      // itemId : item.id,
      itemId : item,
      quantity: 1
    }

    if(cartItemsId.includes(item)){
      alert('이미 담긴 상품입니다.')
    }else{
      newCartItems.push(newCartItem);
      setCartItems(newCartItems);
    }
    // if(cartItemsId){
    //   newCartItems.push(newCartItem);
    //   setCartItems(newCartItems);
    // }
    // console.log(cartItems)
  }

  // 2. 삭제하기
  const handleDeleteCartItems = (itemId) => {
    const newCartItems = cartItems.filter((el) => el.itemId !== itemId);  // 삭제하려는 아이템의 아이디가 아닌 아이디들만 배열로 남게
    setCartItems(newCartItems)
  }

  // 카트 수량 수정, item,quantity
  const changeQuantity = (quantity, itemId) => {  
    const newCartItems = cartItems.slice(); // 배열복사
    for(let el of newCartItems){  // 반복문을 사용하여
      if(el.itemId === itemId){
        el.quantity = quantity
      }
    }
    setCartItems(newCartItems)
  }

  return (
    <Router>
      <Nav cartItemTotal={cartItems}/> {/* 상단의 navbar */}
      
      <Switch>
        <Route exact={true} path="/">
          <ItemListContainer items={items} addCart={addCart} />
        </Route>
      
        <Route path="/shoppingcart">
          <ShoppingCart cartItems={cartItems} items={items} handleDeleteCartItems={handleDeleteCartItems} changeQuantity={changeQuantity}/>
        </Route>
      
      </Switch>
    </Router>
  );
}

export default App;
