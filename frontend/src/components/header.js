import React, { useContext } from 'react';
import Logo from '../assets/images/LOGO.png';
import styled from 'styled-components';
import { ShoppingCart, Person, RestaurantMenu } from '@material-ui/icons';
import { FaUser, FaCog } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import UserContext from '../contexts/UserContext';
import { toast } from 'react-toastify';
export default function Header() {
  const { setUserData, userData } = useContext(UserContext);
  function Logout() {
    try {
      const newUserData = { user: { type: 0 } };
      setUserData(newUserData);
      localStorage.setItem('userData', JSON.stringify(newUserData));
      toast('Logout realizado com sucesso!');
    } catch (error) {
      toast('Não foi possível fazer o Logout!');
    }
  }
  return (
    <HeaderContainer>
      <LogoContainer>
        <Link to="/">
          <LogoImg src={Logo} alt="Logo" />
        </Link>
      </LogoContainer>
      <NavContainer>
        <NavItem>
          <Link to="/cardapio">
            <RestaurantMenu />
            Cardápio
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/sobre">
            <Person />
            Sobre
          </Link>
        </NavItem>
        { userData.token ?
          <>
            <NavItem>
              <Link to="/meuspedidos">
                <ShoppingCart />
              Pedidos
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/perfil">
                <Person />
              Meu Perfil
              </Link>
            </NavItem> 
          </> : <></>}
      </NavContainer>
      <SearchContainer>
        {!userData.token ? 
          <NavItem>
            <Link to="/login">
              <FaUser />
              LOGIN
            </Link>
          </NavItem>:<></>}
        {userData.token ? 
          <NavItem onClick={Logout}>
            <Link to="/">
              <FaUser />
              LOGOUT
            </Link>
          </NavItem>:<></>}
        {userData.user.type === 999 ? 
          <NavItem>
            <Link to="/painel">
              <FaCog />
              PAINEL
            </Link>
          </NavItem>:<></>}
        <Link to="/carrinho">
          <SearchButton> 
            <ShoppingCart/>
            Carrinho
          </SearchButton>
        </Link>
      </SearchContainer>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  white-space: nowrap;
  background-color: dark;
  height: 90px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  position: fixed;
`;

const LogoContainer = styled.div`
  flex: 1;
`;

const LogoImg = styled.img`
	filter: invert(100%);
  width: 250px;
`;

const NavContainer = styled.nav`
  flex: 2;
  display: flex;
  justify-content: space-between;
`;

const NavItem = styled.h3`
  font-size: 18px;
  font-weight: 500;
  color: #555;
  margin: 0 10px;
  cursor: pointer;
  &:hover {
    color: #000;
  }
`;

const SearchContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const SearchButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 0 4px 4px 0;
  background-color: #f44336;
  color: #fff;
  cursor: pointer;
  &:hover {
    background-color: #e53935;
  }
`;
