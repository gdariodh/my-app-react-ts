import { useForm } from '../hooks/useForm';

interface FormData {
    postal: string,
    ciudad: string 
}

export const Formulario2 = () => {

 const { values,handleChange} = useForm<FormData>({
     postal: '',
     ciudad: ''
 });

 const { postal, ciudad } = values;

  return (
    <form autoComplete="off">
      <div className="mb-3">
        <label className="form-label">Codigo postal:</label>
        <input
          type="text"
          className="form-control"
          name="postal"
          onChange={handleChange}
          value={postal}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Ciudad:</label>
        <input
          type="text"
          className="form-control"
          name="ciudad"
          onChange={handleChange}
          value={ciudad}
        />
      </div>

      <pre>{JSON.stringify(values)}</pre>
    </form>
  );
};
