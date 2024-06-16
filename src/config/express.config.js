const express = require("express");
const router = require("../router/router.config");

const app = express()

app.use(express.json())

app.use(express.urlencoded(
    {
      extended:true
    }
  ))

app.use(router)

app.use((req, res, next) => {
    
    next({ status: 404, message: "Resource not found." });
  });
  
  
  app.use((error, req, res, next) => {
    let status = error.status || 500;
    let message = error.message || "server error...";
    let result = error.detail || null;
  
    res.status(status).json({
      result: result,
      meta: null,
      message: message,
    });
  });

module.exports = app;