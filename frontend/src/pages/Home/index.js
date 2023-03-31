import Header from '../../components/header';
import Footer from '../../components/footer';
import Carrosel from '../../components/carrosel';
import styled from 'styled-components';
import Suggestion from '../../components/sugestao';

export default function Home() {
  return (
    <Main>
      <Header/>
      <Carrosel/>
      <Suggestion/>
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
