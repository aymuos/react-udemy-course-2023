const express =  require('express')
const app = express()

app.set("view engine" , "ejs" )

app.get("/", (req,res) =>{
    console.log("here")
    // res.sendStatus(500)
    // res.send("Hi")
    // res.status(500).status("Hi").json({message: "Error"})
    // res.download("index.js")

    //res.render("index")
    // to render html files we use res.render 

    res.render("index", { text : "World"})


})

const userRouter = require("./routes/users")

app.use("/users",userRouter)

app.listen(3000)