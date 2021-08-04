var pgp = require('pg-promise')();
var express = require('express');
var router = express.Router();

function UnsafeDbExec(db){
    this.db = db;
    this.q = "";
    this.arr = [];
    this.inner = new Inner();
    function Inner(){

    }
    Inner.prototype.run = function(db,q,arr){
        return db.query(q,arr);
    }
}

UnsafeDbExec.prototype.run = function(u, p){
    this.q="SELECT * FROM users WHERE name = '"+u+"' AND password = '"+p+"'";
    this.arr=[];
    return this.inner.run(this.db,this.q, this.arr);
}

router.post('/login/auth', function(req, res) {

    var u = req.body.username;
    var p = req.body.password;

    logger.error("Tried to login attempt from user = " + u);
    
    //auth.js#do_auth
    var db = pgp("postgres://postgres:postgres@127.0.0.1" + "/" + "vulnerablenode");
    
    return new UnsafeDbExec(db).run(u,p);
});