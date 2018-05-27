 /*jshint esversion: 6 */
const ResourceController = require("../ResourceController");

const {
  Category
} = require('../../models');

class CategoryController extends ResourceController {
  constructor(...args) {
    super(...args);
  }
}
let category = new CategoryController(Category);

module.exports = category;