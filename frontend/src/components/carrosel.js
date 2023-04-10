import React from 'react';
import  Carousel  from 'react-material-ui-carousel';
import { Paper } from '@material-ui/core';
import Image1 from '../assets/images/slide.jpg';
import Image2 from '../assets/images/cross.png';
import Image3 from '../assets/images/LOGO.png';
import styled from 'styled-components';

export default function Carrossel() {
  const items = [
    {
      img: Image1,
      alt: 'Imagem do Hamburguer 1',
    },
    {
      img: Image2,
      alt: 'Imagem do Hamburguer 2',
    },
    {
      img: Image3,
      alt: 'Imagem do Hamburguer 3',
    },
  ];

  return (
    <CarrosselContainer>
      <Carousel>
        {items.map((item, i) => (
          <CarrosselItem key={i}>
            <img src={item.img} alt={item.alt} />
          </CarrosselItem>
        ))}
      </Carousel>
    </CarrosselContainer>
  );
}

const CarrosselContainer = styled.div`
  width: 100%;
  height: 300px;
  z-index: -1;
  margin-top: 90px;
`;

const CarrosselItem = styled(Paper)`
  img {
    width: 100vw;
    height: 280px;
    object-fit: cover;
    aspect-ratio: 16/9;
  }
`;
