import express from "express";
import router from "./router";

const api = express();
api.use(express.json());
api.use(router);

api.listen(3000, () => {
  console.log("Server is running on port 3000!");
});
