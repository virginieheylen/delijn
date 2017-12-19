var express = require( 'express' );
var router = express.Router();

router
    .get( '/', function (req, res) {
        res.render( 'account', {} );
    })

    .get( '/buzzy-pazz', (req, res) => {
        res.render( 'buzzypazz', {} );
    });

module.exports = router;
