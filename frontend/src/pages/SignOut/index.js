/* eslint-disable jsx-a11y/anchor-is-valid */
import {  useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export default function SignOut() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();
  async function submit(event) {
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
  }

  return (
    <main>
      <nav>
        <img alt="Event Logo" width="60px" />
        <h4>Friends</h4>
      </nav>
      <section>
        <h5>Inscrição</h5>
        <form onSubmit={submit}>
          <input label="E-mail" type="text" fullWidth value={email} onChange={e => setEmail(e.target.value)} />
          <input label="Senha" type="password" fullWidth value={password} onChange={e => setPassword(e.target.value)} />
          <input label="Repita sua senha" type="password" fullWidth value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
          <button type="submit" color="primary" fullWidth disabled={false}>Inscrever</button>
        </form>
      </section>
      <article>
        <a to="/sign-in">Já está inscrito? Faça login</a>
      </article>
    </main>
  );
}
