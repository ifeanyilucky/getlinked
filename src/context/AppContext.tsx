import React, { createContext, useReducer } from 'react';

const initialState = {};

const AppContext = createContext(initialState);

const reducer = (state: object, action: any) => {
  switch (action.type) {
    default:
      return state;
  }
};
const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  );
};

export default AppProvider;
