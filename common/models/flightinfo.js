module.exports = function(FlightInfo){
    
    FlightInfo.getStudentsByTime = function(date, time, cb){
        flightinfo.find({where: {departureDate: date,
                                arrivalTime: time}}, function(err, instance){
            var response;
            response = instance;
            cb(null, response);
            console.log(response);
        }); 
    };
    
    FlightInfo.removeAllFlightInfo = function(cb){
        flightinfo.destroyAll(function(err, info){
            var response;
            response = instance;
            cb(null, response);
            console.log(response);
        });
    };
	
	// Testing Airport Pickup
		
	FlightInfo.getMatches = function(details, cb){
		console.log('data from client: ' +details);
    };
		
	FlightInfo.remoteMethod(
        'getMatches',
        {
            http: {path: '/getMatches', verb: 'post'},
            accepts: {arg: 'details', type: 'object'},
            returns: {type: 'object', root: true}
        }
    );
	
	// Airport Pickup Ends
    
    FlightInfo.remoteMethod(
        'getStudentsByTime',
        {
            http: {path: '/getStudentsByTime', verb: 'get'},
            accepts: {arg: 'departureDate', type: 'string'},
            returns: {type: 'array', root: true}
        }
    );
    
    FlightInfo.remoteMethod(
        'removeAllFlightInfo',
        {
            http: {path: '/removeAllFlightInfo', verb: 'get'},
            returns: {arg: 'result', type: 'string'}
        }
    );
};