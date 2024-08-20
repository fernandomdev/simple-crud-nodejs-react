import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';

const Add = () => {

  // para redireccionar
  const navigate = useNavigate();

  // aqui se almacenan y guardan los datos del form
  const [book, setBook] = useState({
    book_title: "",
    book_description: "",
    book_cover: ""
  });

  const handleChange = (e) => {
    setBook((prev) => ({...prev, [e.target.name]: e.target.value}));
  }

  // al submitear
  const handleSaveClick = async (e) => {
    e.preventDefault();
    try{
      await axios.post("http://localhost:8800/books", book);
      navigate("/");
    }catch (err){
      console.log(err);
    }
  }

  // lo que se renderiza
  return (
    <div className="container">
      <h1>Agregar Libro</h1>
      <form action="">
        <input type="text" name="book_title" onChange={handleChange} placeholder='Título' autoComplete='off'/>
        <input type="text" name="book_description" onChange={handleChange} placeholder='Descripción' autoComplete='off'/>
        <input type="text" name="book_cover" onChange={handleChange} placeholder='Imagen' autoComplete='off'/>
      </form>
      <div className="button_container">
        <button><Link to="/">Cancelar</Link></button>
        <button onClick={handleSaveClick}>Crear</button>
      </div>
    </div>
  )
}

export default Add