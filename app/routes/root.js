var express = require( 'express' );
var router = express.Router();

router
    .get( '/', (req, res) => res.redirect( '/login' ) )
    
    .get( '/login', (req, res) => res.render( 'login', {} ) )

    .get( '/paswoord-vergeten', (req, res) => {
        res.send( 'Paswoord vergeten pagina ...' );
    })

    .post('/login', (req, res) => {
        console.log(req.body);
    });

module.exports = router;
