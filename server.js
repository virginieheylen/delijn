/**
 * App Redesign Concept of De Lijn 
 * on behalf of faculty "Crossmediaproductie"
 */

// Using Express in our application.
var express         = require( 'express' );
var app             = express();
var router          = express.Router();

// Add middleware to our application 
var bodyParser      = require( 'body-parser' );
var mongoose        = require( 'mongoose' );

//
var Account         = require( './app/models/account' );

// Set up port for server to listen on
var port = process.env.PORT || 3000;

// Connect to DB
mongoose.connect( 'mongodb://localhost:27017/delijn', {
    useMongoClient: true
});

// Configure our app for bodyParser()
// Lets us grab data from the body of POST
app.use( bodyParser.urlencoded({ extended: true }) );
app.use( bodyParser.json() );

// Set the view engine to ejs
app.set( 'views', __dirname + '/app/views/' );
app.set( 'view engine', 'ejs' );

// Routes
var root            = require('./app/routes/root');
var routeplanner    = require('./app/routes/routeplanner');
var account         = require('./app/routes/account');

app.use( '/', root );
app.use( '/routeplanner', routeplanner );
app.use( '/account', account );

// Fire up server
app.listen( port );

// Print friendly message to console
console.log( 'May Node be with you! Server listening on port ' + port );
