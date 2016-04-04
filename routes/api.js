var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var mongodb = require('mongodb');

var Appointment = require('../models/Appointment.js');

router.get('/appointment-all', function (req, res, next) {
    Appointment.find(function (err, data) {
        if (err) return next(err);
        res.json(data);
    });
});

router.get('/appointment-username/:username', function (req, res) {
    Appointment.find({"Username": req.params.username}, function(err, user) {
        if (err)
            res.send(err);
        res.json(user);
    });
});

router.get('/appointment-barbername/:barbername', function (req, res) {
    Appointment.find({"Barbername": req.params.barbername}, function(err, user) {
        if (err)
            res.send(err);
        res.json(user);
    });
});

router.post('/newappointment', function(req, res, next) {
    Appointment.create(req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

var User = require('../models/User.js');

router.get('/user-all', function (req, res, next) {
    User.find(function (err, data) {
        if (err) return next(err);
        res.json(data);
    });
});

router.get('/user/:name', function (req, res) {
    User.find({"name": req.params.name}, function(err, user) {
        if (err)
            res.send(err);
        res.json(user);
    });
});

router.post('/newuser', function(req, res, next) {
    User.create(req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

var Shop = require('../models/Shop.js');

router.get('/shop-all', function (req, res) {
    Shop.find(function (err, data) {
        if (err) return next(err);
        res.json(data);
    });
});
/*
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
*/

/*
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
*/

router.get('/shop/:username', function (req, res) {
    Shop.find({"username": req.params.username}, function(err, user) {
        if (err)
            res.send(err);
        res.send(user);
    });
});

router.get('/test', function (req, res) {
    res.json({
        "test": "success002"
    });
});

/*
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
*/

module.exports = router;
