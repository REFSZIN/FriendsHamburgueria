import Header from '../../components/header';
import Footer from '../../components/footer';
import styled from 'styled-components';
import CardapioComponent from '../../components/cardapio';

export default function Cardapio() {
  return (
    <Main>
      <Header/>
      <Component>
        <CardapioComponent/>
      </Component>
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
const Component = styled.section`
  @media (max-width: 600px) {
  margin-bottom: 400px;
  }
  @media (min-width:320px) and (max-width: 900px){
    margin-bottom: 500px !important;
  }
`;
