import { useReducer } from "react";

const initialState = {
  contador: 0,
};

// actions
type ActionType =
  | { type: "incrementar" }
  | { type: "decrementar" }
  | { type: "custom"; payload: number };

// reducer
const contadorReducer = (state: typeof initialState, action: ActionType) => {
  switch (action.type) {
    case "incrementar":
      return {
        ...state,
        contador: state.contador + 1,
      };

    case "decrementar":
      return {
        ...state,
        contador: state.contador - 1,
      };

    case "custom":
      return {
        ...state,
        contador: action.payload,
      };

    default:
      return state;
  }
};

export const ContadorRed = () => {
  const [state, dispatch] = useReducer(contadorReducer, initialState);

  return (
    <>
      <h2>Contador: {state.contador}</h2>

      <div style={{ display: "flex", gap: "1rem" }}>
        <button
          className="btn btn-outline-primary"
          onClick={() =>
            dispatch({
              type: "incrementar",
            })
          }
        >
          +1
        </button>
        <button
          className="btn btn-outline-danger"
          onClick={() =>
            dispatch({
              type: "decrementar",
            })
          }
        >
          -1
        </button>
        <button
          className="btn btn-outline-danger"
          onClick={() =>
            dispatch({
              type: "custom",
              payload: 100,
            })
          }
        >
          100
        </button>
      </div>
    </>
  );
};
