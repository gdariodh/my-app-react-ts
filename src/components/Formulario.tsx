import { useForm } from "../hooks/useForm";

// como se va a mandar el objeto, la referencia
interface FormData {
  email: string;
  nombre: string;
  edad: number;
}

export const Formulario = () => {
  const { values, handleChange } = useForm<FormData>({
    email: "",
    nombre: "",
    edad: 30,
  });

  const { email, nombre, edad } = values;

  return (
    <form autoComplete="off">
      <div className="mb-3">
        <label className="form-label">Email:</label>
        <input
          type="email"
          className="form-control"
          name="email"
          onChange={handleChange}
          value={email}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Nombre:</label>
        <input
          type="text"
          className="form-control"
          name="nombre"
          onChange={handleChange}
          value={nombre}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Edad:</label>
        <input
          type="text"
          className="form-control"
          name="edad"
          onChange={handleChange}
          value={edad}
        />
      </div>

      <pre>{JSON.stringify(values)}</pre>
    </form>
  );
};
