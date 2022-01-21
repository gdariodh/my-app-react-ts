import { Counter } from "./components/Counter";
import Usuario from "./components/Usuario";
import TimerPadre from "./components/TimerPadre";


function App() {
  return (
    <>
   <h1>React + TypeScript</h1>
    
    <hr />

    <Counter/>

    <hr />

    <Usuario/>

    <h1>UseEffect + useRef</h1>
    
    <hr />

    <TimerPadre/>
    </>
  );
}

export default App;
