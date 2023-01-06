module.exports = (app) => {
  const option = require("./controllers");

  app.route("/api/selectedOptions").get(option.getAll);
  app.route("/api/selectedOption/:id").get(option.get);
  app.route("/api/selectedOptions/add").post(option.add);
  app.route("/api/selectedOption/patch").patch(option.update);
  app.route("/api/selectedOption/:id").delete(option.delete);
};