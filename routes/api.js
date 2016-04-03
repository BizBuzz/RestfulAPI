var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var mongodb = require('mongodb');

var appointmentSchema = new mongoose.Schema({
    Username: String,
    BarberName: String,
    Time: Date
});

var appointment = mongoose.model('appointment', appointmentSchema);

router.get('/appointment-all', function (req, res, next) {
    mongodb.MongoClient.connect('mongodb://bizbuzz:123456@ds025399.mlab.com:25399/bizbuzz', function (err, db) {
        if (err) res.send(err);
        db.collection('appointment').find().toArray(function (err, results) {
            if (err) res.send(err);
            res.json(results);
            db.close();
        });
    });
});

router.get('/appointment-username/:username', function (req, res, next) {
    mongodb.MongoClient.connect('mongodb://bizbuzz:123456@ds025399.mlab.com:25399/bizbuzz', function (err, db) {
        if (err) res.send(err);
        db.collection('appointment').find({"Username": req.params.username}).toArray(function (err, results) {
            if (err) res.send(err);
            res.json(results);
            db.close();
        });
    });
});

router.get('/appointment-barbername/:barbername', function (req, res, next) {
    mongodb.MongoClient.connect('mongodb://bizbuzz:123456@ds025399.mlab.com:25399/bizbuzz', function (err, db) {
        if (err) res.send(err);
        db.collection('appointment').find({"Barbername": req.params.barbername}).toArray(function (err, results) {
            if (err) res.send(err);
            res.json(results);
            db.close();
        });
    });
});


var userSchema = new mongoose.Schema({
    name: String,
    Age: Number,
    LoyaltyPoints: Number,
    FavoriteBarber: String
})

var user = mongoose.model('user', userSchema);

router.get('/user-all', function (req, res, next) {
        mongodb.MongoClient.connect('mongodb://bizbuzz:123456@ds025399.mlab.com:25399/bizbuzz', function (err, db) {
        if (err) res.send(err);
        db.collection('user').find().toArray(function (err, results) {
                if (err) res.send(err);
                res.json(results);
                db.close();
            });
    });
});

router.get('/userall', function (req, res, next) {
    user.find(function (err, data) {
        if (err) return next(err);
        res.json(data);
    });
});

router.get('/user/:name', function (req, res, next) {
    mongodb.MongoClient.connect('mongodb://bizbuzz:123456@ds025399.mlab.com:25399/bizbuzz', function (err, db) {
        if (err) res.send(err);
        db.collection('user').find({"name": req.params.name}).toArray(function (err, results) {
            if (err) res.send(err);
            res.json(results);
            db.close();
        });
    });
});

router.post('/user', function (req, res, next) {
    user.create(req.body, function (err, data) {
        if (err) return next(err);
        res.json(data);
    })
});

var shopSchema = new mongoose.Schema({
    username: String,
    name: String,
    Address: String,
    Badge: [{BName: String}]
})

var shop = mongoose.model('shop', shopSchema);

router.get('/shop-all', function (req, res, next) {
    mongodb.MongoClient.connect('mongodb://bizbuzz:123456@ds025399.mlab.com:25399/bizbuzz', function (err, db) {
        if (err) res.send(err);
        db.collection('shop').find().toArray(function (err, results) {
            if (err) res.send(err);
            res.json(results);
            db.close();
        });
    });
});

router.get('/shop/:username', function (req, res, next) {
    mongodb.MongoClient.connect('mongodb://bizbuzz:123456@ds025399.mlab.com:25399/bizbuzz', function (err, db) {
        if (err) res.send(err);
        db.collection('shop').find({"username": req.params.username}).toArray(function (err, results) {
            if (err) res.send(err);
            res.json(results);
            db.close();
        });
    });
});

router.get('/test', function (req, res) {
    res.json({
        "test": "success002"
    });
});


router.get('/user/:username/:password', function (req, res, next) {
    user.find({
        username: req.params.username
    }, function (err, data) {
        console.log(req.params.password);
        console.log(data.password);
        if (err) return next(err);
        if (data.password != req.params.password) return res.sendStatus(401);
        activity.find({
            userid: req.params.username
        }, function (err, data) {
            if (err) return next(err);
            res.json(data);
        })
    })

});

module.exports = router;
