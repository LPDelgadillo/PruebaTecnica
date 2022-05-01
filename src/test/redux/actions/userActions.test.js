import { loginSincronico, logoutSync, registerSync } from "../../../redux/actions/userActions"
import { types } from "../../../redux/types/types"

describe('Pruebas al userActions', ()=>{
  test('Validar loginSync',()=>{
      const email = "lizdelga001@gmail.com"
      const password ="123123"
    const loginAction = loginSincronico(email, password)

  expect(loginAction).toEqual({
    type: types.login,
    payload: {email, password}
  })
  })
  test('Validar Logout', ()=>{
    const logoutAction = logoutSync()
    expect(logoutAction).toEqual({type:types.logout})
  })
  test('Validar register',()=>{
    const nombre = "Paola"
    const email = "lizdelga001@gmail.com"
    const password = "123123"
    const password2 = "123123"
    
    const registerAction = registerSync(nombre, email, password, password2)
    expect(registerAction).toEqual({
      type: types.register,
      payload: {nombre, email, password, password2 }
    })
  })
})