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
        
        Title: req.body.Title,
        Duration: req.body.Duration,
        startingCity: req.body.startingCity,
        Activities: req.body.Activities,
        nextDestination: req.nextDestination,
        transportMethod: req.body.transportMethod,
        Accomodation: req.body.Accomodation,
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

    return client.db('gocoredb').collection('guide_add_plan');
 }

module.exports = router;