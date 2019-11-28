//Ones you need to verify

var express    = require('express');
var router = express.Router();
const verify = require('./verifyToken');
router.get('/', verify,(req, res) =>{
res.json({posts: {title: 'my first post', description: 'random data you shouldnt access' 
//res.send(req.user); If i wanted user
}
});
});

module.exports = router;