import { useState } from 'react';

interface User {
    uid: string;
    name: string;
}

export default function Usuario() {

    // interface sirve para definir que va a recibir el useState -> setUser, es como la referencia estricta
  const [user, setUser] = useState<User>();

  const login  = () => {
      setUser({
          uid: 'ABDCS',
          name: 'Fernando Herrera',
      })
  }

  return (<div  >
      <h3>Usuario: useState</h3>

      <button onClick={login} className='btn btn-outline-primary'>
          Login
      </button>

      {!user ? (<pre className='mt-4'>No hay usuario</pre>) : (
      <pre className='mt-4'>{JSON.stringify(user)}</pre>

      )}

  </div>);
}
