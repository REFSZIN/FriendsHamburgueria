import styled from 'styled-components';
import { Grid, Paper, Typography, Button } from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import React, { useContext } from 'react';
import useProducts from '../hooks/api/useProducts';
import CartContext from '../contexts/CartContext';

function Suggestion({ name, status, photoUrl, price, description }) {
  const { addToCart, addAdditionToProduct, removeAdditionToProduct } = useContext(CartContext);
  const product = { name, status, photoUrl, price, description };
  const handleAddToCart = (product) => {
    addToCart(product);
  };

  const handleAdditionChange = (event, product, addition) => {
    if (event.target.checked) {
      addAdditionToProduct(product, addition);
    } else {
      removeAdditionToProduct(product, addition);
    }
  };

  return (
    <Grid item xs={12} sm={6} md={4}>
      <SuggestionContainer>
        <SuggestionPaper>
          <SuggestionTitle>{name}</SuggestionTitle>
          <SuggestionImg src={photoUrl} alt={name} />
          <SuggestionDescription>{description}</SuggestionDescription>
          <SuggestionPrice>R${price}</SuggestionPrice>
          <SuggestionRating name="suggestion-rating" value={status} readOnly precision={0.5} />
          <SuggestionButton variant="contained" color="secondary" onClick={() => handleAddToCart(product)} >
            Adicionar ao carrinho
          </SuggestionButton>
        </SuggestionPaper>
      </SuggestionContainer>
    </Grid>
  );
}

export default function Suggestions() {
  const { productsLoading, productsError, productsData } = useProducts();

  if (productsLoading) {
    return <div>Loading...</div>;
  }
  if (productsError) {
    return <div>Error: {productsError.message}</div>;
  }
  if (!productsData) {
    return null;
  }

  return (
    <SugesMain>
      <Title>Promoçoes</Title>
      <Grid container spacing={3}>
        {productsData.products.map((suggestion) => (
          <Suggestion key={suggestion.id} {...suggestion} />
        ))}
      </Grid>
      <Title>Aqueles</Title>
      <Grid container spacing={3} className='footerspace'>
        {productsData.products.map((suggestion) => (
          <Suggestion key={suggestion.id} {...suggestion} />
        ))}
      </Grid>
    </SugesMain>
  );
}

const SuggestionContainer = styled.div`
  border-radius: 10px / 20px;
  width: 100%;
  margin: 20px 0;
  height: max-content;
  flex-direction: column;
  justify-content: center;
	background: linear-gradient(180deg,rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.28));
	backdrop-filter: blur(40px);
  box-shadow:
  2.8px 2.8px 2.2px rgba(0, 0, 0, 0.02),
  6.7px 6.7px 5.3px rgba(0, 0, 0, 0.028),
  12.5px 12.5px 10px rgba(0, 0, 0, 0.035),
  22.3px 22.3px 17.9px rgba(0, 0, 0, 0.042),
  41.8px 41.8px 33.4px rgba(0, 0, 0, 0.05),
  100px 100px 80px rgba(0, 0, 0, 0.07);
  @media (min-width:320px) and (max-width: 1000px){
    margin-bottom: 20px !important;
  }
`;

const SugesMain = styled.section`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
`;

const Title = styled.h2`
  display:flex;
  justify-content: center;
  font-size: 40px;
  width: 100%;
  margin: 20px 0;
  margin-left: 10px;
`;

const SuggestionPaper = styled(Paper)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  height: 100%;
`;

const SuggestionImg = styled.img`
  width: 40%;
  height: auto;
  margin-bottom: 10px;
`;

const SuggestionTitle = styled.p`
  font-size: 18px;
  font-weight: small;
  margin-bottom: 10px;
  color: white;
  font-weight: 700;
  margin: 10px 10px;
`;

const SuggestionDescription = styled(Typography)`
  font-size: 16px;
  margin-top: 10px;
  color: white;
`;

const SuggestionPrice = styled(Typography)`
  font-size: 18px;
  font-weight: bold;
  margin-top: 10px;
  color: white;
`;

const SuggestionButton = styled(Button)`
  margin-top: 20px;
  color: white;
`;

const SuggestionRating = styled(Rating)`
  margin-top: 10px;
  color: white;
  margin-bottom: 10px;
`;
