const { ObjectId } = require('mongodb')
const mongo=require('../shared/connect')

///dealinng with Vendor
module.exports.getvendors= async(req,res,next)=>{
    try{
         var data= await mongo.selectedDB.collection('vendor').find().toArray();
        res.send(data)

    }catch(err){
        console.log(err)
        res.status(500).json(err)
    }
}

module.exports.getvendor= async(req,res,next)=>{
    
    try{
        var data= await mongo.selectedDB.collection('vendor').findOne({_id:ObjectId(req.params.id)});
        res.send(data)
    }catch(err){    
        console.log(err)
        res.status(500).json(err)
    }
}

module.exports.createvendor= async(req,res,next)=>{
    try{
         var data= await mongo.selectedDB.collection('vendor').insertOne({...req.body});
        res.send(data)

    }catch(err){
        console.log(err)
        res.status(500).json(err)
    }
}



/// Artists
module.exports.getartist= async(req,res,next)=>{
    try{
         var data= await mongo.selectedDB.collection('artist').findOne({_id:ObjectId(req.params.id)});
        res.send(data)

    }catch(err){
        console.log(err)
        res.status(500).json(err)
    }
}


module.exports.createartist= async(req,res,next)=>{
    try{
         var data= await mongo.selectedDB.collection('artist').insertOne({...req.body});
        res.send(data)

    }catch(err){
        console.log(err)
        res.status(500).json(err)
    }
}


//company details
module.exports.aboutus= async(req,res,next)=>{
    try{
         var data= await mongo.selectedDB.collection('aboutus').findOne();
        res.send(data)

    }catch(err){
        console.log(err)
        res.status(500).json(err)
    }
}

module.exports.createAboutUs= async(req,res,next)=>{
    try{
         var data= await mongo.selectedDB.collection('aboutus').insertOne({...req.body});
        res.send(data)

    }catch(err){
        console.log(err)
        res.status(500).json(err)
    }
}


module.exports.createBlog= async(req,res,next)=>{
    try{
         var data= await mongo.selectedDB.collection('blog').insertOne({...req.body});
        res.send(data)

    }catch(err){
        console.log(err)
        res.status(500).json(err)
    }
}


module.exports.getBlog= async(req,res,next)=>{
    
    try{
        var data= await mongo.selectedDB.collection('blog').find().toArray();
        res.send(data)
    

    }catch(err){
        console.log(err)
        res.status(500).json(err)
    }
    
}