import { useState, useContext } from 'react';
import { toast } from 'react-toastify';
import { useNavigate, Link } from 'react-router-dom';
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Grid,
} from '@material-ui/core';
import Header from '../../components/header';
import Footer from '../../components/footer';
import styled from 'styled-components';
import useSignUp from '../../hooks/api/useSignUp';
import useSignIn from '../../hooks/api/useSignIn';
import UserContext from '../../contexts/UserContext';
import LogoImg from '../../assets/images/friends.png';

export default function SignOut() {
  const { setUserData } = useContext(UserContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();
  const { signUpLoading, signUp } = useSignUp();
  const { signIn } = useSignIn();
  async function handleSubmit(event) {
    event.preventDefault();
    if (password !== confirmPassword) {
      toast('As senhas devem ser iguais!');
    } else {
      try {
        await signUp(email, password);
        nextLogin(email, password);
        toast('Inscrito com sucesso!');
        navigate('/sign-in');
      } catch (error) {
        toast('Não foi possível fazer o cadastro!');
      }
    }
  };
  async function nextLogin(event) {
    event.preventDefault();
    try {
      const userData = await signIn(email, password);
      setUserData(userData);
      navigate('/');
      toast('Login realizado com sucesso!');
    } catch (err) {
      toast('Não foi possível fazer o login!');
    }
  };

  return (
    <Main>
      <Header/>
      <Contein>
        <Container maxWidth="sm">
          <Box mt={4} textAlign="center">
            <Logo src={LogoImg} alt="Event Logo" width="120px" />
            <Typography variant="h4">Cadastro</Typography>
          </Box>
          <Box mt={4}>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    label="E-mail"
                    type="text"
                    fullWidth
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Senha"
                    type="password"
                    fullWidth
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Repita sua senha"
                    type="password"
                    fullWidth
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="secondary"
                    fullWidth
                    disabled={signUpLoading}
                  >
                    Cadastrar
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Box>
          <Box mt={4} textAlign="center">
            <Typography variant="body1">
              <Link to="/login"> Já está inscrito? Faça login</Link>
            </Typography>
          </Box>
        </Container>
      </Contein>
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

const Contein = styled.section`
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
  & > div > div > p > a {
    word-break: break-word;
    font-size:18px;
    text-align:left;
    border-color:#ffffff; 
    color:#ffffff; 
    text-shadow:8px 20px 6px rgba(42,42,42,.90);
    margin:10px 10px 10px 0px;
    width: 100%;
  }
  & > div > div > form > div > div > div > label {
    color: #fff !important;
    font-size:23px;
    height: 90px;
    font-family: "Lexend Deca", sans-serif;
    font-family: 'Inter', sans-serif;
    font-family: 'Montserrat', sans-serif;
    font-family: 'Permanent Marker', cursive;
  }
  & > div > div > form > div > div > div > div >input {
    color: #fff;
    margin-top: 32px;
    font-size:16px;
    border-width:2px;
    border-radius:9px;
    border-style:outset;
    font-family: 'Montserrat', sans-serif;
    font-family: 'Permanent Marker', cursive;
  }
  & > div > div > form > div > div > button  {
    color: #fff;
    margin-top: 32px;
    font-size:16px;
    border-width:2px;
    border-radius:9px;
    border-style:outset;
    font-family: 'Montserrat', sans-serif;
    font-family: 'Permanent Marker', cursive;
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
  @media (max-width: 600px) {
    padding: 20px;
    margin-bottom: 400px;
    margin-top: calc(10vh);
  }
  @media (min-width:320px) and (max-width: 900px){
    margin-bottom: 500px !important;
  }
`;
