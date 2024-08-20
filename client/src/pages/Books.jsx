import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Books = () => {

  // almacena la lista de libros
  const [Books, setBooks] = useState([]);

  // aqui se llaman a los libros
  useEffect(()=>{
    const fetchAllBooks = async ()=>{
      try{
        const { data: res } = await axios.get("http://localhost:8800/books");
        setBooks(res);
      } catch(err){
        console.log(err);
      }
    }
    fetchAllBooks();
  }, []);

  // para eliminar
  const handleDelete = async (id) => {
    try{
      await axios.delete("http://localhost:8800/books/"+id);
      window.location.reload();
    } catch(err) {
      console.log(err);
    }
  }

  // aqui se renderizan los libros
  return (
    <div className="container">
      <h1>Lista de Libros</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Titulo</th>
            <th>Descripción</th>
            <th>Imagen</th>
            <th colSpan={2}>Acción</th>
          </tr>
        </thead>
        <tbody>
          {Books.map((book, i) => (
            <tr key={i}>
              <td>{book.book_id}</td>
              <td>{book.book_title}</td>
              <td>{book.book_description}</td>
              <td>{book.book_cover}</td>
              <td><button onClick={()=>handleDelete(book.book_id)}>Eliminar</button></td>
              <td><Link to={`/update/${book.book_id}`}>Editar</Link></td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="button_container">
        <button><Link to="/add">Agregar nuevo</Link></button>
      </div>
    </div>
  )

}

export default Books