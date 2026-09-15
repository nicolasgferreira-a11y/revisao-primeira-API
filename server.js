const express = require("express")
const cors = require("cors")

const app = express()
app.use(express.json())

let Alunos = [
{id: 1, nome: "Alice", curso: "Desenvolvimento de Sistemas"},
{id: 2, nome: "Brenda", curso: "Redes de computadores"},
{id: 3, nome: "Brenno", curso: "Administração"},
{id: 4, nome: "Carlos", curso: "Desenvolvimento de Sistemas"},
]

app.get("/",(req, res)=>{
    res.json({
        mensagem: "API alunos funcionando!"
    })
})

const PORTA = 3000;

app.listen(PORT, () => {
    console.log(`Servidor iniciado com sucesso!`);
    console.log(`http://localhost:${PORT}`);
});

