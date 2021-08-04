var pgp = require('pg-promise')();
var express = require('express');
var router = express.Router();

function run1(db, q, arr){
    return run2(db, q, arr);
}

function run2(db, q, arr){
    return run3(db, q, arr);
}

function run3(db, q, arr){
    return run4(db, q, arr);
}

function run4(db, q, arr){
    return run5(db, q, arr);
}

function run5(db, q, arr){
    return run6(db, q, arr);
}

function run6(db, q, arr){
    return db.query(db, q, arr);
}

router.post('/login/auth', function(req, res) {

    var u = req.body.username;
    var p = req.body.password;

    logger.error("Tried to login attempt from user = " + u);
    
    //auth.js#do_auth
    var db = pgp("postgres://postgres:postgres@127.0.0.1" + "/" + "vulnerablenode");
    var q = "SELECT * FROM users WHERE name = '" + u + "' AND password ='" + p + "';";
    var arr = [];
    return run1(db, q, arr);
});