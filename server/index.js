const express = require("express");
const axios = require("axios");
const cors = require("cors");
const app = express();

app.use(cors());

// Routes
app.get("/", (req, res) => {
  res.send("Welcome");
});

app.get("/api", (req, res) => {
  axios
    .get("https://pokeapi.co/api/v2/type")
    .then((response) => {
      res.send(response.data);
    })
    .catch((error) => {
      console.log(`The Application is faced with an ${error}`);
    });
});

app.get("/api/:type", (req, res) => {
  axios
    .get(`https://pokeapi.co/api/v2/type/${req.params.type}`)
    .then((response) => {
      res.send(response.data);
    })
    .catch((error) => {
      console.log(`The Application is faced with an ${error}`);
    });
});

// Run Server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log("Server is running on ", PORT);
});
