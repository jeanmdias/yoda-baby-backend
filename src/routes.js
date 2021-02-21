const routes = require("express").Router();

const GroupController = require("./controllers/GroupController");
routes.get("/groups", GroupController.findAll);
routes.get("/groups/:id", GroupController.findById);
routes.post("/groups", GroupController.create);
routes.put('/groups/:id', GroupController.update);
routes.delete("/groups/:id", GroupController.delete);

const PersonController = require("./controllers/PersonController");
routes.get("/persons", PersonController.findAll);
routes.get("/persons/:id", PersonController.findById);
routes.post("/persons", PersonController.create);
routes.put('/persons/:id', PersonController.update);
routes.delete("/persons/:id", PersonController.delete);

module.exports = routes;
