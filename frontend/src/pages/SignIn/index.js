import { useState, useContext } from 'react';
import { toast } from 'react-toastify';
import LogoImg from '../../assets/images/friends.png';
import { useNavigate, Link } from 'react-router-dom';
import {
  FaGoogle, FaFacebook
} from 'react-icons/fa';
import styled from 'styled-components';
import { getAuth, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider } from 'firebase/auth';
import { Container, Typography, TextField, Button } from '@material-ui/core';
import Header from '../../components/header';
import Footer from '../../components/footer';
import useSignIn from '../../hooks/api/useSignIn';
import UserContext from '../../contexts/UserContext';
import useSignUp from '../../hooks/api/useSignUp';

export default function SignIn() {
  const { signUp } = useSignUp();
  const { setUserData } = useContext(UserContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const providerFacebook = new FacebookAuthProvider();
  const providerGoogle = new GoogleAuthProvider();
  const navigate = useNavigate();
  const { signInLoading, signIn } = useSignIn();

  async function submitGoogle(event) {
    const auth = getAuth();
    event.preventDefault();
    try {
      signInWithPopup(auth, providerGoogle)    
        .then(async(result) => {
          signUp(result.user.email, result.user.uid)
            .then ( async(res) => {
              const userData = await signIn(result.user.email, result.user.uid);
              setUserData(userData);
              navigate('/');
              toast('Login realizado com sucesso!');
            })
            .catch(async(error) => {
              const userData = await signIn(result.user.email, result.user.uid);
              setUserData(userData);
              navigate('/');
              toast('Login realizado com sucesso!');
            });
        }
        ).catch((error) => {
          toast('Não foi possível fazer o login!', error);
        });
    } catch (err) {
      toast('Não foi possível fazer login!', err);
    }
  }

  async function submitFacebook(event) {
    const auth = getAuth();
    event.preventDefault();
    try {
      signInWithPopup(auth, providerFacebook)    
        .then(async(result) => {
          signUp(result.user.email, result.user.uid)
            .then (async(res) => {
              const userData = await signIn(result.user.email, result.user.uid);
              setUserData(userData);
              navigate('/dashboard');
              toast('Login realizado com sucesso!');
            })
            .catch(async(error) => {
              const userData = await signIn(result.user.email, result.user.uid);
              setUserData(userData);
              navigate('/dashboard');
              toast('Login realizado com sucesso!');
            });
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
        <Logo src={LogoImg} alt="Event Logo" width="120px" />
        <Typography variant="h4">Entrar</Typography>
        <form onSubmit={submit}>
          <TextField label="E-mail" type="text" fullWidth value={email} onChange={e => setEmail(e.target.value)} />
          <TextField label="Senha" type="password" fullWidth value={password} onChange={e => setPassword(e.target.value)} />
          <Button type="submit" variant="contained" color="secondary" fullWidth disabled={signInLoading}>Entrar</Button>
        </form>
        <div>
          <Button onClick={submitGoogle} variant="contained" color="secondary" fullWidth disabled={false}><FaGoogle></FaGoogle> Google</Button>
          <Button onClick={submitFacebook} variant="contained" color="primary" fullWidth disabled={false}><FaFacebook></FaFacebook> Facebook</Button>
        </div>
        <Typography variant="overline">
          <Link to="/cadastro">Criar Nova Conta</Link>
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

const Logo = styled.img`
  background-color:#fff;
  border-radius:50%;
`;

const SignInContainer = styled(Container)`
  border-radius: 20px;
  background-color: #F5F5F5;
  padding: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 24px;
  text-align: center;
  color: white;
  flex-direction: column;
  justify-content: center;
	background: linear-gradient(180deg,rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.28));
	backdrop-filter: blur(40px);
  margin-top: calc(25vh - 10vh);
  margin-bottom: 150px;
  box-shadow:
  2.8px 2.8px 2.2px rgba(0, 0, 0, 0.02),
  6.7px 6.7px 5.3px rgba(0, 0, 0, 0.028),
  12.5px 12.5px 10px rgba(0, 0, 0, 0.035),
  22.3px 22.3px 17.9px rgba(0, 0, 0, 0.042),
  41.8px 41.8px 33.4px rgba(0, 0, 0, 0.05),
  100px 100px 80px rgba(0, 0, 0, 0.07);
  font-family: "Lexend Deca", sans-serif;
  font-family: 'Inter', sans-serif;
  font-family: 'Montserrat', sans-serif;
  font-family: 'Permanent Marker', cursive;
  max-width: 800px !important;
  & > form {
    display:flex ;
    justify-content: center;
    align-items: center;
    justify-content: center;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin:  0px 10% 20px 10%;
    flex-direction: column;
    flex-wrap: nowrap;
    align-content: center;
  }
  & > form > button {
    font-size:18px;
    text-align:left;
    border-width:2px;
    border-radius:19px;
    border-style:outset;
    background-color:#000000;
    border-color:#ffffff; 
    color:#ffffff; 
    margin-top: 24px;
  }
  & > form > div > label {
    color: #fff !important;
    font-size:23px;
    height: 90px;
    font-family: "Lexend Deca", sans-serif;
    font-family: 'Inter', sans-serif;
    font-family: 'Montserrat', sans-serif;
    font-family: 'Permanent Marker', cursive;
  }
  & > form > div > div> input {
    color: #fff;
    margin-top: 32px;
    font-size:16px;
    border-width:2px;
    border-radius:9px;
    border-style:outset;
    font-family: 'Montserrat', sans-serif;
    font-family: 'Permanent Marker', cursive;
  }
  & > span {
  font-size:18px;
  text-align:left;
  border-color:#ffffff; 
  color:#ffffff; 
  text-shadow:8px 20px 6px rgba(42,42,42,.90);
  margin:10px 10px 10px 0px;
  width: 100%;
  }
  & > div > button {
  font-size:18px;
  text-align:left;
  border-width:2px;
  border-radius:19px;
  border-style:outset;
  background-color:#000000;
  border-color:#ffffff; 
  color:#ffffff; 
  margin:10px 10px 10px 0px;
  width: 60%;
  }
  @media (max-width: 600px) {
    padding: 20px;
    margin-bottom: 400px;
    margin-top: calc(10vh);
  }
  @media (min-width:320px) and (max-width: 900px){
    margin-bottom: 500px !important;
  }
`;
