import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Aquí puedes enviar los datos a tu backend o hacer cualquier otra acción necesaria
  };

  return (
    <div className="App">
      <h1>Formulario Android</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </label>
        <label>
          Mensaje:
          <textarea name="message" value={formData.message} onChange={handleChange}></textarea>
        </label>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default App;
