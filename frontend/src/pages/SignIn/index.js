/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import {
  FaGithub,
} from 'react-icons/fa';

import { getAuth, signInWithPopup, GithubAuthProvider } from 'firebase/auth';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const provider = new GithubAuthProvider();
  const navigate = useNavigate();

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
      navigate('/dashboard');
      toast('Login realizado com sucesso!');
    } catch (err) {
      toast('Não foi possível fazer o login!');
    }
  }  

  return (
    <main>
      <nav>
        <img alt="Event Logo" width="60px" />
        <h4>Friends</h4>
      </nav>
      <div>
        <div>Entrar</div>
        <form onSubmit={submit}>
          <input label="E-mail" type="text" fullWidth value={email} onChange={e => setEmail(e.target.value)} />
          <input label="Senha" type="password" fullWidth value={password} onChange={e => setPassword(e.target.value)} />
          <button type="submit" color="primary" fullWidth disabled={false}>Entrar</button>
        </form>
        <button onClick={submitGithub} color="primary" fullWidth disabled={false}><FaGithub></FaGithub>Github</button>
      </div>
      <div>
        <a to="/enroll">Não possui login? Inscreva-se</a>
      </div>
    </main>
  );
}
