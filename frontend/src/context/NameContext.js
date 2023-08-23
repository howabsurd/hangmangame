import { createContext, useReducer } from "react";

export const NameContext = createContext();

export const nameReducer = (state, action) => {
  switch (action.type) {
    case "SET_Name":
      return {
        name: action.payload,
      };

    default:
      return state;
  }
};

export const NameContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(nameReducer, {
    name: null,
  });

  return (
    <NameContext.Provider value={{ ...state, dispatch }}>
      {children}
    </NameContext.Provider>
  );
};
