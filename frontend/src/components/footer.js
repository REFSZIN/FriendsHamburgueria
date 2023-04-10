import styled from 'styled-components';
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  return (
    <FooterContainer>
      <SocialContainer>
        <SocialTitle>Redes Sociais:</SocialTitle>
        <SocialIconsContainer>
          <SocialIcon href='https://www.facebook.com/profile.php?id=100063705272356' target='_blank'>
            <FaFacebookF size={24} />
          </SocialIcon>
          <SocialIcon href='https://www.instagram.com/friends_burg/' target='_blank'>
            <FaInstagram size={24} />
          </SocialIcon>
          <SocialIcon href='https://api.whatsapp.com/send?phone=5532988059192' target='_blank'>
            <FaWhatsapp size={24} />
          </SocialIcon>
        </SocialIconsContainer>
      </SocialContainer>
      <LocationContainer>
        <LocationTitle>Endereço:</LocationTitle>
        <LocationText>
          R. Rosa Sffeir, 691 - Grajaú, Juiz de Fora - MG
        </LocationText>
      </LocationContainer>
      <ContactContainer>
        <ContactTitle>Contato:</ContactTitle>
        <ContactText>
          Telefone: (32) 98805-9192
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
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #aaa;
  width: 100%;
  display: flex;
  position: absolute;
  bottom: 0;
  @media (max-width: 900px) {
    flex-direction: column;
    text-align: center;
  }
`;

const SocialContainer = styled.div`
  flex: 1;
  margin-right: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  @media (max-width: 900px) {
    margin-right: 20px;
    margin-bottom: 0px;  
    flex: 0;
  }
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

const SocialIcon = styled.a`
  color: #000;
  font-size: 24px;
  margin: 0 10px;
  cursor: pointer;
  &:hover {
    color: #f44336;
  }
`;

const LocationContainer = styled.div`
  flex: 1;
  margin-bottom: 20px;
  @media (max-width: 900px) {
    order: 3;
    margin-top: 20px;
  }
`;

const LocationTitle = styled.h4`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 10px;
`;

const LocationText = styled.p`
  font-size: 16px;
  margin: 0;
  margin-right: 10px;
`;

const ContactContainer = styled.div`
  flex: 1;
  margin-bottom: 20px;
  @media (max-width: 900px) {
    order: 2;
    margin-bottom: 0;
  }
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
