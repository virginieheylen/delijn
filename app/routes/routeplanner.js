var express = require( 'express' );
var router = express.Router();

router
    .get( '/', function (req, res) {
        res.send( 'Routeplanner pagina ...' );
    })

    .get( '/resultaten', function (req, res) {
        res.send( 'Routeplanner resultaten ...' );
    });

module.exports = router;
