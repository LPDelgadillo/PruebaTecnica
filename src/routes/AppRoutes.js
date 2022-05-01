import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';
// import { useDispatch } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import { loginEmailyPassAsync } from '../actions/userAction';
import IniciarSesion from '../pages/IniciarSesion';
import Registro from '../pages/Registro';
import DashboardRouters from './DashboardRouters';
import PrivateRoutes from './PrivateRoutes';
import PublicRouters from './PublicRouters';



export default function AppRoutes(){
  const [checking, setChecking] = useState(true)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  // const dispatch = useDispatch()
  useEffect(() => {
    const auth = getAuth()
    onAuthStateChanged(auth, (user)=>{
      if(user?.uid){
        // dispatch(loginEmailyPassAsync(user.uid, user.displayName))
        setIsLoggedIn(true)
      }else{
        setIsLoggedIn(false)
      }
      setChecking(false)
    })
  }, [setIsLoggedIn, setChecking]);
  
  if(checking){
    return(
      <h1>Espere...</h1>
    )
  }


  return (
    <BrowserRouter>
    <Routes>
      <Route path='/iniciarSesion' element={<PublicRouters isAut={isLoggedIn}><IniciarSesion /></PublicRouters>} />
      <Route path='/registro' element={<PublicRouters isAut={isLoggedIn}><Registro /></PublicRouters>} />
      <Route path='/*' element={<PrivateRoutes isAut={isLoggedIn}><DashboardRouters/></PrivateRoutes>}/>
    </Routes>    
    </BrowserRouter>
  )
}