import thunk from "redux-thunk"
import configureStore from 'redux-mock-store';
import { AddIngredientAsyn, deleteIngredientAsyn, listIngredientAsyn } from "../../../redux/actions/ingredientsActions";



const middlewares = [thunk]
const mockStore = configureStore(middlewares)
const initialState={}
let store = mockStore(initialState)

describe("Pruebas a la accion sincronica de agregar ingredient", () => {
  beforeEach(()=>{
    store=mockStore(initialState)
  })
const ingredient = {
  product: "Limon",
  brand: "pajarito",
  items: "1",
  quantity: "1",
  price: "3.5",
}
test('Agregar un ingrediente Async',async()=>{
  await store.dispatch(AddIngredientAsyn(ingredient))
})
})