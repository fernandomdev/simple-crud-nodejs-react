import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios';

const Update = () => {

  // para redireccionar
  const navigate = useNavigate();

  // para llamar la id del get method
  const location = useLocation();
  const book_id = location.pathname.split("/")[2];

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
      console.log(book_id);
      await axios.put("http://localhost:8800/books/"+book_id, book);
      navigate("/");
    }catch (err){
      console.log(err);
    }
  }

  // lo que se renderiza
  return (
    <div className="container">
      <h1>Editar Libro</h1>
      <form action="">
        <input type="text" name="book_title" onChange={handleChange} placeholder='Título' autoComplete='off'/>
        <input type="text" name="book_description" onChange={handleChange} placeholder='Descripción' autoComplete='off'/>
        <input type="text" name="book_cover" onChange={handleChange} placeholder='Imagen' autoComplete='off'/>
      </form>
      <div className="button_container">
        <button><Link to="/">Cancelar</Link></button>
        <button onClick={handleSaveClick}>Editar</button>
      </div>
    </div>
  )
}

export default Update