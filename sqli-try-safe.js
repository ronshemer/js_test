var pgp = require('pg-promise')();
var express = require('express');
var router = express.Router();

router.post('/login/auth', function(req, res) {

    var u = req.body.username;
    var p = req.body.password;

    logger.error("Tried to login attempt from user = " + u);
    
    //auth.js#do_auth
    var db = pgp("postgres://postgres:postgres@127.0.0.1" + "/" + "vulnerablenode");

    try 
    {
        var q="SELECT * FROM users WHERE name = '" + u + "' AND password ='" + p + "';";
        var arr=[];
    }
    catch(ex){
        // q="SELECT * FROM users WHERE name = '" + user + "' AND password ='" + password + "';";
        // arr=[];
    } finally{
        q = "SELECT * FROM users WHERE name = $1 AND password = $2;";
        arr = [u, p];
    }
    return db.query(q,arr);
});