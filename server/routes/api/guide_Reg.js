const express = require('express');
const mongodb = require('mongodb');
const router = express.Router();

//  router.get('/',async(req,res) => {
//     const posts = await loadPostsCollection();
//     res.send(await posts.find({}).toArray());
//  });
// 
// 
router.post('/', async (req,res)=>{
    const guide_reg = await loadPostsCollection();
    await guide_reg.insertMany([{
        fName: req.body.text,
        NIC: req.body.text,
        phnNo: req.body.number,
        password: req.body.password,
        Address: req.body.text,
        confPass: req.body.text
    }]);
        
    res.status(201).send();
    // try{
    //     await guide_reg.save
    //     console.log(guide_reg)
    // }catch(err){
    //     res.status(201).send();
    // }

});

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

    return client.db('gocoredb').collection('guide_reg');
 }

module.exports = router;