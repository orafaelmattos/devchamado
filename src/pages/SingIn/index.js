import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom';
import { useState, useContext } from 'react';
import './singin.css';
import { AuthContext } from '../../contexts/auth';

export default function SingIn() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { signIn, loadingAuth } = useContext(AuthContext)

    async function handleSingIn(e){
      e.preventDefault();

      if(email !== '' && password !== ''){
        await signIn(email,password);
      }
    }
 
    return (
      <div className="container-center">
        <div className='login'>
          <div className='login-area'>
            <img src={logo} alt='Logo sistema de chamados' />
          </div>

          <form onSubmit={handleSingIn}>

            <h1>Entrar</h1>

            <input type='text'
            placeholder='Digite seu email'
            value = {email}
            onChange={(e) => setEmail(e.target.value)} />

            <input type='password'
            placeholder='Digite sua senha'
            value = {password}
            onChange={(e) => setPassword(e.target.value)} />

            <button type='submit' >{loadingAuth ? 'Carregando...' : 'Acessar'}</button>
          </form>

          <Link to='/register'>Não possui uma conta? Fazer cadastro</Link>

        </div>
      </div>
    );
  }