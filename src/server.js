import express from "express";
import morgan from "morgan";
import cors from "cors";
import "dotenv/config.js";
import swaggerUi from "swagger-ui-express";
import fs from "fs";
import 'dotenv/config';

import bookingRoute from "./routes/booking.routes.js";
import errorHandler from "./middleware/error-handler.js";

const app = express();

const openapi = JSON.parse(fs.readFileSync(new URL("../src/docs/openapi.json", import.meta.url)));

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.get("/healthz", (_, res) => res.json({ ok: true, service: "booking-app-server" }));


app.use("/booking", bookingRoute);

app.use("/docs", swaggerUi.serve, swaggerUi.setup(openapi));

app.get('/', (req, res) => {
    res.redirect('/docs');
});
app.use(errorHandler);

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`API: http://localhost:${PORT} | Swagger: http://localhost:${PORT}/docs`));
