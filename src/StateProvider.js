import React, { createContext, useReducer, useContext } from "react";

//setup data layer
export const StateContext = createContext();

//build a provider
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//this is how we inside of a component
export const useStateValue = () => useContext(StateContext);
