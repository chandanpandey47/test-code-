exp=require("express")
app=exp()
app.listen(1234)
mon=require("mongojs")
bp=require("body-parser")
app.use(bp.json())
con=mon("mongodb://sam:sam123@ds143573.mlab.com:43573/bat730db")
///To get Document 
app.get("/getdata",function(req,res){
    con.tbl_user.find(function(err,resu){
        if(err)
        res.send(err)
        else
        res.send(resu)
    })
})
//////Insert
app.post("/insrec",function(req,res){
    //console.log(req.body)
 con.tbl_user.save(req.body)
 res.send("Inserted...")
})
//////Del all 
app.delete("/delall",function(req,res){
con.tbl_user.remove()
res.send("Deleted...")
})
////Del one
app.post("/delone",function(req,res){
//console.log(req.body)
con.tbl_user.remove(req.body)
res.send("Removed")
})
///////Update
app.post("/updaterec",function(req,res){
    var rbody=req.body
    con.tbl_user.update(rbody[0],rbody[1])
    res.send("Updated...")
})



