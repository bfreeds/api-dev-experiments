import express from "express";

// read port from env, default to 3500
const PORT = process.env.PORT || 3500;

// initialize express instance
const app = express();

app.get("/", (req, res) => {
  res.send({
    hello: "there!"
  });
});

// start server
app.listen(PORT, () => `Listening at http://localhost:${PORT}`);
