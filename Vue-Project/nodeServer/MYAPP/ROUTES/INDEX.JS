var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    let sendParams = [
        {
            name: 'zhangsan'
        }
    ]
    res.send(sendParams);
});

module.exports = router;
