import React from 'react';
import styled from 'styled-components';
import { Grid, Paper, Typography, Button } from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import useProducts from '../hooks/api/useProducts';

export default function Suggestions() {
  const { productsData } = useProducts();
  console.log(productsData);
  const categories = ['T1', 'T2'];
  return (
    <Main>
      {categories.map((category) => (
        <ConteinerProducts key={category}>
          <Typography variant="h6" gutterBottom>
            {category}
          </Typography>
          <Grid container spacing={1}>
            {productsData.map((products) => (
              <Grid key={products.id} item xs={12} sm={6} md={4}>
                <SuggestionContainer category={products.category}>
                  <SuggestionPaper>
                    <SuggestionImg src={products.photoUrl} alt={products.name} />
                    <SuggestionTitle>{products.name}</SuggestionTitle>
                    <SuggestionDescription>{products.description}</SuggestionDescription>
                    <SuggestionPrice>R${products.price}</SuggestionPrice>
                    <SuggestionRating name="suggestion-rating" value={products.status} readOnly precision={0.5} />
                    <SuggestionButton variant="contained" color="secondary">
                      Adicionar ao carrinho
                    </SuggestionButton>
                  </SuggestionPaper>
                </SuggestionContainer>
              </Grid>
            ))}
          </Grid>
        </ConteinerProducts>
      ))}
    </Main>
  );
}

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

const ConteinerProducts = styled.div`
  margin: 10px;
`;
const Main = styled.div`
  margin-top: 90px;
  margin-bottom: 110px;
`;
