var express = require( 'express' );
var request = require('request');
var router = express.Router();

router
    .get( '/', function (req, res) {
        res.render( 'route', {} );
    })

    .get( '/mijn-route', function (req, res) {
        res.render( 'mijnroute', {} );
    })

    .post('/', function(req, res) {

        console.log(req.body);
        
        var s_d = ' ';
        
        var baseURL = 'https://www.delijn.be/rise-api-core/';
        var startPoint = 'Sint-Niklaas';
        var endPoint = 'Elversele, Temse';
        var startX = 134103;
        var startY = 206073;
        var endX = 133774;
        var endY = 200500;
        var date = '21-12-2017';
        var time = '10:14';
        var arrivalDeparture = 1; // (1 = Vertrekken; 2 = Aankomen)
        var byBus = 'on';
        var byTram = 'of';
        var byMetro = 'of';
        var byTrain = 'on';
        var byBelbus = 'of';
        var language = 'nl';

        request( baseURL + 'reisadvies/routes/' + startPoint + '/' + endPoint + '/' + startX + '/' + startY + '/' + endX + '/' + endY + '/' + date + '/' + time + '/' + arrivalDeparture + '/' + byBus + '/' + byTram + '/' + byMetro + '/' + byTrain + '/' + byBelbus + '/' + language, function (error, response, body) {
            var d = JSON.parse(body);
            var reiswegen = d.reiswegen;
            console.log(reiswegen);
            // console.log(d);

            for (var i = 0; i < reiswegen.length; i++) {
                var a = reiswegen[i];
                s_d += `<li><a class="button-secondary-alt" href><span class="busnummer"> 18 </span> <span class="busrit"> ${a.startTime} → ${a.endTime} </span> <span class="bustijd">${a.duration}</span></a></li>`;
            }

            res.render( 'route', {
                reiswegen: `${s_d}`
            } );
        });


    // request('https://www.delijn.be/rise-api-core/locations/verkooppunten/' + req.body.stad, function (error, response, body) {
    //   var d = JSON.parse(body);
    //   console.log(d);

    //   if (d === null) {
    //     s_d += `
    //     <p> Er zijn geen verkooppunten gevonden in de gemeente ${req.body.stad}</p>
    //     `;
    //   }
    //   else {

    //     s_d += `
    //       <h2> verkooppunten in de gemeente ${req.body.stad}</h2>
    //     `;
    //     for (var i = 0; i < d.length; i++) {
    //       var a = d[i];
    //       s_d += `
    //         <h2> ${a.gemeente} </h2>
    //         <h3> ${a.naam} verkoopt tickets </h3>
    //         <h5> Richting: ${a.adresString} </h5>
    //         <hr>
    //       `;
    //     }
    //   }
        
    });

module.exports = router;
