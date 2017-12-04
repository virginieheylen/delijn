/**
 * App Redesign Concept of De Lijn 
 * on behalf of faculty "Crossmediaproductie"
 */

var express         = require( 'express' );
var app             = express();
var bodyParser      = require( 'body-parser' );
var mongoose        = require( 'mongoose' );
var Account         = require( './app/models/account' );

// Configure app for bodyParser()
// lets us grab data from the body of POST
app.use( bodyParser.urlencoded({ extended: true }) );
app.use( bodyParser.json() );

// Set up port for server to listen on
var port = process.env.PORT || 3000;

// Connect to DB
mongoose.connect( 'mongodb://localhost:27017/delijn', {
    useMongoClient: true
});

// API Routes
var router = express.Router();

// Routes will all be prefixed with /api
app.use( '/api', router );

// MIDDLEWARE -
// Middleware can be very useful for doing validations. 
// We can log things from here or stop the request from 
// continuing in the event that the request is not safe.
// Middleware to use for all requests:
router.use( function( req, res, next ) {
    console.log( 'Fyi, there is some processing currently going down ...' );
    next();
});

// Test Route
router.get( '/', function(req, res) {
    res.json({ message: 'Welcome to our API!' });
});

router.route( '/accounts' )

    .post( function( req, res ) {

        var account = new Account(); // New instance of an account
        
        account.firstname                   = req.body.firstname;
        account.lastname                    = req.body.lastname;
        account.avatar                      = req.body.avatar;
        account.subscription_id             = req.body.subscription_id;
        account.subscription_start_date     = req.body.subscription_start_date;
        account.subscription_expiry_date    = req.body.subscription_expiry_date;

        account.save( function( err ) {
            if ( err ) {
                res.send( err );
            }
            res.json({ message: 'Account successfully created.' });
        });
    })

    .get( function( req, res ) {
        Account.find( function( err, accounts ) {
            if ( err ) {
                res.send( err );
            }
            res.json( accounts ); 
        });
    });

router.route( '/account/:account_id' )

    .get( function( req, res ) {
        Account.findById( req.params.account_id, function( err, account ) {
            if ( err ) {
                res.send( err );
            }
            res.json( account );
        });
    });

router.route( '/account/firstname/:firstname' )

    .get( function( req, res ) {
        Account.find({ firstname: req.params.firstname }, function( err, account ) {
            if ( err ) {
                res.send( err );
            }
            res.json( account );
        });
    });

router.route( '/account/lastname/:lastname' )

    .get( function( req, res ) {
        Account.find({ lastname: req.params.lastname }, function( err, account ) {
            if ( err ) {
                res.send( err );
            }
            res.json( account );
        });
    });

// Fire up server
app.listen( port );

// Print friendly message to console
console.log( 'Server listening on port ' + port );
