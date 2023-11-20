"use strict";

const express = require("express");
const Router = express.Router();
const dotenv = require("dotenv");

dotenv.config();

// Import user services
const { MathController } = require("../Controllers/Math");

// Import token middleware

/** Initialize user class
 *  @kind Router
 *  @type class
 *  @return Router {Object} - Router object
 */

class MathRouter extends MathController {
  constructor() {
    super();
    Router.get("/", this.getAllMathController);

    Router.get("/:question_id", this.findQuestionByIdController);
    // Route to remove user

    return Router;
  }
}

const mathRouter = new MathRouter();
mathRouter;

// Router.get('/', (req, res) => {
//   console.log('Gotten');
// });

module.exports = Router;
