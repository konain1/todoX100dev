
const express = require('express')

const {createTodo,updateTodo} = require('./types')
const {todoModel} = require('./db')
const app = express();

app.use(express.json())


app.get('/todos',async(req,res)=>{
    try {
        const createPayload = req.body;
    const payloadParse = createTodo.safeParse(createPayload)
    if(!payloadParse.success){
       return res.status(411).json({msg:'bad input'})
    }
    // put on mongodb
    await todoModel.create({
            title:createPayload.title,
            description:createPayload.description,
            completed:false
    })
    res.json({msg:"todo has been created    "})
    } catch (error) {
        
    }

    

})
app.post('/todo',async(req,res)=>{
    try {
        let todos = await todoModel.find();
        res.json({todos:todos})
        
    } catch (error) {
        res.json({msg:"server error"})
    }
    
})
app.put('/completed',async(req,res)=>{

    try {
        const updatePayload = req.body;
        const payloadParse = updateTodo.safeParse(updatePayload)
        if(!payloadParse.success){
           return res.status(411).json({msg:'you passed wrong input'})
        }
        // put on mongodb
        await todoModel.update({_id:req.body.id},{completed:true})
        res.json({msg:"marked as completed"})

    } catch (error) {
        res.json({msg:'internal error'})
    }
   

    
})
app.listen(3040,()=>console.log('server runs on port no 3040'))