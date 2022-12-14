const express = require('express')

const router = express.Router()


router.get("/",(req,res) => {
    res.send("User list")

})

// this will make all the root routes return the above text

router.get("/new",(req,res) => {
    res.send("User new form")
})

router.post('/',(req,res) => {
    res.send("Create users")
})

router.route("/:id").get((req,res) =>{
    res.send(`Get user with ID ${req}`)
})
.put((req,res) =>{
    res.send(`Get user with ID ${req}`)
})
.delete((req,res) =>{
    res.send(`Get user with ID ${req}`)
})

//22.00
router.param("id",(req,res,next,id)=>{
    console.log(id)
    next();
})
// for common base route you can chain all of them and take the method we need to use 


module.exports = router


