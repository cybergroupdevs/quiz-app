/**
 * Module dependencies.
 */
/*jshint esversion: 6 */
class ResourceController {

  constructor(model) {
    this.Model = model;
  }

  create(req, res) {
    const model = new this.Model(req.body.data);
    model.save()
      .then(result => {
        console.log(result)
        res.status(200).json({
          message: "Number of records added: 1",
          count: 1,
          id: result._id
        })
      })
      .catch(error => {
        console.log(error)
        res.status(500).json({
          error: error
        })
      })
  }

  /*
  The following method will support pagination but not enabled by default
  The req object expects following structure
  {
    selectionObj: {},
    projectionObj: {}
    paginationObj: {
      "pageNumber": 1,
      "pageSize": 10
    }
  }
  Reason for not populating req.body >> Don't wish to manipulate apis via client
  */ 
  list(req, res) {

    let paginationOptions = {}
    if (req.paginationObj && req.paginationObj.pageNumber && req.paginationObj.pageSize) {
      paginationOptions = {
        skip: (req.paginationObj.pageNumber-1)*req.paginationObj.pageSize,
        limit: req.paginationObj.pageSize
      }
    }

    // Hiding database specific information from documents
    if (!req.projectionObj) {
      req.projectionObj = {}
    }
    req.projectionObj["__v"] = 0;
    
    this.Model.find(req.selectionObj, req.projectionObj, paginationOptions)
      .exec()
      .then(result => {
        console.log(result)
        res.status(200).json({
          pageNumber: req.paginationObj ? req.paginationObj.pageNumber ? req.paginationObj.pageNumber : "" : "",
          pageSize: req.paginationObj ? req.paginationObj.pageSize ? req.paginationObj.pageSize : "" : "",
          count: result.length,
          data: result
        })
      })
      .catch(error => {
        console.log(error);
        res.status(500).json({error})
      })
  }

  show(req, res) {
    const id = req.params._id;

    // Hiding database specific information from documents
    if (!req.projectionObj) {
      req.projectionObj = {}
    }
    req.projectionObj["__v"] = 0;

    this.Model.findOne({"_id": id}, req.projectionObj)
      .exec()
      .then(result => {
        console.log(result);
        res.status(200).json({
          data: result
        })
      })
      .catch(error => {
        console.log(error)
        res.status(500).send({ error });
      })
  }

  update(req, res) {
    const id = req.params._id;
    
    // Updating the updatedAt timestamp for every update
    req.body.data['updatedAt'] = new Date()

    this.Model.update({ "_id": id }, { $set: req.body.data })
      .exec()
      .then(result => {
        console.log(result)
        res.status(200).json({
          message: "Number of records updated: " + result.nModified,
          count: result.nModified
        })
      })
      .catch(error => {
        console.log(error)
        res.status(500).json({ error })
      })
  }

  delete(req, res) {
    const id = req.params._id;
    this.Model.remove({ "_id": id })
      .exec()
      .then(result => {
        console.log(result)
        res.status(200).json({
          // n denotes the number of records affected
          message: "Number of records deleted: " + result.result.n,
          count: result.result.n
        });
      })
      .catch(error => {
        console.log(error);
        res.status(500).json({ error });
      });
  }

  /*
  TODO: Enable show, update and delete methods to receive req.selection object and thus
  be more generic
  */
  test(req, res) {
    res.send("Test called from resource controller");
  }
}


module.exports = ResourceController;