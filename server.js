var express    = require('express');
var app        = express();               
var bodyParser = require('body-parser');
var mongoose   = require('mongoose');
//const cors = require('cors')
var port = process.env.PORT || 8080;   
// var Book =  require('./app/models/book');
// var bookController = require('./controllers/bookController');
mongoose.connect('mongodb+srv://oabdalle:BostonCeltics@cluster0-psdet.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true,
useUnifiedTopology: true });
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
//app.use(cors({origin: 'http://localhost:4200'}));
// var router = express.Router();    
// router.use(function(req, res, next) {
//     console.log('Something is happening.');
//     next();
// });
// router.get('/', function(req, res) {
//     res.render('home');
// });
const authRoute = require('./routes/auth');


app.use('/api/user', authRoute);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port); 