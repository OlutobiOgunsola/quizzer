const express = require("express");
const Router = express.Router();

// const AuthRouter = require("./Auth");
const MathRouter = require("./Math");
const EnglishRouter = require("./English");

exports.AppRouter = class AppRouter {
  constructor() {
    console.log("Router initialized");
    // Router.use("/auth", AuthRouter);
    Router.use("/questions", MathRouter);
    return Router;
  }
};
