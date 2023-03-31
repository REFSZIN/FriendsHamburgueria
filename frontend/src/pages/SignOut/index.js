import { useState } from 'react';
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
export default function SignOut() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      toast('As senhas devem ser iguais!');
    } else {
      try {
        toast('Inscrito com sucesso! Por favor, faça login.');
        navigate('/sign-in');
      } catch (error) {
        toast('Não foi possível fazer o cadastro!');
      }
    }
  };

  return (
    <Main>
      <Header/>
      <Contein>
        <Container maxWidth="sm">
          <Box mt={4} textAlign="center">
            <Typography variant="h4">Inscrição</Typography>
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
                    color="primary"
                    fullWidth
                    disabled={false}
                  >
                    Inscrever
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Box>
          <Box mt={4} textAlign="center">
            <Typography variant="body1">
              Já está inscrito? <Link to="/login">Faça login</Link>
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

const Contein = styled.main`
  margin-top: 20vh;
`;
