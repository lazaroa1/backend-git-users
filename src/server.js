import expres from "express";
import cors from "cors";
import routes from "./routes.js";

const app = expres();

app.use(cors());
app.use(routes);
app.listen(3333);
