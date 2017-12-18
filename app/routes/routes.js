var express = require( 'express' );
var router = express.Router();

router
    .get( '/', function (req, res) {
        res.render( 'route', {} );
    })

    .get( '/mijn-route', function (req, res) {
        res.render( 'mijnroute', {} );
    });

module.exports = router;
