import { Counter } from "./components/Counter";
import Usuario from "./components/Usuario";
import TimerPadre from "./components/TimerPadre";
import { ContadorRed } from "./components/useReducer/ContadorRed";
import { Formulario } from "./components/Formulario";

function App() {
  return (
    <>
      <h1>React + TypeScript</h1>

      <hr />

      <Counter />

      <hr />

      <Usuario />

      <h1>UseEffect + useRef</h1>

      <hr />

      <TimerPadre />

      <hr />

      <h2>useReducer</h2>

      <ContadorRed />

      <hr />

      <h2>Custon hooks</h2>
      <Formulario />
      <br />
      <br />
      <br />
      <br />
    </>
  );
}

export default App;
