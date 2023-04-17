import React from 'react';
import styled from 'styled-components';
import { Grid } from '@material-ui/core';
import Image2 from '../assets/images/COMBO.png';
import Image3 from '../assets/images/AVALIAÇÃO.png';

const Main = styled.section`
  margin-top: 80px;
  margin-bottom: 120px;
  min-height: 100vh;
  width: 100vw;
  padding: 10px;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: flex-start;
  align-items: center;
`;

const SobreContainer = styled(Grid)`
  white-space: break-spaces;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  @media (max-width: 600px) {
    padding: 20px;
    margin-bottom: 220px;
    margin-top: calc(10vh);
  }
  @media (min-width:320px) and (max-width: 900px){
    margin-bottom: 400px !important;
    margin-top: calc(4vh);
  }
`;

const SobreTitle = styled.h1`
  font-size: 50px;
  font-weight: normal;
  margin-bottom: 20px;
  word-break: break-word;
`;

const SobreText = styled.h4`
  font-size: 20px;
  line-height: 1.5;
  margin-bottom: 20px;
  word-break: break-word;
`;

const SobreImg = styled.img`
  max-width: 100%;
  height: auto;
  margin-bottom: 20px;
`;

const Sobre = () => {
  return (
    <Main>
      <Grid container spacing={1} justifyContent="center">
        <Grid item xs={12} sm={10} md={8} lg={6}>
          <SobreContainer>
            <SobreTitle>Conheça a Friends Hamburgueria</SobreTitle>
            <SobreText>
              Nos oferecemos hambúrgueres artesanais e deliciosos, preparados com ingredientes frescos e selecionados. Fundada em 2018, a Friends Hamburgueria já se tornou um ponto de encontro para os amantes de hambúrgueres em toda cidade.
            </SobreText>
            <SobreImg src={Image3} alt="Friends Hamburgueria"  />
            <SobreText>
              Além dos hambúrgueres, a Friends Hamburgueria também oferece opções de acompanhamento, como batatas fritas, onion rings e combos. Todos os nossos produtos são preparados com muito carinho e cuidado para garantir a melhor experiência gastronômica para os nossos clientes.
            </SobreText>
            <SobreImg src={Image2} alt="Friends Hamburgueria" width="420px"/>
            <SobreText>
              Visite a Friends Hamburgueria e experimente os nossos hambúrgueres artesanais. Temos certeza de que você vai se apaixonar pelo sabor e pela qualidade dos nossos produtos.
            </SobreText>
          </SobreContainer>
        </Grid>
      </Grid>
    </Main>
  );
};

export default Sobre;
