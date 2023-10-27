const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())
app.use((req,res,next)=>{
    res.setHeader("Acces-Control-Allow-Origin","*")
    next()
})

app.use(express.json({limit:'10mb'}))

let db = require("./db/database")

app.post('/validatePassword',(req,res) => { 
    const {username , password} = req.body
    db.all(`select * from credentials where username = '${username}' and password = '${password}'`,(err,rows)=>{
        if(err){
            throw err;

        }
        if(rows.length > 0){
            res.send({validation:true})
        }else{
            res.send({validation:false})
        }
    })
})
app.listen(3001,()=> console.log('Listening at port 3001'))