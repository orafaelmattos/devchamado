import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom';
import { useState, useContext } from 'react';
import '../SingUp/singup.css';
import { AuthContext } from '../../contexts/auth';

export default function SingUp() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const {signUp, loadingAuth} = useContext(AuthContext);

    async function handleSubmit(e){
      e.preventDefault();

      if(name !== '' && email !== '' && password !== ''){
        await signUp(email, password, name);
      }
    }

    return (
      <div className="container-center">
        <div className='login'>
          <div className='login-area'>
            <Link to='/'><img src={logo} alt='Logo sistema de chamados' /></Link>
          </div>

          <form onSubmit={handleSubmit}>

            <h1>Nova conta</h1>

            <input type='text'
            placeholder='Seu nome'
            value = {name}
            onChange={(e) => setName(e.target.value)} />

            <input type='text'
            placeholder='Digite seu email'
            value = {email}
            onChange={(e) => setEmail(e.target.value)} />

            <input type='password'
            placeholder='Digite sua senha'
            value = {password}
            onChange={(e) => setPassword(e.target.value)} />

            <button type='submit'>
              {loadingAuth ? 'Carregando...' : "Cadastrar"}
            </button>
          </form>

          <Link to='/'>Já possui uma conta? Faça o login</Link>

        </div>
      </div>
    );
  }