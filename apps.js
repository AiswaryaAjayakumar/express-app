var express=require('express')
var bodyParser = require('body-parser')


var app = express()
app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.get('/',(req,res)=>{

    res.send("WELCOME")
})


app.post('/add',(req,res)=>{
    var getNum1= parseFloat (req.body.num1)
    var getNum2= parseFloat (req.body.num2)
    var sum=getNum1+getNum2

    res.json({'sum':sum})
})
app.post('/house',(req,res)=>{
var getName=req.body.name
var getRoll=req.body.roll

    res.json({'name':getName,'roll':getRoll})
})
app.listen(process.env.PORT||3003,()=>{
    console.log("Server started at http://localhost:3003/")
})