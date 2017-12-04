var mongoose = require( 'mongoose' );
var Schema = mongoose.Schema;

var AccountSchema = new Schema({
    // @todo : Add all Account fields; e.g. email, ...
    firstname: String,
    lastname: String,
    avatar: String,
    subscription_id: String,
    subscription_start_date: Date,
    subscription_expiry_date: Date
});

module.exports = mongoose.model( 'Account', AccountSchema );
