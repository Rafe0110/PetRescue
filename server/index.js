var express = require('express');
var router = express.Router();
var app = express();
var MongoClient = require('mongodb').MongoClient;
var DB_CONN_STR = 'mongodb://localhost:27017/runoob';
router.get('/', function (req, res) {
    var selectData = function (db, callback) {
        //连接到表
        var collection = db.collection('site');
        //查询数据
        var whereStr = {"name": '菜鸟教程'};
        collection.find(whereStr).toArray(function (err, result) {
            console.log(error);
            return res.jsonp(result);
        });
    }

    MongoClient.connect(DB_CONN_STR, function (err, db) {
        console.log("连接成功！");
        selectData(db, function (result) {
            console.log(result);
            db.close();
        });
    });
})

module.exports = router;