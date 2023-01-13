import React, { useReducer, createContext } from "react";

//REDUCER
import * as AccountReducer from "./reducers/users_reducer";
import * as SignInReducer from "./reducers/login_reducer";

//ACTION
import * as logInAction from "./action/login_action";
import * as usersAction from "./action/users_action";

//CONTEXT
const Context = createContext();

function ContextState({ children }) {
  const [stateAccount, dispatchAccount] = useReducer(
    AccountReducer.reducer,
    AccountReducer.initialState
  );

  const [stateSignIn, dispatchSignIn] = useReducer(
    SignInReducer.reducer,
    SignInReducer.initialState
  );

  return (
    <Context.Provider
      value={{
        stateAccount,
        dispatchAccount,
        stateSignIn,
        dispatchSignIn,
        logInAction,
        usersAction
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { Context, ContextState };
