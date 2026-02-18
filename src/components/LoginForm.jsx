import React, { useState } from 'react';
import './LoginForm.css';

const LoginForm = () => {
  // Estado para manejar los datos del formulario
  const [formData, setFormData] = useState({
    tipoDocumento: '',
    numeroDocumento: '',
    correo: ''
  });

  // Manejar cambios en los inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos enviados:", formData);
    alert(`Ingresando con: ${formData.numeroDocumento}`);
    // Aquí iría tu lógica de conexión con la API
  };

  return (
    <div className="login-container">
      {/* Icono de Usuario (SVG) */}
      <div className="profile-icon">
        <svg viewBox="0 0 24 24">
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
        </svg>
      </div>

      <form onSubmit={handleSubmit}>
        
        {/* 1. Tipo de Documento */}
        <div className="input-group">
          <select 
            name="tipoDocumento" 
            value={formData.tipoDocumento} 
            onChange={handleChange} 
            required
          >
            <option value="" disabled>Tipo de Documento</option>
            <option value="CC">CC</option>
            <option value="CD">CD</option>
            <option value="CE">CE</option>
            <option value="PT">PT</option>
            <option value="TI">TI</option>
          </select>
          <svg className="input-icon" viewBox="0 0 24 24">
            <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
          </svg>
        </div>

        {/* 2. Número de Documento */}
        <div className="input-group">
          <input 
            type="text" 
            name="numeroDocumento" 
            placeholder="Número de documento" 
            value={formData.numeroDocumento}
            onChange={handleChange}
            required 
            autoComplete="off" 
          />
          <svg className="input-icon" viewBox="0 0 24 24">
            <path d="M7 19h2v2H7v-2zm0-8h2v6H7v-6zm0-8h2v6H7V3zm6 16h2v2h-2v-2zm0-8h2v6h-2v-6zm0-8h2v6h-2V3zm6 16h2v2h-2v-2zm0-8h2v6h-2v-6zm0-8h2v6h-2V3z"/>
          </svg>
        </div>

        {/* 3. Correo Electrónico */}
        <div className="input-group">
          <input 
            type="email" 
            name="correo" 
            placeholder="Correo electrónico" 
            value={formData.correo}
            onChange={handleChange}
            required 
            autoComplete="off" 
          />
          <svg className="input-icon" viewBox="0 0 24 24">
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
          </svg>
        </div>

        {/* Botón Ingresar */}
        <button type="submit" className="btn-signin">INGRESAR</button>

        {/* Opciones extra */}
        <div className="options">
          <label>
            <input type="checkbox" /> Remember me
          </label>
          <a href="#" className="forgot-pass">Forgot password?</a>
        </div>

        {/* Footer */}
        <div className="footer">
          Not a member?
          <br />
          <a href="#" className="btn-create">Create account</a>
        </div>

      </form>
    </div>
  );
};

export default LoginForm;