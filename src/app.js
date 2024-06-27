const express = require("express")
const bd = require("./bd")

const app = express();

app.use(express.json())

//obtner todos los libros
app.get("/books", (req, res) => {
    res.json(bd)
})
//obtener el book por su id 
app.get("/books/:id", (req, res)=> {
    const id = parseInt(req.params.id)
    const obtenerBook = bd.find( (book) => book.id === id) 
    res.json(obtenerBook)
})
//crear un nuevo book
app.post("/books", (req, res) => {
    const {id, titulo, autor, año} = req.body 
    const nuevoBook = bd.push( {id:id, titulo:titulo, autor:autor, año:año})
    res.json({mensaje:"book creado con exito"})
})
app.put("/books/:id", (req, res) => {
    const id = parseInt(req.params.id)
    const {titulo, autor, año} = req.body
    const actualizar = bd.find( (book) => book.id === id)
    actualizar.titulo = titulo 
    actualizar.autor = autor 
    actualizar.año = año 
    res.json({mensaje:"book actualizado con exito"})
    
})
//eliminar book
app.delete("/books/:id", (req, res) => {
    const id = parseInt(req.params.id)
    const obtenerBook = bd.find( (book) => book.id === id)
    const bookIndex = bd.indexOf(obtenerBook)
    const eliminarBook = bd.splice(bookIndex, 1)
    res.json({mensaje:"book eliminado con exito"})
})

app.listen(4000, () => {
    console.log("Servidor corriendo")
})