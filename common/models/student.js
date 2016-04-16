/**
 * Created by hanswang on 3/20/16.
 */
module.exports = function(Student) {

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
  Student.removeAllStudents = function(cb){
    Student.destroyAll(function(err, info){
      var response;
      response = info;
      cb(null, response);
      console.log(response);
    });
  };

  Student.authenticateUser = function(username, pw, cb){
    Student.findOne({where:{username:username, password: pw}, field:{id:true}},function(err, instance){
      var response;
      response = instance;
      cb(null, response);
      console.log(response);
    });
  };
  Student.remoteMethod(
    'authenticateUser',
    {
      heep: {path: '/authenticateUser', verb:'get'},
      accepts:[{ arg: 'username', type: 'string', http: { source: 'body' } },
        { arg: 'pw', type: 'string', http:{source:'body'}}],
      returns:{arg:'id',type:'string'}
    }
  );
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
  Student.remoteMethod(
    'removeAllStudents',
    {
      http: {path: '/removeAllStudents', verb: 'get'},
      returns: {arg:'result', type: 'string'}
    }
  );
};