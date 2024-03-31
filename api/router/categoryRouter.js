const express = require("express");
const CategoryController = require("../controller/CategoryController");

const categoryRouter = express.Router();

const categoryInstance = new CategoryController();

categoryRouter.get("/:category", categoryInstance.getPost);
// categoryRouter.get("/science&tech", categoryInstance.getScienceAndTechPost);
// categoryRouter.get("/celebrities", categoryInstance.getCelebritiesPost);
// categoryRouter.get("/luxury", categoryInstance.getLuxuryPost);
// categoryRouter.get("/comedy", categoryInstance.getComedyPost);
// categoryRouter.get("/other", categoryInstance.getOtherPost);

module.exports = categoryRouter;
