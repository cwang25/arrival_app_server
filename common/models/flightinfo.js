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
		console.log('Client Data: ' +details['flightNum']);
		
		var fltNum = details['flightNum'];
		var fltDate = details['flightDate'];

		FlightInfo.findOne({where: {and: [{flightNum:fltNum}, {flightDate: fltDate}]}, fields:{id:true}},function(err, instance){
			var response;
			response = instance;
			cb(null, response);
			console.log("Flight Server Response: " +response);
		});
		
    };
		
	FlightInfo.remoteMethod(
        'getMatches',
        {
            http: {path: '/getMatches', verb: 'post'},
            accepts: {arg: 'details', type: 'object', http: { source: 'body' }},
            returns: {type: 'object', root: true}
        }
    );
	
	
	// getFlightDateNumberByFlightID Starts
	
	FlightInfo.getFlightDateNumberByFlightID = function(flight_id, cb){		
		FlightInfo.find({where: {and: [{id:flight_id}]}, fields:{flight_date:true,flight_number:true}},function(err, instance){
			var response;
			response = instance;
			cb(null, response);
			console.log("Flight Server Response: " +response);
		});		
    };
	
	FlightInfo.remoteMethod(
        'getFlightDateNumberByFlightID',
        {
            http: {path: '/getFlightDateNumberByFlightID', verb: 'get'},
            accepts: {arg: 'flight_id', type: 'string'},
            returns: {type: 'array', root: true}
        }
    );
	
	// getFlightDateNumberByFlightID Ends
	
	
	
	// getFlightBuddies Starts
	
	FlightInfo.getFlightBuddies = function(flight_info, cb){		
	
		var fltNum = flight_info['flight_number'];
		var fltDate = flight_info['flight_date'];
		console.log("IN FLIGHT BUDDIES FUNCTION");
		console.log("FLIGHT NUMBER: " +fltNum);
		console.log("FLIGHT DATE: " +fltDate);
		//FlightInfo.find({where: [{flightNum:fltNum}, {flightDate: fltDate}]}, fields:{student_id:true}, function(err, instance){
		FlightInfo.find({where: {and: [{flightNum:fltNum}, {flightDate: fltDate}]}, fields:{student_id:true}},function(err, instance){
			var response;
			response = instance;
			cb(null, response);
			console.log("Flight Server Response: " +response);
		}); 
    };
	
	FlightInfo.remoteMethod(
        'getFlightBuddies',
        {
            http: {path: '/getFlightBuddies', verb: 'get'},
            accepts: {arg: 'flight_info', type: 'object', http: { source: 'body' } },
            returns: {type: 'array', root: true}
        }
    );
	
	// getFlightBuddies Ends
	
	
	// Airport Pickup Ends

	FlightInfo.getFlightIDByStudentID = function(stud_id, cb){
		console.log('Student ID' +stud_id);
		
		FlightInfo.findOne({where: {and: [{student_id:stud_id}]}, fields:{id:true}},function(err, instance){
			var response;
			response = instance;
			cb(null, response);
			console.log("Flight ID response " +response);
		});
		
    };
	
	FlightInfo.remoteMethod(
        'getFlightIDByStudentID',
        {
            http: {path: '/getFlightIDByStudentID', verb: 'get'},
            accepts: {arg: 'stud_id', type: 'string'},
            returns: {type: 'object', root: true}
        }
    );
	
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