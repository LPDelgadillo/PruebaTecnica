import React from 'react'
import facebook from '../assets/logotipo-facebook.png'
import google from '../assets/logoGoogle.png'
import { useForm } from '../hooks/useForm'
import { useDispatch } from 'react-redux'
import logo from '../assets/image.png'
import { Link } from 'react-router-dom'
import { loginEmailyPassAsync, loginFacebook, loginGoogleAsync } from '../redux/actions/userActions'

const IniciarSesion = () => {

  const dispatch = useDispatch()
  const [formValue, handleInputChange, reset] = useForm({
    email:'',
    password:'',
  })

  const {email, password} = formValue  
  
  const handleSubmit = (e) =>{
    e.preventDefault()
    dispatch(loginEmailyPassAsync(email, password))
    reset()
  }
  const handleGoogle=()=>{
    dispatch(loginGoogleAsync())
  }

  const handleFacebook = () => {
    dispatch(loginFacebook())
  }

  return (
    <div className='contPrinc flex'>
      <div className='contForm'>
        <form onSubmit={handleSubmit} className='form flex'>
          <img className='logo' alt='LogoRestaurant' src={logo} width="120px"/>
          <h2 className='title'>Iniciar sesión</h2>
          <label 
          className='primerRegistro'
            >
            <b>Dirección de correo electrónico </b>
          </label>
          <input 
          className='camposRegistro' 
          type="email"
          aria-label='email'
          name='email'
          value={email}
          onChange={handleInputChange} />
          <label 
          className='primerRegistro'
            >
            <b>Contraseña</b>
          </label>
          <input 
          // required
          className='camposRegistro'
          type="password"
            aria-label='password'
            name='password'
            value={password}
          onChange={handleInputChange} />
          <label className='primerRegistro'>
            <b>Inicia sesión con:</b>
          </label>
          <div className='logos'>
            <button 
            className='btnsLogos'
            onClick={handleGoogle}>
            <img alt='' src={google} width='30px'/></button>
            <button 
            className='btnsLogos'
            onClick={handleFacebook}>
            <img alt='' src={facebook} width='30px' /></button>
          </div>
          <button 
          className='btn' type='submit'>Continuar</button>
          <p className='condiciones'>Al continuar aceptas las <span className='span'> Condiciones de Uso </span> y el<span className='span'> Aviso de Privacidad</span> de Amazonas.</p>
          <div>
            <p>&#10148;<span className='span'>¿Necesitas ayuda?</span></p>
          </div>
        </form>
      </div>
      <div className='constSecund flex'>
        <p>¿Eres Nuevo ?</p>
        <Link to="/registro"><button className='btnCrearCuenta'>Crea tu cuenta</button></Link>
      </div>
    </div>
  )
}

export default IniciarSesion