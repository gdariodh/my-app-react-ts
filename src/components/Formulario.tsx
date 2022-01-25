import React, { ChangeEvent, useState } from "react";

export const Formulario = () => {

 const [formulario, setFormulario] = useState({
     email:'',
     nombre: ''
 });

//  destructuracion del event.target // para que agarra ts el handle hay que espeficicar que esta leyendo un input ChangeEvent<HTMLInputElement>
 const handleChange = ({target}: ChangeEvent<HTMLInputElement>) => {
   
    const { name, value } = target;

    setFormulario({
        ...formulario,
        [name] : value
    })

 }


  return (
    <form autoComplete="off">
      <div className="mb-3">
        <label className="form-label">Email:</label>
        <input  type="email" className="form-control" name="email" onChange={handleChange}/>
      </div>

      <div className="mb-3">
        <label className="form-label">Nombre:</label>
        <input type="text" className="form-control" name="nombre" onChange={handleChange}/>
      </div>

      <pre>{JSON.stringify(formulario)}</pre>
    </form>
  );
};
