var pgp = require('pg-promise')();
var express = require('express');
var router = express.Router();

function DbExecutor(db){
    this.db = db;
    this.q = "";
    this.arr = [];
}

DbExecutor.run = function(dbExec, u, p){
    return dbExec.run(u, p);
}

DbExecutor.prototype.run = function(u, p){
    this.q="SELECT * FROM users WHERE name = '$1' AND password = '$2'";
    this.arr=[u,p];
    return this.db.query(this.q, this.arr);
}

router.post('/login/auth', function(req, res) {

    var u = req.body.username;
    var p = req.body.password;

    logger.error("Tried to login attempt from user = " + u);
    
    //auth.js#do_auth
    var db = pgp("postgres://postgres:postgres@127.0.0.1" + "/" + "vulnerablenode");
    
    return DbExecutor.run(new DbExecutor(db), u, p);
});