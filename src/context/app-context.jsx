import { createContext, useContext, useReducer } from "react";

export const AppContext = createContext({});

export function useAppContext() {
  return useContext(AppContext);
}

function reducer(state, action) {
  switch (action.type) {
    case "change-title":
      return {
        ...state,
        title: action.title != '' ? action.title : initialState.title ,
        count: state.count,
      };

    case "count-plus":
      return {
        ...state,
        title: state.title,
        count: state.count + 1,
      };

    case "count-min":
      return {
        ...state,
        title: state.title,
        count: state.count - 1,
      };

    default:
      throw new Error(`Unhandled Action Type: ${action.type}`);
  }
}

const initialState = {
  title: "Context + Reducer",
  count: 16,
};

export const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  const AppContextValue = [state, dispatch];

  return (
    <AppContext.Provider value={AppContextValue}>
      {children}
    </AppContext.Provider>
  );
};
