import { useReducer } from "react";
import { AuthContext } from "./AuthContext";
import { authReducer } from "./AuthReducer";
import { types } from "../types/types";

 
const init = () => {
  //dentro de la funcion de inicializacion del useReducer se puede llamar la funcion para guardar los datos del usuario dentro del local Storage
  const user = JSON.parse(localStorage.getItem("user"));
  return {
    logged: !!user,
    user: user
  };
};

export const AuthProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(authReducer, {}, init);

  const login = async (name = "") => {
    const user = {
      id: "abc",
      name: name
    };
    const action = {
      types: types.login,
      payload: user
    };
    //solo se pueden guardar Strings dentro del local storage, por eso utiliza el JSON.stringify
    localStorage.setItem('user', JSON.stringify( user ) );
    dispatch(action);
  };

  const logout = () => {
    localStorage.removeItem('user');
    const action = { type: types.logout };
    dispatch(action);
  }
  return (
    <AuthContext.Provider value={{ ...authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
