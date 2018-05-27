/**
 * Module dependencies.
 */
/*jshint esversion: 6 */
class ResourceController {

  constructor(model) {
    this.Model = model;
  }

  create(req, res) {
    const model = new this.Model(req.body);
    model.save((err, response) => {
      if (err) {
        res.status(500).send(err);
      }
      res.send(response);
    });
  }

  list(req, res) {
    const pageProps = req.body.pageProps ? {
      page: req.body.pageProps.page || 1,
      perPage: req.body.pageProps.perPage || 10
    } : {
      page: 1,
      perPage: 10
    };

    this.Model.find({}, {}, {
        skip: (pageProps.page-1)*pageProps.perPage,
        limit: pageProps.perPage
      },
      (err, response) => {
        if (err) {
          res.status(500).send(err);
        }
        if (response.length === 0) {
          res.send({
            message: "Questions Finished!",
            response: response
          });
        }
        res.send({
          page: pageProps.page,
          perPage: pageProps.perPage,
          response: response
        });
      }
    );
  }

  show(req, res) {
    const id = req.params._id;
    this.Model.find({
      "_id": id
    }, (err, response) => {
      if (err) {
        res.status(500).send(err);
      }
      res.send(response);
    });
  }

  update(req, res) {
    this.Model.update({
      "_id": req.params._id
    }, req.body, (err, response) => {
      if (err) {
        res.status(500).send(err);
      }
      res.send(response);
    });
  }

  delete(req, res) {
    const id = req.params._id;
    this.Model.remove({
      "_id": id
    }, (err, response) => {
      if (err) {
        res.status(500).send(err);
      }
      res.send(response);
    });
  }

  test(req, res) {
    res.send("update called from resource controller");
  }
}


module.exports = ResourceController;