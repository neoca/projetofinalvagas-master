import { Link } from 'react-router-dom'
import React, { useContext } from 'react'

import styles from './Navbar.module.css'

import Logo from '../../assets/img/logo.png'

/* contexts */
import { Context } from '../../context/UserContext'

/* hooks */

function Navbar() {
  const { authenticated, logout } = useContext(Context)

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar_logo}>
        <img src={Logo} alt="Coder Friends" />
        <h2>Coder Friends</h2>
      </div>
      
      <ul>

        <Link to="/Carosel/CaroselNoticias.jsx">Noticias</Link>
        <li>
          <Link to="/">Candidatar</Link>
        </li>

        {authenticated ? (
          <>
            <li>
              <Link to="/vacant/myapplications">Minhas candidaturas</Link>
            </li>
            <li>
              <Link to="/vacant/myvacants">Minhas vagas</Link>
            </li>
            <li>
              <Link to="/user/profile">Meu Perfil</Link>
            </li>
            <li onClick={logout}>Sair</li>
          </>
        ) : (
          <>
            <li>
              <Link to="/login">Entrar</Link>
            </li>
            <li>
              <Link to="/register">Registar</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  )
}

export default Navbar
