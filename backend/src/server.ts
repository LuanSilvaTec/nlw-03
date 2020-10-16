import express, { response } from 'express'
import './database/connection'


const app= express();
app.use(express.json())

app.get('/users', ()=>{
   return response.json({message:"Teste"})
})

app.listen(3333);