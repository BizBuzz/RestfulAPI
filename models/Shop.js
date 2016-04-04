/**
 * Created by lilinxin on 4/3/16.
 */
var mongoose = require('mongoose');

var shopSchema = new mongoose.Schema({
    username: String,
    name: String,
    Address: String,
    Badge: [{BName: String}]
})

module.exports = mongoose.model('shop', shopSchema);
