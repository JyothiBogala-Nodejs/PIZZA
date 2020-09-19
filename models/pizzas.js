var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var pizzasSchema = new Schema({
        title: {type: String, required: true },
        price: {type: String, required: true },
        description: {type: String, required: true },
        image: {type: String, required: true }
    },
    {
        timestamps: true
}); 

var Pizza = mongoose.model('Pizza', pizzasSchema);

module.exports = Pizza;