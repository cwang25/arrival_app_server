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
        "_id:string": "asc"
      }
    ]
  };
  //
  //module.exports = function(CoffeeShop) {
  //  ...
  //  CoffeeShop.getName = function(shopId, cb) {
  //    CoffeeShop.findById( shopId, function (err, instance) {
  //      response = "Name of coffee shop is " + instance.name;
  //      cb(null, response);
  //      console.log(response);
  //    });
  //  }
  //    ...
  //    CoffeeShop.remoteMethod (
  //    'getName',
  //    {
  //      http: {path: '/getname', verb: 'get'},
  //      accepts: {arg: 'id', type: 'number', http: { source: 'query' } },
  //      returns: {arg: 'name', type: 'string'}
  //    }
  //  );
  //}
  Student.getTestStudent = function(cb){
    //Account.find({where: {name: 'John'}, limit: 3}, function(err, accounts) { ... });
    Student.find({where: {gender: 'Male'}}, function(err, instance){
      var response;
      response = instance;
      cb(null, response);
      console.log(response);
    });
  };

  Student.getStudentBySchoolID = function(school_id,cb){
    //Account.find({where: {name: 'John'}, limit: 3}, function(err, accounts) { ... });
    Student.find({where: {school_id: school_id}}, function(err, instance){
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
      returns: {type: 'array', root: true}
    }
  );
  Student.remoteMethod(
    'getStudentBySchoolID',
    {
      http: {path: '/getStudentBySchoolID', verb: 'get'},
      accepts: {arg:'school_id', type: 'number'},
      returns: {type: 'array', root: true}
    }
  );
};