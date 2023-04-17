import React, { useState } from 'react';
import styled from 'styled-components';
import { FaUser } from 'react-icons/fa';
import useAddress from '../hooks/api/useAddress';

const Perfil = () => {
  // eslint-disable-next-line no-empty-pattern
  const {  } = useAddress();
    
  const [formData, setFormData] = useState({
    name: '',
    cep: '',
    street: '',
    city: '',
    state: '',
    number: '',
    neighborhood: '',
    addressDetail: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // enviar os dados para o backend aqui
  };

  return (
    <Main>
      <FaUser/>
      <h1>Perfil Friends</h1>
      <Form onSubmit={handleSubmit}>

        <Label htmlFor="name">Nome:</Label>
        <Input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />

        <Label htmlFor="cep">CEP:</Label>
        <Input type="text" id="cep" name="cep" value={formData.cep} onChange={handleChange} required />

        <Label htmlFor="street">Rua:</Label>
        <Input type="text" id="street" name="street" value={formData.street} onChange={handleChange} required />

        <Label htmlFor="city">Cidade:</Label>
        <Input type="text" id="city" name="city" value={formData.city} onChange={handleChange} required />

        <Label htmlFor="state">Estado:</Label>
        <Input type="text" id="state" name="state" value={formData.state} onChange={handleChange} required />

        <Label htmlFor="number">Número:</Label>
        <Input type="text" id="number" name="number" value={formData.number} onChange={handleChange} required />

        <Label htmlFor="neighborhood">Bairro:</Label>
        <Input type="text" id="neighborhood" name="neighborhood" value={formData.neighborhood} onChange={handleChange} required />

        <Label htmlFor="addressDetail">Complemento:</Label>
        <Input type="text" id="addressDetail" name="addressDetail" value={formData.addressDetail} onChange={handleChange} />

        <Button type="submit">Salvar</Button>
      </Form>
    </Main>
  );
};

export default Perfil;

const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 16px;
  max-width: 800px;
  margin: 0 auto;
  padding: 32px;
  background-color: #0000; 
  border-radius: 8px;
  justify-items: stretch;
  @media (min-width:320px) and (max-width: 600px){
    display: flex;
    grid-template-columns: 1fr 1fr;
    grid-gap: 16px;
    max-width: 800px;
    margin: 0 auto;
    padding: 32px;
    background-color: #0000;
    border-radius: 8px;
    justify-items: stretch;
    flex-wrap: nowrap;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    align-items: stretch;
  }
`;

const Label = styled.label`
  font-weight: normal;
  font-size: 29px;
  color: #fff;
`;

const Input = styled.input`
  border: none;
  border-radius: 4px;
  padding: 8px;
  font-size: 18px;
  background-color: #f5f5f5; /* Light gray input background color */
`;

const Button = styled.button`
    color: #fff;
    margin-top: 32px;
    font-size:16px;
    border-width:2px;
    border-radius:9px;
    border-style:outset;
    font-family: 'Montserrat', sans-serif;
    font-family: 'Permanent Marker', cursive;
    font-size:18px;
    text-align:center;
    border-width:2px;
    border-radius:19px;
    border-style:outset;
    background-color:#000000;
    border-color:#ffffff; 
    color:#ffffff; 
    margin-top: 24px;
    width: 220%;
    @media (min-width:320px) and (max-width: 600px){
      width: 100%;
  }
`;

const Main = styled.section`
  border-radius: 20px;
  background-color: #F5F5F5;
  padding: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 24px;
  text-align: center;
  color: white;
  flex-direction: column;
  justify-content: center;
	background: linear-gradient(180deg,rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.28));
	backdrop-filter: blur(40px);
  margin-top: calc(25vh - 10vh);
  margin-bottom: 150px;
  box-shadow:
  2.8px 2.8px 2.2px rgba(0, 0, 0, 0.02),
  6.7px 6.7px 5.3px rgba(0, 0, 0, 0.028),
  12.5px 12.5px 10px rgba(0, 0, 0, 0.035),
  22.3px 22.3px 17.9px rgba(0, 0, 0, 0.042),
  41.8px 41.8px 33.4px rgba(0, 0, 0, 0.05),
  100px 100px 80px rgba(0, 0, 0, 0.07);
  font-family: "Lexend Deca", sans-serif;
  font-family: 'Inter', sans-serif;
  font-family: 'Montserrat', sans-serif;
  font-family: 'Permanent Marker', cursive;
  @media (max-width: 600px) {
    padding: 20px;
    margin-bottom: 400px;
    margin-top: calc(10vh);
  }
  @media (min-width:320px) and (max-width: 900px){
    margin-bottom: 500px !important;
  }
`;
