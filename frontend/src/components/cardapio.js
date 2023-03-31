import React from 'react';
import styled from 'styled-components';
import { Grid, Paper, Typography, Button } from '@material-ui/core';
import { Rating } from '@material-ui/lab';

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

function Suggestion({ name, status, photoUrl, price, description, category }) {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <SuggestionContainer category={category}>
        <SuggestionPaper>
          <SuggestionImg src={photoUrl} alt={name} />
          <SuggestionTitle>{name}</SuggestionTitle>
          <SuggestionDescription>{description}</SuggestionDescription>
          <SuggestionPrice>R${price}</SuggestionPrice>
          <SuggestionRating name="suggestion-rating" value={status} readOnly precision={0.5} />
          <SuggestionButton variant="contained" color="secondary">
            Adicionar ao carrinho
          </SuggestionButton>
        </SuggestionPaper>
      </SuggestionContainer>
    </Grid>
  );
}

export default function Suggestions() {
  const suggestions = [
    {
      id: 1,
      name: 'Hamburguer Tradicional',
      status: 5,
      photoUrl: 'https://i.im.ge/2023/03/29/I2Ntif.AQUELE-TUDO-2T-IFOOD.png',
      price: 10,
      category: 'T2',
      description: 'Um delicioso hamburguer com carne, queijo, alface e tomate.',
      createdAt: '2023-03-28T00:00:00.000Z',
      updatedAt: '2023-03-28T00:00:00.000Z',
    },
    {
      id: 2,
      name: 'Hamburguer Vegetariano',
      status: 1,
      photoUrl: 'https://i.im.ge/2023/03/29/I2Ntif.AQUELE-TUDO-2T-IFOOD.png',
      price: 12,
      category: 'T2',
      description: 'Um delicioso hamburguer vegetariano com cogumelos e queijo.',
      createdAt: '2023-03-27T00:00:00.000Z',
      updatedAt: '2023-03-27T00:00:00.000Z',
    },
    {
      id: 3,
      name: 'Batata Frita',
      status: 4,
      category: 'T1',
      photoUrl: 'https://i.im.ge/2023/03/29/I2Ntif.AQUELE-TUDO-2T-IFOOD.png',
      price: 5,
      description: 'Batata frita crocante e deliciosa.',
      createdAt: '2023-03-26T00:00:00.000Z',
      updatedAt: '2023-03-26T00:00:00.000Z',
    },
    {
      id: 4,
      name: 'Batata Frita',
      status: 4,
      category: 'T1',
      photoUrl: 'https://i.im.ge/2023/03/29/I2Ntif.AQUELE-TUDO-2T-IFOOD.png',
      price: 5,
      description: 'Batata frita crocante e deliciosa.',
      createdAt: '2023-03-26T00:00:00.000Z',
      updatedAt: '2023-03-26T00:00:00.000Z',
    },
    {
      id: 3,
      name: 'Batata Frita',
      status: 4,
      category: 'T1',
      photoUrl: 'https://i.im.ge/2023/03/29/I2Ntif.AQUELE-TUDO-2T-IFOOD.png',
      price: 5,
      description: 'Batata frita crocante e deliciosa.',
      createdAt: '2023-03-26T00:00:00.000Z',
      updatedAt: '2023-03-26T00:00:00.000Z',
    },
    {
      id: 3,
      name: 'Batata Frita',
      status: 4,
      category: 'T1',
      photoUrl: 'https://i.im.ge/2023/03/29/I2Ntif.AQUELE-TUDO-2T-IFOOD.png',
      price: 5,
      description: 'Batata frita crocante e deliciosa.',
      createdAt: '2023-03-26T00:00:00.000Z',
      updatedAt: '2023-03-26T00:00:00.000Z',
    },
    {
      id: 3,
      name: 'Batata Frita',
      status: 4,
      category: 'T1',
      photoUrl: 'https://i.im.ge/2023/03/29/I2Ntif.AQUELE-TUDO-2T-IFOOD.png',
      price: 5,
      description: 'Batata frita crocante e deliciosa.',
      createdAt: '2023-03-26T00:00:00.000Z',
      updatedAt: '2023-03-26T00:00:00.000Z',
    },
    {
      id: 3,
      name: 'Batata Frita',
      status: 4,
      category: 'T1',
      photoUrl: 'https://i.im.ge/2023/03/29/I2Ntif.AQUELE-TUDO-2T-IFOOD.png',
      price: 5,
      description: 'Batata frita crocante e deliciosa.',
      createdAt: '2023-03-26T00:00:00.000Z',
      updatedAt: '2023-03-26T00:00:00.000Z',
    },
  ];

  const categories = ['T1', 'T2'];
  
  return (
    <Main>
      {categories.map((category) => (
        <ConteinerProducts key={category}>
          <Typography variant="h6" gutterBottom>
            {category}
          </Typography>
          <Grid container spacing={1}>
            {suggestions.filter((suggestion) => suggestion.category === category).map((suggestion) => (
              <Suggestion key={suggestion.id} {...suggestion} />
            ))}
          </Grid>
        </ConteinerProducts>
      ))}
    </Main>
  );
}
