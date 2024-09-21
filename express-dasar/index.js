import express from "express";
import routes from "./routes.js";

const app = express();
const port = 5001;
app.use(routes);
app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
