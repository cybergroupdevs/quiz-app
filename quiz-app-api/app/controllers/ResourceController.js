/**
 * Module dependencies.
 */
 /*jshint esversion: 6 */
class ResourceController {

  constructor(model) {
    this.Model = model;
  }

  create(req, res) {
      let dataObj = {};
      Object.keys(req.body).forEach(function(key){dataObj[key]=req.body[key];});
      var model = new this.Model(dataObj);

      model.save((err, response) => {
        if (err) {
          reject(err);
        }
        res.send(response);
      });    
  }

  index(queryString) {
    return new Promise((resolve, reject) => {
      var model = this.Model;
      model.find({}, "", {
        "skip": ((queryString.perPage * queryString.page) - queryString.limit),
        "limit": (queryString.limit || 10)
      },
        (err, response) => {
          if (err) {
            reject(err);
          }
          if (response.length === 0) {
            resolve({"message": "Questions Finished!", "response": response});
          }
          resolve({
            "page": (queryString.page || 1),
            "perPage": (queryString.perPage || 10),
            "limit": (queryString.limit || 10),
            "response": response
          });
        });
    })
      .catch((e) => { });
  }

  list(req, res) {
    return new Promise((resolve, reject) => {
      var model = this.Model;
      model.find({}, (err, response) => {
        if (err) {
          reject(err);
        }
        resolve(response);
      });
    })
      .then((result) => {
        console.log(result);
        res.send(result);
      })
      .catch((e) => { });
  }

  show(id) {
    return new Promise((resolve, reject) => {
      var model = this.Model;
      model.find({
        "_id": id
      }, (err, response) => {
        if (err) {
          reject(err);
        }
        resolve(response);
      });
    });
  }

  update(body) {
    /* console.log(`this is the value of this ${Object.getOwnPropertyNames(this)}`);
    console.log("this is the value of this" + this);
    console.log("update called"); */

    return new Promise((resolve, reject) => {
      var model = this.Model;
      model.update({ "_id": body.id }, body, (err, response) => {
        if (err) {
          reject(err);
        }

        resolve(response);
      });
    });
   
  }

  delete(id) {
    /* console.log(`this is the value of this ${Object.getOwnPropertyNames(this)}`);
    console.log("this is the value of this" + this);
    console.log("update called"); */

    return new Promise((resolve, reject) => {
      var model = this.Model;
      model.remove({ "_id": id }, (err, response) => {
        if (err) {
          reject(err);
        }
        resolve(response);
      });
    });
  }

  test(req,res){
     res.send("update called from resource controller");
  }
}


module.exports = ResourceController;
