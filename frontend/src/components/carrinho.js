import React, { useState } from 'react';
import styled from 'styled-components';
import { Add, Remove } from '@material-ui/icons';
import { TextField, Select, MenuItem, FormControl, Button } from '@material-ui/core';

const Formulario = () => {
  const [endereco, setEndereco] = useState('');
  const [formaPagamento, setFormaPagamento] = useState('');
  const [troco, setTroco] = useState(false);

  const handleChangeEndereco = (event) => {
    setEndereco(event.target.value);
  };

  const handleChangeFormaPagamento = (event) => {
    setFormaPagamento(event.target.value);
  };

  const handleChangeTroco = (event) => {
    setTroco(event.target.value === 'true');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const message = `Endereço: ${endereco}\nForma de pagamento: ${formaPagamento}\nPrecisa de troco? ${troco ? 'Sim' : 'Não'}`;
    window.open(`https://api.whatsapp.com/send?phone=5532988059192&text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <Furmulario onSubmit={handleSubmit}>
      <FormControl>
        <TextField
          label="Endereço"
          value={endereco}
          onChange={handleChangeEndereco}
          required
        />
      </FormControl>
      <FormControl>
        <Select
          label="Forma de pagamento"
          value={formaPagamento}
          onChange={handleChangeFormaPagamento}
          required
        >
          <MenuItem value="dinheiro">Dinheiro</MenuItem>
          <MenuItem value="cartao">Cartão</MenuItem>
        </Select>
      </FormControl>
      {formaPagamento === 'dinheiro' && (
        <FormControl>
          <Select
            label="Precisa de troco?"
            value={troco ? 'true' : 'false'}
            onChange={handleChangeTroco}
          >
            <MenuItem value="true">Sim</MenuItem>
            <MenuItem value="false">Não</MenuItem>
          </Select>
        </FormControl>
      )}
      <Button onClick={handleSubmit} type="submit" variant="contained" color="primary">Finalizar compra</Button>
    </Furmulario>
  );
};

const Carrinho = ({ cartData, onAddToCart, onRemoveFromCart, onAddAdditionToProduct, onRemoveAdditionToProduct }) => {
  const handleAddAdditionToProduct = (item, addition) => {
    onAddAdditionToProduct(item, addition);
  };

  const handleRemoveAdditionToProduct = (item, addition) => {
    onRemoveAdditionToProduct(item, addition);
  };

  return (
    <CartContainer>
      <CartTitle>Carrinho</CartTitle>
      {cartData.length === 0 ? (
        <p>Carrinho vazio</p>
      ) : (
        <>
          {cartData.map((item) => (
            <CartItem key={item.id}>
              <ItemImage src={item.image} alt={item.name} />
              <ItemInfo>
                <ItemName>{item.name}</ItemName>
                <ItemPrice>Preço: R${item.price}</ItemPrice>
                {item.additions && item.additions.length > 0 && (
                  <ItemAdditions>
                    {item.additions.map((addition) => (
                      <Addition key={addition.id}>
                        <AdditionName>{addition.name}</AdditionName>
                        <AdditionPrice>+ R${addition.price}</AdditionPrice>
                        <QuantityControl>
                          <Button
                            onClick={() => handleRemoveAdditionToProduct(item, addition)}
                            startIcon={<Remove />}
                            variant="contained"
                            color="secondary"
                            size="small"
                          />
                          <span>{addition.quantity}</span>
                          <Button
                            onClick={() => handleAddAdditionToProduct(item, addition)}
                            startIcon={<Add />}
                            variant="contained"
                            color="primary"
                            size="small"
                          />
                        </QuantityControl>
                      </Addition>
                    ))}
                  </ItemAdditions>
                )}
              </ItemInfo>
              <QuantityControl>
                <Button
                  onClick={() => onRemoveFromCart(item)}
                  startIcon={<Remove />}
                  variant="contained"
                  color="secondary"
                  size="small"
                />
                <span>{item.quantity}</span>
                <Button
                  onClick={() => onAddToCart(item)}
                  startIcon={<Add />}
                  variant="contained"
                  color="primary"
                  size="small"
                />
              </QuantityControl>
            </CartItem>
          ))}
          <TotalPrice>Total: R${cartData.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}</TotalPrice>
        </>
      )}
      <Formulario/>
    </CartContainer>
  );
};

const CartContainer = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

const CartTitle = styled.h2`
  margin-bottom: 20px;
  font-size: 1.5rem;
  text-align: center;
`;

const CartItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #ccc;
`;

const ItemAdditions = styled.div`
  margin-top: 10px;
`;
const Furmulario = styled.div`
  height: 100%;
  width: 100vw;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-content: flex-start;
  justify-content: flex-start;
  align-items: stretch;

`;

const Addition = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
`;

const AdditionName = styled.span`
  font-weight: bold;
`;

const AdditionPrice = styled.span`
  font-weight: bold;
`;

const ItemImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin-right: 20px;
`;

const ItemInfo = styled.div`
  flex: 1;
`;

const ItemName = styled.h3`
  margin: 0;
  font-size: 1.2rem;
`;

const ItemPrice = styled.p`
  margin: 0;
`;

const QuantityControl = styled.div`
  display: flex;
  align-items: center;

  button {
    margin: 0 10px;
  }

  span {
    font-size: 1.2rem;
    margin: 0 10px;
  }
`;

const TotalPrice = styled.p`
  margin-top: 20px;
  font-size: 1.2rem;
  text-align: right;
`;

export default Carrinho;
