// import { type } from "@testing-library/user-event/dist/type"
import { types } from "../../../redux/types/types"

describe('Pruebas a types',()=>{
  test('Comparar objetos de types', ()=>{
    expect(types).toEqual({
      login: 'login',
      logout: 'logout',
      newIngredient: "Nuevo Ingrediente",
      listIngredient: "Listar Ingredientes",
      register: 'Registrar Usuarios'
    })
  })
})