import React, { useState, useEffect } from 'react'
import '../styles/closk.scss';

const Clockhook = () => {
  
  const [fecha, setFecha] = useState(new Date());
  const [edad, setEdad] = useState(0);
  const user = {
    nombre: 'Edi',
    apellidos: 'Cuesta'
  };

  useEffect(() => {
    const timerID = setInterval(() => setFecha(new Date()), 1000);
    const edadM = () => {setEdad(edad +1 )};
    return () => {
      clearInterval(timerID);
      edadM();
    }
  });

  return (
    <div>
      <h2>
      Hora Actual:
      {fecha.toLocaleTimeString()}
      </h2>
      <h3>{user.nombre} {user.apellidos}</h3>
      <h1>Edad: {edad}</h1>
    </div>
  )
}

export default Clockhook;