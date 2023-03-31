import React, { useState } from 'react';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 500px;
  margin: 0 auto;
`;

const Label = styled.label`
  font-weight: bold;
`;

const Input = styled.input`
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 8px;
  font-size: 16px;
`;

const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  font-size: 16px;
  cursor: pointer;
`;
const Main = styled.section`
  margin-top: 90px;
`;

const Perfil = () => {
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
      <h1>Perfil</h1>
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
