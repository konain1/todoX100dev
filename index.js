
const express = require('express')


const app = express();

app.use(express.json())
app.get('/todos',(req,res)=>{

})
app.post('/todo',(req,res)=>{
    
})
app.put('/completed',(req,res)=>{
    
})
app.listen(3040,()=>console.log('server runs on port no 3040'))