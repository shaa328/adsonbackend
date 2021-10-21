const multer = require('multer');

const upload = multer({
dest:'upload',
limits:{
fileSize:100000000 /*100mb*/,
}, 
fileFilter(req,file,cb){
if(!file.originalname.endsWith('.zip'))
return cb(new Error('File format is not Supported'));
cb(undefined,true)

} 
});

app.post('/upload',upload.single('upload'),async(req,res)=>{
res.send()
},(err,req,res,next)=>res.status(404).send({error:err.message})) 