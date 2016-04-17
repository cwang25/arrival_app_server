/**
 * Created by hanswang on 3/20/16.
 */
module.exports = function(Student) {
  var cloudantURL = "https://828ae6b0-5855-4cdb-9bc9-75bf1dfcd4fc-bluemix.cloudant.com/arrivaltest/_find";
  var example_JSON = {
    "use_index": "_design/lb-index-ddoc-Student",
    "selector": {
      "first_name": {
        "$eq": "Test_first_name"
      },
      "_id":{
        "$gt": null
      }
    },
    "fields": [
      "_id",
      "school_email",
      "sleep_time"
    ],
    "sort": [
      {
        "hh:Number": "asc"  //hh is supposed to be the variable which carries the hour after which the student arrives
      }
    ]
  };

  Student.getTestStudent = function(cb){
    Student.find({where: {first_name: 'Hans'}}, function(err, instance){
      var response;
      response = instance;
      cb(null, response);
      console.log(response);
    });
  };

  Student.remoteMethod(
    'getTestStudent',
    {
      http: {path: '/getTestStudent', verb: 'get'},
      returns: {arg: 'Test_students', type: 'string'}
    }
  );
};


///-----------------------------------------------------------------------------
//Do not know how to modify the above code

var slotsToday = [];

