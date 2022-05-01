import { IngredientReducer } from "../../../redux/reducers/reducers"
import { types } from "../../../redux/types/types"


describe("Pruebas al Ingresients reducer", () => {
  test('Verificar el ingrediente agregado', () => {
    const initialState = {
      ingredient : []
    }
    const ingredient = {
      product: "Limon",
      brand: "pajarito",
      items:"1", 
      quantity:"1", 
      price:"3.5",
    }
    const action = {
      type: types.newIngredient,
      payload: ingredient
    }
    const state = IngredientReducer(initialState, action)
    console.log(state)
    expect(state.ingredient).toEqual([ingredient])
  })

})