import express from "express";

const api = express();
api.use(express.json());

api.listen(3000, () => {
  console.log("Server is running on port 3000!");
});
