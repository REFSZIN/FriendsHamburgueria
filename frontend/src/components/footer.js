import styled from 'styled-components';
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import Logo from '../assets/images/friends.png';

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
        <LocationTitle>Horarios:</LocationTitle>
        <LocationText>
          👉 Horário: Terça a Domingo 18:30 as 23:45
        </LocationText>
      </LocationContainer>
      <Logos src={Logo} alt='a'></Logos>
      <LocationContainer>
        <LocationTitle>Endereço:</LocationTitle>
        <LocationText>
          R. Rosa Sffeir, 693 - Grajaú, Juiz de Fora - MG
        </LocationText>
      </LocationContainer>
      <ContactContainer>
        <ContactTitle>Contato:</ContactTitle>
        <ContactText>
          Telefone: (32) 98805-9192
          <br />
          Email: friendsburgjf@gmail.com
        </ContactText>
      </ContactContainer>
      
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  background-color: #181A1B;
  color: #fff;
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
    flex-direction: column-reverse;
    text-align: center;
  }
`;

const Logos = styled.img`
  margin-right: 50px;
  width: 200px;
  height: 150px;
  background-color:#fff;
  border:1px solid red;    
  height:100px;
  border-radius:50%;
  -moz-border-radius:50%;
  -webkit-border-radius:50%;
  width:100px;
  @media (max-width: 900px) {
    flex-direction: column-reverse;
    text-align: center;
    margin-top: 30px;
    margin-right: 20px;
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
    margin-top: 20px;
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
  color: #fff;
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
