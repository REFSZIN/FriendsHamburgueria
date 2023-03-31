import React from 'react';
import styled from 'styled-components';
import { Grid, Typography } from '@material-ui/core';
import Image2 from '../assets/images/cross.png';
import Image3 from '../assets/images/LOGO.png';

const SobreContainer = styled.div`
  margin-top: 50px;
`;

const SobreTitle = styled(Typography)`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const SobreText = styled(Typography)`
  font-size: 18px;
  line-height: 1.5;
  margin-bottom: 20px;
`;

const SobreImg = styled.img`
  width: 50%;
  height: 400px;
  margin-bottom: 20px;
`;
const Main = styled.section`
  margin-top: 80px;
`;

export default function Sobre() {
  return (
    <Main>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <SobreContainer>
            <SobreTitle>Conheça a Friends Hamburgueria</SobreTitle>
            <SobreText>
              A Friends Hamburgueria é uma lanchonete que oferece hambúrgueres artesanais e deliciosos, preparados com ingredientes frescos e selecionados. Fundada em 2010, a Friends Hamburgueria já se tornou um ponto de encontro para os amantes de hambúrgueres em todo o país.
            </SobreText>
            <SobreImg src={Image3} alt="Friends Hamburgueria" />
            <SobreText>
              Além dos hambúrgueres, a Friends Hamburgueria também oferece opções de acompanhamento, como batatas fritas, onion rings e milkshakes. Todos os nossos produtos são preparados com muito carinho e cuidado para garantir a melhor experiência gastronômica para os nossos clientes.
            </SobreText>
            <SobreImg src={Image2} alt="Friends Hamburgueria" />
            <SobreText>
              Visite a Friends Hamburgueria e experimente os nossos hambúrgueres artesanais. Temos certeza de que você vai se apaixonar pelo sabor e pela qualidade dos nossos produtos.
            </SobreText>
          </SobreContainer>
        </Grid>
      </Grid>
    </Main>
  );
}
