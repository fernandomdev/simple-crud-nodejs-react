import express from 'express';
import mysql from 'mysql';
import cors from 'cors';

const app = express();

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "test_crud_react"
})

app.use(express.json());

//npm i cors
app.use(cors());

app.get("/", (req, res) => {
    res.json("Hello this is the backend");
})

app.get("/books", (req, res) => {
    const sql = "SELECT * FROM books";
    db.query(sql, (err, data) => {
        if(err){
            return res.json(err);
        } else {
            return res.json(data);
        }
    })
})

app.post("/books", (req, res) => {
    const sql = "INSERT INTO books (book_title, book_description, book_cover) VALUES (?)";
    const values = [req.body.book_title, req.body.book_description, req.body.book_cover];
    db.query(sql, [values], (err, data) => {
        if(err){
            return res.json(err);
        } else {
            return res.json("El libro ha sido creado correctamente!");
        }
    })
})

app.delete("/books/:id", (req, res) => {
    const book_id = req.params.id;
    const sql = "DELETE FROM books WHERE book_id = ?";
    const values = [book_id];
    db.query(sql, [values], (err, data) => {
        if(err) {
            return res.json(err);
        } else {
            return res.json("El libro ha sido eliminado correctamente!");
        }
    })
})

app.put("/books/:id", (req, res) => {
    const book_id = req.params.id;
    const sql = "UPDATE books SET book_title = ?, book_description = ?, book_cover = ? WHERE book_id = ?";
    const values = [req.body.book_title, req.body.book_description, req.body.book_cover];
    db.query(sql, [...values, book_id], (err, data) => {
        if (err) {
            return res.json(err);
        } else {
            return res.json("Libro actualizado correctamente!");
        }
    })
})

app.listen(8800, () => {
    console.log("Conectado al Backend!");
})