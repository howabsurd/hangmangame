import { NameContext } from "../context/NameContext";
import { useContext } from "react";

export const useNameContext = () => {
  const context = useContext(NameContext);

  if (!context) {
    throw Error(
      "useWorkoutsContext must be used inside a WorkoutsContextProvider"
    );
  }

  return context;
};
