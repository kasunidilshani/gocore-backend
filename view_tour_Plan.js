const express = require('express');
const mongodb = require('mongodb');
const router = express.Router();

 router.get('/',async(req,res) => {
    const guide_add_plan = await loadPostsCollection();
    res.send(await guide_add_plan.find({}).toArray());
 });
// 

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

    return client.db('gocoredb').collection('guide_add_plan');
 }

module.exports = router;