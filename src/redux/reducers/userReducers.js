import { types } from "../types/types"


export const userReducers = (state = {}, action) => {
  switch (action.type) {
    case types.login:
      return {
        email: action.payload.email,  //nombrarlo email
        password: action.payload.password, 
        logged:true
      }
    case types.logout:
      return {
        logged:false
      }
    case types.register:
      return {
        nombre: action.payload.nombre,
        email: action.payload.email,
        password: action.payload.password,
        password2: action.payload.password2,
      }

    default:
      return state
  }
}