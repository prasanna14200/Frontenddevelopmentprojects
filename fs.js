const { isUtf8 } = require('buffer')
const fs=require('fs')
//fs.readFile("demo.txt","utf8",(err , data)=>{
  //  if(err) {
    //    console.log(err)
    //}
    //console.log(data)

//})

//fs.writeFile("example.html","utf8",(err)=>{
  //     if(err){
    //    console.log(err)
      // }
       //console.log("file created successfully")
//})

//const contentsample="my name is prasanna and i creating dynamic context"



//fs.rename("example.html","newchangefile",(err)=>{
  //   if(err){
    //    console.log(err)
     //}else{
       // console.log("modified is success")
     //}

//})
fs.unlink('newchangefile',(err)=>{
     if(err){
        console.log(err)
     } else {
        console.log("file deleted success")
     }
})




