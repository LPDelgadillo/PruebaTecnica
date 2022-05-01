import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth"
import { facebook, google } from "../../Firebase/firebaseConfig"
import { types } from "../types/types"

export const loginEmailyPassAsync = (email, password) => {
  return (dispatch) => {
    const auth = getAuth()
    signInWithEmailAndPassword(auth, email, password)
      // console.log(email, password, 'Dentro de asincronico')
      .then(({ user }) => {
        dispatch(loginSincronico(user.email, user.password))
        console.log("Usuario Autorizado")
      })
      .catch(error => {
        console.warn(error, 'Usuario NO autorizado')
      })
  }
}
export const loginGoogleAsync = () => {
  return (dispatch) => {
    const auth = getAuth()
    signInWithPopup(auth, google)
      .then(({ user }) => {
        dispatch(loginSincronico(user.email, user.password))
        console.log(user, 'Usuario Autorizado, loginGoogleAsync')
      })
      .catch(error => {
        console.warn(error, 'No Autorizado LoginGoogleAsync')
      })
  }
}

export const loginFacebook = () => {
  return (dispatch) => {
    const auth = getAuth()
    signInWithPopup(auth, facebook)
      .then(({ user }) => {
        //  dispatch(loginSincronico(user.email, user.password))
        console.log(user, 'Usuario autorizado')
      })
      .catch(error => {
        console.warn(error, 'No autorizado')
      })
  }
}

export const loginSincronico = (email, password) => {
  return {
    type: types.login,
    payload: {
      email,
      password
    }
  }
}

export const registerSync = (nombre, email, password, password2) => {
  return {
    type: types.register,
    payload: {
      nombre, email, password, password2
    }
  }
}

export const registerAsync = (nombre, email, password, password2) => {
  return (dispatch) => {
    const auth = getAuth()
    createUserWithEmailAndPassword(auth, email, password)
      .then(async ({ user }) => {
        console.log(user)
        await updateProfile(auth.currentUser, { displayName: nombre })
        dispatch(registerSync(nombre, email, password, password2))
        console.log("Usuario Agregado")
      })
      .catch(error => {
        console.log(error)
      })
  }
}

export const logoutSync = () => {
  return {
    type: types.logout
  }
}

export const logoutAsync = () => {
  return (dispatch) => {
    const auth = getAuth()
    signOut(auth)
      .then(({ user }) => {
        dispatch(logoutSync)
        console.log(user, 'Adios')
      })
      .catch(error => {
        console.log(error)
      })
  }
}

