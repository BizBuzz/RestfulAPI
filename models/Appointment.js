/**
 * Created by lilinxin on 4/3/16.
 */
var mongoose = require('mongoose');

var AppointmentSchema = new mongoose.Schema({
    Username: String,
    Barbername: String,
    Time: Date
});

module.exports = mongoose.model('Appointment', AppointmentSchema);
