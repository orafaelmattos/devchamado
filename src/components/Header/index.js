import { useContext } from 'react';
import { AuthContext } from '../../contexts/auth';
import avatarImg from '../../assets/avatar.png';
import { Link } from 'react-router-dom';
import { FiHome, FiUser, FiSettings } from 'react-icons/fi';

import './header.css';

export default function Header(){

    const { user } = useContext(AuthContext);

    return(
        <div className="sidebar">
            <div>
                <img alt="Foto do usuário" src={user.avatarUrl === null ? avatarImg : user.avatarUrl}/>
            </div>

            <Link to='/dashboard'>
                <FiHome color='#FFF' size={24} />
                Chamados
            </Link>
            <Link to='/customers'>
                <FiUser color='#FFF' size={24} />
                Clientes
            </Link>
            <Link to='/profile'>
                <FiSettings color='#FFF' size={24} />
                Perfil
            </Link>
        </div>
    )
}