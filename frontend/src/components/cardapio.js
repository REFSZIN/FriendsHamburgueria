import styled from 'styled-components';
import { Grid, Paper, Typography, Button } from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import React, { useContext, useState } from 'react';
import useProducts from '../hooks/api/useProducts';
import CartContext from '../contexts/CartContext';

function Suggestion({ id, name, status, photoUrl, price, description, category }) {
  const { cart, addToCart } = useContext(CartContext);

  const product = { id, name, status, photoUrl, price, description, category };
  const cartItem = cart?.items?.find((item) => item.id === id);
  const initialQuantity = cartItem ? cartItem.quantity : 0;
  const [quantity, setQuantity] = useState(initialQuantity);

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  const handleQuantityChange = (value) => {
    setQuantity(value);
  };

  return (
    <Grid item xs={12} sm={6} md={4}>
      <SuggestionContainer>
        <SuggestionPaper>
          <SuggestionTitle>{name}</SuggestionTitle>
          <SuggestionImg src={photoUrl} alt={name} />
          <SuggestionDescription>{description}</SuggestionDescription>
          <SuggestionPrice>R${price}</SuggestionPrice>
          <SuggestionRating name="suggestion-rating" value={status} />
          {cartItem ? (
            <>
              <QuantityButton onClick={() => handleQuantityChange(quantity - 1)}>-</QuantityButton>
              <Typography variant="body1">{quantity}</Typography>
              <QuantityButton onClick={() => handleQuantityChange(quantity + 1)}>+</QuantityButton>
              <SuggestionButton variant="contained" color="secondary" onClick={handleAddToCart}>
                Atualizar carrinho
              </SuggestionButton>
            </>
          ) : (
            <SuggestionButton variant="contained" color="secondary" onClick={handleAddToCart}>
              Adicionar ao carrinho
            </SuggestionButton>
          )}
        </SuggestionPaper>
      </SuggestionContainer>
    </Grid>
  );
}
function Category({ name, products, isOpen, toggleOpen }) {
  return (
    <div>
      <Title onClick={toggleOpen}>
        {name} {isOpen ? <SuggestionButton variant="contained" color="primary">-</SuggestionButton>:<SuggestionButton variant="contained" color="secondary">+</SuggestionButton>}
      </Title>
      {isOpen && (
        <Grid container spacing={3}>
          {products.map((suggestion) => (
            <Suggestion key={suggestion.id} {...suggestion} />
          ))}
        </Grid>
      )}
    </div>
  );
}

export default function Suggestions() {
  const { productsLoading, productsError, productsData } = useProducts();
  const [openCategories, setOpenCategories] = useState([]);

  if (productsLoading) {
    return <div>Loading...</div>;
  }
  if (productsError) {
    return <div>Error: {productsError.message}</div>;
  }
  if (!productsData) {
    return null;
  }

  const groupedProducts = productsData.products.reduce((acc, product) => {
    const category = product.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(product);
    return acc;
  }, {});

  const toggleCategory = (categoryName) => {
    setOpenCategories((openCategories) => {
      const isOpen = openCategories.includes(categoryName);
      return isOpen
        ? openCategories.filter((name) => name !== categoryName)
        : [...openCategories, categoryName];
    });
  };

  return (
    <SugesMain>
      {Object.keys(groupedProducts).map((category) => (
        <Category
          key={category}
          name={category}
          products={groupedProducts[category]}
          isOpen={openCategories.includes(category)}
          toggleOpen={() => toggleCategory(category)}
        />
      ))}
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
  margin-top: 90px;
  margin-bottom: 150px;
  @media (max-width: 600px) {
  margin-bottom: 170px;
  }
  @media (min-width:320px) and (max-width: 900px){
    margin-bottom: 0px !important;
  }
`;

const QuantityButton = styled(Button)`
  margin-top: 20px;
  color: white;
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
  height: 200px;
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
  word-break: break-word;
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
