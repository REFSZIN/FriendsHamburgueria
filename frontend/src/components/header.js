import React, { useContext, useState } from 'react';
import Logo from '../assets/images/LOGO.png';
import styled from 'styled-components';
import { ShoppingCart, Person, RestaurantMenu } from '@material-ui/icons';
import { FaUser, FaGrinStars, FaCog, FaPowerOff, FaHamburger, FaAlignRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import UserContext from '../contexts/UserContext';
import { toast } from 'react-toastify';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import CartContext from '../contexts/CartContext';

export default function Header() {
  const { cartData } = useContext(CartContext);
  const { setUserData, userData } = useContext(UserContext);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

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
            <FaGrinStars />
            Sobre
          </Link>
        </NavItem>
        { userData.token ?
          <>
            <NavItem>
              <Link to="/meuspedidos">
                <FaHamburger />
              Pedidos
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/perfil">
                <Person />
              Perfil
              </Link>
            </NavItem> 
          </> : <></>}
        <SearchContainer>
          {!userData.token ? 
            <NavItem>
              <Link to="/login">
                <FaUser />
                Login
              </Link>
            </NavItem>:<></>}
          {userData.token ? 
            <NavItem onClick={Logout}>
              <Link to="/">
                <FaPowerOff />
                Sair
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
              <>
              </>
              {cartData.products.length > 0 ?              
                <NavItem>
                    Items {cartData.products.length}
                </NavItem>:             
                <NavItem>
                    Carrinho
                </NavItem>}
            </SearchButton>
          </Link>
        </SearchContainer>
      </NavContainer>
      <MenuHamburg>
        <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
          <NavItem>
            <Link to="/cardapio">
              <RestaurantMenu />
            </Link>
          </NavItem>
          <Tooltip title="Account settings">
            <IconButton
              onClick={handleClick}
              size="small"
              sx={{ ml: 1, mr: 1, color: 'white', size: '100%' }}
              aria-controls={open ? 'account-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
            >
              <FaAlignRight></FaAlignRight>
            </IconButton>
          </Tooltip>
          <Link to="/carrinho">
            <SearchButton> 
              <NavItem>{cartData.products.length}</NavItem>
              <ShoppingCart/>
            </SearchButton>
          </Link>
        </Box>
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              background: 'black',
              overflow: 'visible',
              color: 'white',
              filter: 'drop-shadow(0px 2px 8px #000)',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              '&:before': {
                content: '""',
                display: 'block',
                position: 'relative',
                top: 0,
                right: 0,
                width: 1000,
                height: 10,
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
          { userData.token ?
            <MenuItem onClick={handleClose}>
              <NavItem>
                <Link to="/meuspedidos">
                  <FaHamburger />
                Pedidos
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/perfil">
                  <Person />
                Perfil
                </Link>
              </NavItem> 
            </MenuItem> : <p></p>}
          <Divider />
          {userData.user.type === 999 ? 
            <MenuItem onClick={handleClose}>
              <NavItem>
                <Link to="/painel">
                  <FaCog />
                  PAINEL
                </Link>
              </NavItem>
            </MenuItem>:<p></p>}
          <MenuItem onClick={handleClose}>
            {!userData.token ? 
              <NavItem>
                <Link to="/login">
                  <FaUser />
                  Login
                </Link>
              </NavItem>:<p></p>}
            {userData.token ? 
              <NavItem onClick={Logout}>
                <Link to="/">
                  <FaPowerOff />
                  Sair
                </Link>
              </NavItem>:<p></p>}
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <NavItem>
              <Link to="/sobre">
                <FaGrinStars />
                Sobre
              </Link>
            </NavItem>
          </MenuItem>
        </Menu>
      </MenuHamburg>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  white-space: wrap;
  background-color: dark;
  height: 90px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  position: fixed;
  background:rgba(0, 0, 0, 0.1);
	-webkit-backdrop-filter: blur(40px);
	backdrop-filter: blur(10px);
  margin-top: -10px;
  z-index: 2;
  @media (max-width: 350px){
  justify-content: center
}
`;

const LogoContainer = styled.div`
`;

const MenuHamburg = styled.div`
  @media (min-width: 1000px){
  display: none !important;
}
`;

const LogoImg = styled.img`
	filter: invert(100%);
  width: 250px;
  @media (max-width: 400px){
  width: 180px;
}
`;

const NavContainer = styled.nav`
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: center;
  align-items: baseline;
  align-content: center;
  flex-wrap: nowrap;
  flex-direction: row;
  @media (min-width:320px) and (max-width: 1000px){
  display: none !important;
}
`;

const NavItem = styled.h3`
  font-size: 18px;
  font-weight: 500;
  color: #555;
  margin: 0 10px;
  cursor: pointer;
  font-family: "Lexend Deca", sans-serif;
  font-family: 'Inter', sans-serif;
  font-family: 'Montserrat', sans-serif;
  font-family: 'Permanent Marker', cursive;
  &:hover {
    color: #fff;
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
  h3:hover {
    color: #fff;
  }
  @media (max-width: 400px){
  padding: 1px 2px;
}
`;
