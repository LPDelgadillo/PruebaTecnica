import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore'
import { baseDatos } from '../../Firebase/firebaseConfig'
// import { db } from '../../firebase/firebaseConfig'
import { types } from '../types/types'

// Editar
export const editIngredientAsyn = (id, ingredient) => {
  return async (dispatch) => {
    const ingredientRef = doc(baseDatos, "Rissoto", id)
    await updateDoc(ingredientRef, ingredient)
    dispatch(listIngredientAsyn())
  }
}


// Eliminar
export const deleteIngredientAsyn = (id) => {
  return async (dispatch) => {
    await deleteDoc(doc(baseDatos, "Rissoto", id))
    dispatch(listIngredientAsyn())
  }
}

// Listar
export const listIngredientAsyn = () => {
  return async (dispatch) => {
    const query = await getDocs(collection(baseDatos, "Rissoto"))
    const ingretients = []
    query.forEach((doc) => {
      const data = doc.data()
      const DocId = doc.id;
      const ingredient = {
        id: DocId,
        product: data.product,
        brand: data.brand,
        items: data.items,
        price: data.price,
        quantity: data.quantity
      }
      ingretients.push(ingredient)
    })
    dispatch(listIngredientSyn(ingretients))
  }
}

export const listIngredientSyn = (ingredient) => {
  return {
    type: types.listIngredient,
    payload: ingredient
  }
}

// Subir Nuevo Ingrediente
export const AddIngredientAsyn = (Ingredient) => {
  return (dispatch) => {
    addDoc(collection(baseDatos, "Rissoto"), Ingredient)
      .then(dispatch(AddIngredientSyn(Ingredient)))
      .then(dispatch(listIngredientAsyn()))
  }
}

export const AddIngredientSyn = (Ingredient) => {
  return {
    type: types.newIngredient,
    payload: Ingredient
  }
}