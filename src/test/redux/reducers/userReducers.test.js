import { userReducers } from "../../../redux/reducers/userReducers"
import { types } from "../../../redux/types/types"


describe("Pruebas al login reducer", ()=>{
  test('debe retornar el usuario logueado', ()=>{
    const initialState = {}
    const user = {
      email : "lizdelga001@gmail.com",
      password : "123456",
      logged: true
    }
    const action ={
      type: types.login,
      payload: user
    }
    const state = userReducers(initialState, action)
    console.log(state)
    expect(state).toEqual(user)
  })
  test('debe mostrar el usuario en false',()=>{
    const action={
      type:types.logout,
    }
    const state = userReducers({logged:false, email:"lizdelga001@gmail.com"}, action)
    expect(state).toEqual({logged:false})
  })
  test('debe mostrar el registro del usuario', () => {
    const initialState = {}
    const user = {
      nombre: "Paola",
      email:"lizdelga001@gmail.com",
      password:"123123",
      password2:"123123"
    }
    const action = {
      type: types.register,
      payload: user
    }
    const state = userReducers(initialState, action)
    console.log(state)
    expect(state).toEqual(user)
  })
  test('Validar el estado por defecto del login',()=>{
    const initialState = {
      email:'lizdelga@getDefaultNormalizer.com', 
      password:'123132'
    }
    const action = {
      type:types.noExiste
    }
    const state = userReducers(initialState, action)
    expect(state).toEqual(initialState)
  })
})