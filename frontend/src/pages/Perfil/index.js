import Header from '../../components/header';
import Footer from '../../components/footer';
import PerfilComponent from '../../components/perfil';
import styled from 'styled-components';

export default function Perfil() {
  return (
    <Main>
      <Header/>
      <PerfilComponent/>
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
