var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var removePlanSchema = new Schema({
    mainDest: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model('RemovePlan', removePlanSchema)