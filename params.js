var express=require("express")
var app=express()
var fs=require("fs");

port=3007

app.get("/products",(req,res)=>{
   fs.readFile('index.json','utf-8',(err,data)=>
{
    if(err)
    {
        res.send("ERror")
    }
    else
    {
        res.send(data)
    }
})
})

app.get("/products/:id",(req,res)=>{
    
    fs.readFile('index.json','utf-8',(err,data)=>
        {
            if(err)
            {
                res.send("ERror")
            }
            else
            {
                var data1=JSON.parse(data)
                var filterdata=data1.filter((val)=>{
                    return val.id==req.params.id
                })
                // console.log(filterdata);
                res.send(filterdata)
                
            }
        })
})

app.listen(port,()=>{
    console.log("hi server is started")
})