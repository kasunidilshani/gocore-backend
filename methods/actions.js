var User = require('../models/user')
var Activity = require('../models/activity')
var Hotel = require('../models/hotel')
// var ActivePlan = require('../models/activePlan')
// var RequestedPlan = require('../models/requestedPlan')
// var FinishedPlan = require('../models/finishedPlan')
var RemovePlan = require('../models/removePlan')
var jwt = require('jwt-simple')
var config = require('../config/dbconfig')

var functions = {
    addNew: function (req, res) {
        if ((!req.body.name) || (!req.body.password)) {
            res.json({success: false, msg: 'Enter all fields'})
        }
        else {
            var newUser = User({
                name: req.body.name,
                password: req.body.password
            });
            newUser.save(function (err, newUser) {
                if (err) {
                    res.json({success: false, msg: 'Failed to save'})
                }
                else {
                    res.json({success: true, msg: 'Successfully saved'})
                }
            })
        }
    },

    authenticate: function (req, res) {
        User.findOne({
            name: req.body.name
        }, function (err, user) {
                if (err) throw err
                if (!user) {
                    res.status(403).send({success: false, msg: 'Authentication Failed, User not found'})
                }

                else {
                    user.comparePassword(req.body.password, function (err, isMatch) {
                        if (isMatch && !err) {
                            var token = jwt.encode(user, config.secret)
                            res.json({success: true, token: token})
                        }
                        else {
                            return res.status(403).send({success: false, msg: 'Authentication failed, wrong password'})
                        }
                    })
                }
        }
        )
    },

    getinfo: function (req, res) {
        if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
            var token = req.headers.authorization.split(' ')[1]
            var decodedtoken = jwt.decode(token, config.secret)
            return res.json({success: true, msg: 'Hello ' + decodedtoken.name})
        }
        else {
            return res.json({success: false, msg: 'No Headers'})
        }
    },

    addActivity: function (req, res) {
        if ((!req.body.activity) || (!req.body.place) || (!req.body.description)) {
            res.json({success: false, msg: 'Enter all fields'})
        }
        else {
            var newActivity = Activity({
                activity: req.body.activity,
                place: req.body.place,
                description: req.body.description
            });
            newActivity.save(function (err, newActivity) {
                if (err) {
                    res.json({success: false, msg: 'Failed to save'})
                }
                else {
                    res.json({success: true, msg: 'Successfully saved'})
                }
            })
        }
    },  
        
viewActivity: async function  (res){
    try{
        const activities = await Activity.find()
        res.json(activities)
    }
    catch(err){
        res.send('Error'+err)
    }
},

viewActivity1: async function  (res){
    try{
        const activity = await Activity.find({ activity: "Hiking" })
        res.json(activity)
    }
    catch(err){
        res.send('Error'+err)
    }
},

addHotel: function (req, res) {

    if ((!req.body.hotelName) || (!req.body.noOfRooms) || (!req.body.location) || (!req.body.manager) || (!req.body.phnNo)) {
        res.json({success: false, msg: 'Enter all fields'})
    }

    else {
        var newHotel = Hotel({
            hotelName: req.body.hotelName,
            noOfRooms: req.body.noOfRooms,
            location: req.body.location,
            manager: req.body.manager,
            phnNo: req.body.phnNo
        });
        newHotel.save(function (err, newHotel) {
            if (err) {
                res.json({success: false, msg: 'Failed to save'})
            }
            else {
                res.json({success: true, msg: 'Successfully saved'})
            }
        })
    }
},

addActivePlan: function (req, res) {
    if ((!req.body.mainDest) || (!req.body.description)) {
        res.json({success: false, msg: 'Enter all fields'})
    }
    else {
        var newActivePlan = Hotel({
            mainDest: req.body.mainDest,
            description: req.body.description,
        });
        newActivePlan.save(function (err, newActivePlan) {
            if (err) {
                res.json({success: false, msg: 'Failed to save'})
            }
            else {
                res.json({success: true, msg: 'Successfully saved'})
            }
        })
    }
},

// addRequestedPlan: function (req, res) {
//     if ((!req.body.mainDest) || (!req.body.description)) {
//         res.json({success: false, msg: 'Enter all fields'})
//     }
//     else {
//         var newRequestedPlan = Hotel({
//             mainDest: req.body.mainDest,
//             description: req.body.description,
//         });
//         newRequestedPlan.save(function (err, newRequestedPlan) {
//             if (err) {
//                 res.json({success: false, msg: 'Failed to save'})
//             }
//             else {
//                 res.json({success: true, msg: 'Successfully saved'})
//             }
//         })
//     }
// },

// addFinishedPlan: function (req, res) {
//     if ((!req.body.mainDest) || (!req.body.description)) {
//         res.json({success: false, msg: 'Enter all fields'})
//     }
//     else {
//         var newFinishedPlan = Hotel({
//             mainDest: req.body.mainDest,
//             description: req.body.description,
//         });
//         newFinishedPlan.save(function (err, newFinishedPlan) {
//             if (err) {
//                 res.json({success: false, msg: 'Failed to save'})
//             }
//             else {
//                 res.json({success: true, msg: 'Successfully saved'})
//             }
//         })
//     }
// },


viewHotel: async function (res) {
    try{
        const guideviewHotel = await Hotel.find(hotelName)
        res.json(guideviewHotel)
    }
    catch(err){
        res.send('Error'+err)
    }
},

viewActive: async function (req, res) {
    try{
        const guideCooperateHotels = await Hotel.find()
        res.json(guideCooperateHotels)
    }
    catch(err){
        res.send('Error'+err)
    }
},

viewRemovePlan: async function (req, res) {
    try{
        const guideRemovePlan = await RemovePlan.find()
        res.json(guideRemovePlan)
    }
    catch(err){
        res.send('Error'+err)
    }
},

viewActivePlan: async function (req, res) {
    try{
        const guideCooperateHotels = await ActivePlan.find()
        res.json(guideCooperateHotels)
    }
    catch(err){
        res.send('Error'+err)
    }
},
viewRequestedPlan: async function (req, res) {
    try{
        const guideCooperateHotels = await RequestedPlan.find()
        res.json(guideCooperateHotels)
    }
    catch(err){
        res.send('Error'+err)
    }
},
    
// viewFinishedPlan: async function (req, res) {
//     try{
//         const guideCooperateHotels = await FinishedPlan.find()
//         res.json(guideCooperateHotels)
//     }
//     catch(err){
//         res.send('Error'+err)
//     }
// },
    
}


module.exports = functions