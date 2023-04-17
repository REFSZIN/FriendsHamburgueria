import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Drawer,
  AppBar,
  Toolbar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Divider,
} from '@material-ui/core';
import styled from 'styled-components';
import { Menu as MenuIcon, ShoppingCart as ShoppingCartIcon, Assignment as AssignmentIcon } from '@material-ui/icons';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    marginTop: 100,
    zIndex: theme.zIndex.drawer + 1,
  },
  menuButton: {
    marginRight: 36,
  },
  drawer: {
    marginTop: 100,
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    marginTop: 100,
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const AdminPanel = () => {
  const classes = useStyles();
  const [selectedNav, setSelectedNav] = useState('produtos');

  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://widgets.ifood.com.br/widget.js';
    document.body.appendChild(script);
    script.addEventListener('load', () => {
      window.iFoodWidget.init({
        widgetId: '2eac9b52-92dd-4e91-9d99-abd3b3a6b62d',
        merchantIds: [
          '94b6878e-f5dd-4ef1-9915-851853e1ab24'
        ],
        containerSelector: '#admin-container',
      });
    });
    return () => {
      document.body.removeChild(script);
      window.location.reload();
    };
  }, [1]);

  const handleNavSelection = (navOption) => {
    setSelectedNav(navOption);
  };

  return (
    <Main className={classes.root}>
      <script async src="https://widgets.ifood.com.br/widget.js"></script>
      <AppBar position='fixed' className={classes.appBar}>
        <Toolbar>
          <MenuIcon className={classes.menuButton} />
          <Typography variant='h6' noWrap>
            Painel de Administração
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer className={classes.drawer} variant='permanent' classes={{ paper: classes.drawerPaper }}>
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            <ListItem button selected={selectedNav === 'produtos'} onClick={() => handleNavSelection('produtos')}>
              <ListItemIcon>
                <ShoppingCartIcon />
              </ListItemIcon>
              <ListItemText primary='Produtos' />
            </ListItem>
            <ListItem button selected={selectedNav === 'pedidos'} onClick={() => handleNavSelection('pedidos')}>
              <ListItemIcon>
                <AssignmentIcon />
              </ListItemIcon>
              <ListItemText primary='Pedidos' />
            </ListItem>
          </List>
          <Divider />
        </div>
      </Drawer>
      <Main className={classes.content} id="admin-container">
        <Toolbar />
      </Main>
    </Main>
  );
};
const Main = styled.section`
  margin-top: 190px !important;
`;

export default AdminPanel;
