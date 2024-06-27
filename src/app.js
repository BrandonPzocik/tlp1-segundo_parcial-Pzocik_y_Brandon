const express = require("express")
const bd = require("./bd")

const app = express();

app.use(express.json())

app.listen(4000, () => {
    console.log("Servidor corriendo")
})