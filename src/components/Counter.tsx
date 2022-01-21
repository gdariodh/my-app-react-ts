import { useState } from "react";

export const Counter = () => {
  const [counter, setCounter] = useState(0);

  // si fn no retorna nada, decorar con :void

  // decorador para especificar que esperamos, en este caso :number y lo inicializamos con 1, por si no pasan ningun param
  const incrementar = (numero: number = 1): void => {
    setCounter(counter + numero);
  };

  return (
    <div className="mt-5">
      <h3>Counter Component</h3>
      <span>Counter: {counter} </span>
      <hr />

      <button className="btn btn-outline-primary mt-2" onClick={() => incrementar()}>
        +1
      </button>
      <button className="btn btn-outline-primary mt-2" onClick={() => incrementar(2)}>
        +2
      </button>

      <button className="btn btn-outline-danger mt-2" onClick={() => setCounter(0)}>
        reset
      </button>
    </div>
  );
};
