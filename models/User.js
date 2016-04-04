var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    name: String,
    Age: Number,
    LoyaltyPoints: Number,
    FavoriteBarber: String
});

module.exports = mongoose.model('User', userSchema);