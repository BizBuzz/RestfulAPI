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


var User = require('../models/User.js');


/**
router.get('/userall', function (req, res, next) {
        mongodb.MongoClient.connect('mongodb://bizbuzz:123456@ds025399.mlab.com:25399/bizbuzz', function (err, db) {
        if (err) res.send(err);
        db.collection('users').find().toArray(function (err, results) {
                if (err) res.send(err);
                res.json(results);
                db.close();
            });
    });
});
 */

router.get('/user-all', function (req, res, next) {
    User.find(function (err, data) {
        if (err) return next(err);
        res.json(data);
    });
});

/*
router.get('/user/:name', function (req, res, next) {
    mongodb.MongoClient.connect('mongodb://bizbuzz:123456@ds025399.mlab.com:25399/bizbuzz', function (err, db) {
        if (err) res.send(err);
        db.collection('users').find({"name": req.params.name}).toArray(function (err, results) {
            if (err) res.send(err);
            res.json(results);
            db.close();
        });
    });
});
*/

router.get('/user/:name', function (req, res) {
    User.find({"name": req.params.name}, function(err, user) {
        if (err)
            res.send(err);
        res.json(user);
    });
});

router.post('/user', function (req, res) {
    var user = new User();
    user.name = req.body.name;
    user.Age = req.body.Age;
    user.LoyaltyPoints = req.body.LoyaltyPoints;
    user.FavoriteBarber = req.body.FavoriteBarber;
    user.save(function(err) {
        if (err)
            res.send(err);
        res.json({message : 'user created!'});
    });
});

router.post('/newuser', function(req, res, next) {
    User.create(req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
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
