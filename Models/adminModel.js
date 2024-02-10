const mongoose=require('mongoose')

const validator= require('validator')

const adminSchema = new mongoose.Schema({
    username:{
        type:String,
        require:true,
        min:[3,'must be atleast 3 characters, got only {value}']
    },
    password:{
        type:String,
        require:true
    }
})

const admins = mongoose.model('admins',adminSchema)

module.exports = admins