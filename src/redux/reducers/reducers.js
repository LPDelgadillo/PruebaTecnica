import { types } from "../types/types";

const initialState = {
  ingredient:[]
}

export const IngredientReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.newIngredient:
      return {
        ingredient: [action.payload]
      }

    case types.listIngredient:
      return {
        ingredient: [...action.payload]
      }
    default:
      return state
  }
}
