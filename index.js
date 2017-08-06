var express=require('express')
var Random=require('random-js')
var fs=require('fs')
var app=express()

PORT='9999'
image_directory='/tmp/cats/'

rand_engine=Random.engines.nativeMath

var files = fs.readdirSync(image_directory);
var path = require('path');

pictures=[]

for(var i in files) {
   if(path.extname(files[i]) === ".jpg") {
        pictures.push( path.join(image_directory, files[i]) )
   }
}

app.get('*',function(req, res){
    i=Random.integer(0,pictures.length-1)(rand_engine)
    res.sendFile(pictures[i])
})

app.listen(PORT, function(){
    console.log("Started...")
})