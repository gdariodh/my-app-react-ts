import { useState } from "react";
import { Timer } from "./Timer";

export default function TimerPadre() {

  const [milisegundos, setMilisegundos] = useState(1000);

  return (
    <div>
      <span>Milisegundos {1000}</span>

      <br />


     <button className="btn btn-outline-success" onClick={() => setMilisegundos(1000)}>1000</button>

     <button className="btn btn-outline-success" onClick={() => setMilisegundos(2000)}>2000</button>

{/* pasar props con TS */}
      <Timer milisegundos={milisegundos}/>
    </div>
  );
}
