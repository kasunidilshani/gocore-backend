const express = require('express');
const mongodb = require('mongodb');
// guide_reg = require("../models/guideReg.js");
const router = express.Router();

 router.get('/',async(req,res) => {
    const id = req.params._id;
    const users = await loadPostsCollection();
    const query = { _id: ObjectId(id) };
    res.send(await users.findOne(
        {query},
        {name: res.body.text},
        {password: res.body.password}
      
   ));
 });
// 
 
// router.post('/', async (req,res)=>{
//     const posts = await loadPostsCollection();
//     await posts.insertOne({
//         text: req.body.text,
//         createdAt: new Date()
//     });
//     res.status(201).send();
    // try{
    //     await guide_reg.save
    //     console.log(guide_reg)
    // }catch(err){
    //     res.status(201).send();
    // }

// });

// router.delete('/', async (req,res)=>{
//     const posts = await loadPostsCollection();
//     await posts.deleteOne({_id: new mongodb.ObjectId(req.params.id)});
//     res.status(200).send();
// });

 async function loadPostsCollection(){
     const client = await mongodb.MongoClient.connect
     ('mongodb+srv://denuka:3nm8vlNxidugJvQl@gocore.6dk9f.mongodb.net/?retryWrites=true&w=majority', {
         useNewUrlParser: true
     })

    return client.db('gocoredb').collection('users');
 }

module.exports = router;