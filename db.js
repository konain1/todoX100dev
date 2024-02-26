
const mongoose = require('mongoose')
const { boolean } = require('zod')

const todoSchema = new mongoose.Schema({
    title:String,
    description:String,
    completed:boolean
})

const todoModel = mongoose.model('todos',todoSchema)

module.exports = todoModel