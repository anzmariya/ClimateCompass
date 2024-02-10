require('dotenv').config()

const exp = require('express')

const cors = require('cors')

const router=require('./Routes/router')

require('./DB/connection.js')

const weatherServer = exp()

weatherServer.use(cors())

// middleware: it controls the request response cycle(only here)
weatherServer.use(exp.json())

weatherServer.use(router)

const PORT = 4500 || process.env.PORT

weatherServer.listen(PORT,()=>{
    console.log(`server running successfully at ${PORT}`);
})

weatherServer.get('/',(req,res)=>{
    res.send(`<h1>weatherServer running successfully at ${PORT}</h1>`)
})