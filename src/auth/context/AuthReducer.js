import { types } from "../types/types";
//no se debe llamar funciones externas fuera del reducer, se deben de resolver con el state y la accion a resolver, nada más.
export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case types.login:
      return {
        ...state,
        logged: true,
        name: action.payload
      };
    case types.logout:
      return {
        logged: false
      };
    default:
      return state;
  }
};
