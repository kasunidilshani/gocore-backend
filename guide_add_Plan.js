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
    const guide_add_plan = await loadPostsCollection();
    await guide_add_plan.insertMany([{
        Title: req.body.text,
        tourDuration: req.body.text,
        Duration: req.body.text,
        // addPhoto: req.file.addPhoto,
        startingCity: req.body.text,
        nextDestination: req.body.text,
        transportMethod: req.body.text,
        Accomodation: req.body.text
    }]);
    
// Title,tourDuration,Duration,startingCity,nextDestination,transportMethod,Accomodation

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

    return client.db('gocoredb').collection('guide_add_plan');
 }

module.exports = router;