/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line import/no-extraneous-dependencies

import "reflect-metadata";
import "express-async-errors";
import express from "express";
import swaggerUi from "swagger-ui-express";

import swaggerFile from "../../../swagger.json";
import { errorHandler } from "./errors";
import { router } from "./routes";

import "../typeorm";

import "@shared/container";

const app = express();

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(express.json());

app.use(router);

app.use(errorHandler);

export { app };
