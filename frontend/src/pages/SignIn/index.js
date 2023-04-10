import { useState, useContext } from 'react';
import { toast } from 'react-toastify';
import LogoImg from '../../assets/images/friends.png';
import { useNavigate, Link } from 'react-router-dom';
import {
  FaGithub,
} from 'react-icons/fa';
import styled from 'styled-components';
import { getAuth, signInWithPopup, GithubAuthProvider } from 'firebase/auth';
import { Container, Typography, TextField, Button } from '@material-ui/core';
import Header from '../../components/header';
import Footer from '../../components/footer';
import useSignIn from '../../hooks/api/useSignIn';
import UserContext from '../../contexts/UserContext';

export default function SignIn() {
  const { setUserData } = useContext(UserContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const provider = new GithubAuthProvider();
  const navigate = useNavigate();
  const { signInLoading, signIn } = useSignIn();

  async function submitGithub(event) {
    const auth = getAuth();
    event.preventDefault();
    try {
      signInWithPopup(auth, provider)    
        .then(async(result) => {
        }
        ).catch((error) => {
          toast('Não foi possível fazer o login!', error);
        });
    } catch (err) {
      toast('Não foi possível fazer login!', err);
    }
  }  
  
  async function submit(event) {
    event.preventDefault();
    try {
      const userData = await signIn(email, password);
      setUserData(userData);
      navigate('/dashboard');
      toast('Login realizado com sucesso!');
    } catch (err) {
      toast('Não foi possível fazer o login!');
    }
  }  

  return (
    <Main>
      <Header/>
      <SignInContainer>
        <img src={LogoImg} alt="Event Logo" width="60px" />
        <Typography variant="h4">Entrar</Typography>
        <form onSubmit={submit}>
          <TextField label="E-mail" type="text" fullWidth value={email} onChange={e => setEmail(e.target.value)} />
          <TextField label="Senha" type="password" fullWidth value={password} onChange={e => setPassword(e.target.value)} />
          <Button type="submit" variant="contained" color="primary" fullWidth disabled={signInLoading}>Entrar</Button>
        </form>
        <Button onClick={submitGithub} variant="contained" color="secondary" fullWidth disabled={false}><FaGithub></FaGithub> Github</Button>
        <Typography variant="overline">
          Não possui login? <Link to="/cadastro">Inscreva-se</Link>
        </Typography>
      </SignInContainer>
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

const SignInContainer = styled(Container)`
  background-color: #F5F5F5;
  padding: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 24px;
  text-align: center;
  color: black;
  margin-top: calc(30vh - 10vh);
  & > *:not(:last-child) {
    margin-bottom: 24px;
  }

  @media (max-width: 600px) {
    padding: 20px;
  }
`;
