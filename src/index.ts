import "reflect-metadata";
import express from "express";

const bootstrap = async () => {
  const express = require("express");
  const app = express();
  const port = 3000;

  app.get("/", (req, res) => res.send("Hello World from an ec2 container!"));

  app.listen(port, () => console.log(`Example app listening on port ${port}!`));
};

bootstrap();
