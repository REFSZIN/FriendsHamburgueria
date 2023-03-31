import React from 'react';
import styled from 'styled-components';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <FooterContainer>
      <SocialContainer>
        <SocialTitle>Redes Sociais:</SocialTitle>
        <SocialIconsContainer>
          <SocialIcon>
            <FaFacebookF />
          </SocialIcon>
          <SocialIcon>
            <FaInstagram />
          </SocialIcon>
          <SocialIcon>
            <FaTwitter />
          </SocialIcon>
        </SocialIconsContainer>
      </SocialContainer>
      <LocationContainer>
        <LocationTitle>Endereço:</LocationTitle>
        <LocationText>
          Rua Silva Jardim, 1000 - Centro, Juiz de Fora - MG
        </LocationText>
      </LocationContainer>
      <ContactContainer>
        <ContactTitle>Contato:</ContactTitle>
        <ContactText>
          Telefone: (32) 99999-9999
          <br />
          Email: contato@friendshamburgueriajf.com.br
        </ContactText>
      </ContactContainer>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  background-color: #fff;
  color: black;
  padding: 20px;
  display: flex;
  position: absolute;
  bottom: 0;
  width: 100%;
  justify-content: space-between;
  border-top: 1px solid #aaa;
`;

const SocialContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SocialTitle = styled.h4`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 10px;
`;

const SocialIconsContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const SocialIcon = styled.div`
  font-size: 24px;
  margin: 0 10px;
  cursor: pointer;
  &:hover {
    color: #f44336;
  }
`;

const LocationContainer = styled.div`
  flex: 2;
`;

const LocationTitle = styled.h4`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 10px;
`;

const LocationText = styled.p`
  font-size: 16px;
  margin: 0;
`;

const ContactContainer = styled.div`
  flex: 2;
`;

const ContactTitle = styled.h4`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 10px;
`;

const ContactText = styled.p`
  font-size: 16px;
  margin: 0;
`;
