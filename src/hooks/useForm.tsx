import { useState, ChangeEvent } from "react";

export const useForm = <T extends Object>(initState: T) => {
  const [values, setValues] = useState(initState);

  //  destructuracion del event.target 
  // para que agarre ts el handle hay que espeficicar que esta leyendo un input ChangeEvent<HTMLInputElement>
  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;

    // tecnica clasica event.target.name: event.target.value
    setValues({
      ...values,
      [name]: value,
    });
  };

  return {
    values,
    handleChange,
  };
};
