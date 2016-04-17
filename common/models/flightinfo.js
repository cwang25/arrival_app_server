module.exports = function(flightinfo){
    
    flightinfo.getStudentsByTime = function(date, time, cb){
        flightinfo.find({where: {departureDate: date,
                                arrivalTime: time}}, function(err, instance){
            var response;
            response = instance;
            cb(null response);
            console.log(response);
        }); 
    };
    
    flightinfo.removeAllFlightInfo = function(cb){
        flightinfo.destroyAll(function(err, info){
            var response;
            response = instance;
            cb(null, response);
            console.log(response);
        });
    };
    
    flightinfo.remoteMethod(
        'getStudentsByTime',
        {
            http: {path: '/getStudentsByTime', verb: 'get'},
            accepts: {arg: 'departureDate', type: 'string'},
            returns: {type: 'array', root: true}
        }
    );
    
    flightinfo.remoteMethod(
        'removeAllFlightInfo',
        {
            http: {path: '/removeAllFlightInfo', verb: 'get'},
            returns: {arg: 'result', type: 'string'}
        }
    );
};