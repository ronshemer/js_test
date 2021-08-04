var pgp = require('pg-promise')();
var express = require('express');
var router = express.Router();

router.post('/login/auth', function(req, res) {

    var u = req.body.username;
    var u = req.body.password;

    logger.error("Tried to login attempt from user = " + u);
    
    //auth.js#do_auth
    var db = pgp("postgres://postgres:postgres@127.0.0.1" + "/" + "vulnerablenode");

    // var q = "SELECT * FROM users WHERE name = '" + "user" + "' AND password ='" + "password" + "';";

    // return db.one(q);
    return db.query("SELECT * FROM users WHERE name = $1 AND password = $2;",[u, p]);
});