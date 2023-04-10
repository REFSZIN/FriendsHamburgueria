import React, { useContext } from 'react';
import styled from 'styled-components';
import { Grid, Paper, Typography, Button } from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import useProducts from '../hooks/api/useProducts';
import CartContext from '../contexts/CartContext';

export default function Suggestions() {
  const { productsLoading, productsError, productsData } = useProducts();
  const { addToCart, addAdditionToProduct, removeAdditionToProduct } = useContext(CartContext);

  if (productsLoading) {
    return <div>Loading...</div>;
  }
  if (productsError) {
    return <div>Error: {productsError.message}</div>;
  }
  if (!productsData) {
    return null;
  }

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
    <Main>
      <Grid container spacing={1}>
        {productsData.products.map((product) => (
          <Grid key={product.id} item xs={12} sm={6} md={4}>
            <SuggestionContainer category={product.category}>
              <SuggestionPaper>
                <SuggestionImg src={product.photoUrl} alt={product.name} />
                <SuggestionTitle>{product.name}</SuggestionTitle>
                <SuggestionDescription>{product.description}</SuggestionDescription>
                <SuggestionPrice>R${product.price}</SuggestionPrice>
                <SuggestionRating name="suggestion-rating" value={product.status} readOnly precision={0.5} />
                <SuggestionAdditions>
                  {product.additions.map((addition) => (
                    <Addition key={addition.id}>
                      <AdditionCheckbox
                        onChange={(event) => handleAdditionChange(event, product, addition)}
                      />
                      <AdditionName>{addition.name}</AdditionName>
                      <AdditionPrice>{addition.price}</AdditionPrice>
                    </Addition>
                  ))}
                </SuggestionAdditions>
                <SuggestionButton
                  variant="contained"
                  color="secondary"
                  onClick={() => handleAddToCart(product)}
                >
                  Adicionar ao carrinho
                </SuggestionButton>
              </SuggestionPaper>
            </SuggestionContainer>
          </Grid>
        ))}
      </Grid>
    </Main>
  );
}

const SuggestionAdditions = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  color: white;
`;

const Addition = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`;

const AdditionCheckbox = styled.input`
  margin-right: 10px;
`;

const AdditionName = styled.label`
  font-size: 14px;
  margin-right: 5px;
`;

const AdditionPrice = styled.label`
  font-size: 14px;
  font-weight: bold;
`;

const SuggestionContainer = styled.div`
  width: 100%;
  margin: 20px 0;
  ${({ category }) =>
    category === 'T1'
      ? `
        background-color: #1c1c1c;
      `
      : `
        background-color: #f5f5f5;
      `}
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
`;

const SuggestionTitle = styled(Typography)`
  font-size: 20px;
  font-weight: bold;
  margin-top: 10px;
  color: white;
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
  background-color: blue;
`;

const SuggestionRating = styled(Rating)`
  margin-top: 10px;
  color: white;
  margin-bottom: 10px;
`;

const Main = styled.div`
  margin-top: 90px;
  margin-bottom: 110px;
`;
