const express = require("express");
const next = require("next");
const approot = require("app-root-path");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    server.get("/p/:id", (req, res) => {
      const actualPage = "post";
      const queryParams = { title: req.params.id };
      app.render(req, res, actualPage, queryParams);
    });

    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.get("/", (req, res) => {
      return app.render(req, res, "/");
    });

    server.listen(8001, (err) => {
      if (err) throw err;
      console.log("NOW LISTENING!!!!!");
    });
  })
  .catch((ex) => {
    console.log(ex.stack);
    process.exit(1);
  });
