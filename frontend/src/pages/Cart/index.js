/* eslint-disable no-console */
import Header from '../../components/header';
import Footer from '../../components/footer';
import Carrinho from '../../components/carrinho';
import styled from 'styled-components';
import React, { useContext } from 'react';
import { Button } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import CartContext from '../../contexts/CartContext';

export default function CartPage() {
  const { cartData, addToCart, addAdditionToProduct, removeAdditionToProduct, removeProductFromCart } = useContext(CartContext);
  return (
    <Main>
      <Header/>
      <MainCart>
        <Button m={2} pt={3} startIcon={<ShoppingCart />} variant="contained" color="primary">
          Carrinho com {cartData.products.length} items
        </Button>
        <Carrinho cartData={cartData.products} user={localStorage.getItem('userData')} onAddToCart={addToCart} onRemoveFromCart={removeProductFromCart} addAdditionToProduct={addAdditionToProduct} removeAdditionToProduct={removeAdditionToProduct} />
      </MainCart>
      <Footer/>
    </Main>
  );
}

const Main = styled.main`
  min-height: 100vh;
  width: 100vw;
  padding: 10px;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: flex-start;
  align-items: center;
  position: absolute;
`;

const MainCart = styled.section`
  min-height: 80vh;
  margin-top: 90px;
  width: 100vw;
  padding: 10px;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 200px;
  @media (max-width: 600px) {
  padding: 20px;
  margin-bottom: 400px;
  margin-top: calc(10vh);
  }
  @media (min-width:320px) and (max-width: 900px){
    margin-bottom: 500px !important;
  }
`;
