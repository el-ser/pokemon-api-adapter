import express from "express";
import morgan from "morgan";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "../swagger.json";

import apis from "./routes/api";

const { api } = apis;
const app = express();

app.use(morgan("combined"));

app.use("/v1", api);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

export default app;
