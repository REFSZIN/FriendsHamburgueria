import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { Add, Remove } from '@material-ui/icons';
import { Select, MenuItem, FormControl, Button, TextField } from '@material-ui/core';
import UserContext from '../contexts/UserContext';
import useAddress from '../hooks/api/useAddress';
import { toast } from 'react-toastify';
import useAdditions from '../hooks/api/useAdditions';
import usePurchase from '../hooks/api/usePurchase';
import CartContext from '../contexts/CartContext';

const Formulario = ({ cartData }) => {
  const [formaPagamento, setFormaPagamento] = useState('');
  const [troco, setTroco] = useState(false);
  const [valorTroco, setValorTroco] = useState(0);
  const [tipoCartao, setTipoCartao] = useState('');
  const { userData } = useContext(UserContext);
  const { getAllsaveAddrees } = useAddress();
  const { postPurchase } = usePurchase();
  const [ ultimoEndereço, setultimoEndereço] = useState({
    cep: '',
    street: '',
    city: '',
    state: '',
    number: '',
    neighborhood: '',
    addressDetail: ''
  });
  async function saveHandle() {
    try {
      const Addrees = await getAllsaveAddrees();
      const ultimo = Addrees[Addrees.length - 1];
      setultimoEndereço(ultimo);
      toast('Endereços resgatado com sucesso!');
    } catch (err) {
      toast('Não foi possível achar um endereço cadastrado!');
    }
  }

  async function savePurchaseHandle(boby) {
    try {
      await postPurchase(boby);
      toast('Compra registrada com sucesso!');
    } catch (err) {
      toast('Não foi possível registrar compra!');
    }
  }

  useEffect(() => {
    saveHandle();
  }, []);

  const handleChangeFormaPagamento = (event) => {
    setFormaPagamento(event.target.value);
  };

  const handleChangeTroco = (event) => {
    setTroco(event.target.value === 'true');
  };

  const handleChangeValorTroco = (event) => {
    setValorTroco(Number(event.target.value));
  };

  const handleChangeTipoCartao = (event) => {
    setTipoCartao(event.target.value);
  };

  const handleSubmit = async(event) => { 
    event.preventDefault();
    const enderecoFormatado = `CEP: ${ultimoEndereço.cep}\nRua: ${ultimoEndereço.street}\nBairro: ${ultimoEndereço.neighborhood}\nstate: ${ultimoEndereço.state}\nNumero: ${ultimoEndereço.number}\nReferencia: ${ultimoEndereço.addressDetail}\nCidade: ${ultimoEndereço.city}`;
    let message = `Cliente: ${userData.user.email}\n\nEndereço:\n${enderecoFormatado}\n\nProdutos Selecionados: ${cartData.length}\n`;
    const produtos = cartData.map((produto) => {
      return `- ${produto.name}:\n Unidades:${produto.quantity}  \nR$ ${produto.price.toFixed(2) * produto.quantity}`;
    });
    message += produtos.join('\n');
    message += `\n \nForma de pagamento: ${formaPagamento}\n\nTotal: R$ ${cartData.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}`;
    if (formaPagamento === 'Dinheiro') {
      message += `\nPrecisa de troco? ${troco ? 'Sim' : 'Não'}`;
      if (troco) {
        message += `\nValor do troco: R$ ${valorTroco.toFixed(2)}`;
      }
    } else if (formaPagamento === 'Cartao') {
      message += `\nTipo de cartão: ${tipoCartao}`;
    }
    await savePurchaseHandle({ produtos: cartData, address: [ultimoEndereço], metodo: formaPagamento, description: userData.user.email, price: cartData.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2) });
    window.open(`https://api.whatsapp.com/send?phone=5532988059192&text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <Furmulario onSubmit={handleSubmit}>
      <FormControl>
        <Select
          label="Forma de pagamento"
          value={formaPagamento}
          onChange={handleChangeFormaPagamento}
          required
        >
          <MenuItem value="Dinheiro">Dinheiro</MenuItem>
          <MenuItem value="Cartao">Cartão</MenuItem>
        </Select>
      </FormControl>
      {formaPagamento === 'Dinheiro' && (
        <React.Fragment>
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
          {troco && (
            <TextField
              label="Valor do troco"
              type="number"
              value={valorTroco}
              onChange={handleChangeValorTroco}
              required
            />
          )}
        </React.Fragment>
      )}
      {formaPagamento === 'Cartao' && (
        <FormControl>
          <Select
            label="Tipo de cartão"
            value={tipoCartao}
            onChange={handleChangeTipoCartao}
            required
          >
            <MenuItem value="Debito">Débito</MenuItem>
            <MenuItem value="Credito">Crédito</MenuItem>
          </Select>
        </FormControl>
      )}
      <Button onClick={handleSubmit} type="submit" variant="contained" color="primary">Finalizar compra</Button>
    </Furmulario>
  );
};

const Carrinho = ({ cartData, onAddToCart, onRemoveFromCart, onAddAdditionToProduct, onRemoveAdditionToProduct }) => {
  const [ Additions, setAdditions] = useState({});
  const { getAdditions } = useAdditions();
  const { removeAdditionToProduct, addAdditionToProduct } = useContext(CartContext);
  async function saveHandle() {
    try {
      const Adds = await getAdditions();
      setAdditions(Adds);
      toast('Adds resgatado com sucesso!');
    } catch (err) {
      toast('Não foi possível achar um Adds cadastrado!');
    }
  }  
  useEffect(() => {
    saveHandle();
  }, []);
  const handleAddAdditionToProduct = (item, addition) => {
    addAdditionToProduct(item, addition);
  };

  const handleRemoveAdditionToProduct = (item, addition) => {
    removeAdditionToProduct(item, addition);
  };
  const filterAdditionsByCategory = (category) => {
    switch (category) {
    case 'T1':
    case 'T2':
    case 'Artesanais':
      return Additions.additions.filter((addition) => {
        return (
          addition.category === 'Deseja adicionar algo?' ||
          addition.category === 'Gostaria de acréscimo de Bife ?' ||
          addition.category === 'Gostaria de acréscimo de Bife Artesanal ?' ||
          addition.category === 'Gostaria de acréscimo de Calabresa ?'
        );
      });
    case 'Combos':
    case 'Porções':
      return Additions.additions.filter(
        (addition) => addition.category === 'Complemente seu Lanche'
      );
    case 'Açai':
      return Additions.additions.filter(
        (addition) => addition.category === 'Complemente seu Açaí'
      );
    default:
      return [];
    }
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
              <ItemImage src={item.photoUrl} alt={item.name} />
              <ItemInfo>
                <ItemName>{item.name}</ItemName>
                <ItemInfo>{item.description}</ItemInfo>
                <ItemPrice>Preço: R${item.price}</ItemPrice>
                {Additions.additions && Additions.additions.length > 0 && (
                  <ItemAdditions>
                    {filterAdditionsByCategory(item.category).map((addition) => (
                      <Addition key={addition.id}>
                        <ItemImage src={addition.photoUrl} alt={addition.name} />
                        <AdditionName>{addition.name}</AdditionName>
                        <AdditionPrice>+ R${addition.price}</AdditionPrice>
                        <QuantityControl>
                          <Button
                            onClick={() => handleRemoveAdditionToProduct(item.id, addition.id)}
                            startIcon={<Remove />}
                            variant="contained"
                            color="secondary"
                            size="small"
                          />
                          <span>{0}</span>
                          <Button
                            onClick={() => handleAddAdditionToProduct(item.id, addition)}
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
      <Formulario cartData={cartData} />
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
  width: 100%;
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
