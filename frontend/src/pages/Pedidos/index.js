import Header from '../../components/header';
import Footer from '../../components/footer';
import styled from 'styled-components';
import PedidosComponent from '../../components/pedidos.js';

export default function Pedidos() {
  return (
    <Main>
      <Header/>
      <PedidosComponent/>
      <Footer/>
    </Main>
  );
}

const Main = styled.main`
  min-height: 100vh;
  width: 100vw;
  padding: 10px;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: flex-start;
  align-items: center;
  position: absolute;
`;
