const express =require('express')
const userController = require('../Controller/userController')
const jwt=require('../Middleware/jwtMiddleware')

const router=new express.Router()
    router.post('/register',userController.registerController)
    router.post('/login',userController.loginControl)
    

module.exports = router