var MongoClient = require('mongodb').MongoClient;
MongoClient.connect("mongodb://localhost:27017/",{useUnifiedTopology:true},(err,client)=>{
    let db= client.db('test')
    db.collection('user').insertOne({name:'李芳芳',age:'22'})
    client.close()
})