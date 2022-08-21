const express = require('express')
const actions = require('../methods/actions')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('Hello World')
})

router.get('/dashboard', (req, res) => {
    res.send('Dashboard')
})

// POST Method
router.post('/adduser', actions.addNew)
router.post('/authenticate', actions.authenticate)
router.post('/activities', actions.addActivity)
router.post('/addhotels', actions.addHotel)
// router.post('/addActivePlans', actions.addActivePlan)
// router.post('/addRequestedPlans', actions.addRequestedPlan)
// router.post('/addFinishedPlans', actions.addFinishedPlan)


//GET Method
router.get('/getinfo', actions.getinfo)
router.get('/getactivities', actions.viewActivity)
router.get('/getactivities1', actions.viewActivity1)
router.get('/viewHotels', actions.viewHotel)
router.get('/viewActivePlans', actions.viewActivePlan)
// router.get('/viewRequestedPlans', actions.viewRequestedPlan)
// router.get('/viewFinishedPlans', actions.viewFinishedPlan)
router.get('/viewRemovePlans', actions.viewRemovePlan)


module.exports = router

