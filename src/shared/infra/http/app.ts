/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line import/no-extraneous-dependencies

import "reflect-metadata";
import "express-async-errors";
import express, { NextFunction, Request, Response } from "express";

import { AppError } from "@shared/infra/http/errors/AppError";

import { errorHandler } from "./errors";
import { router } from "./routes";

import "../typeorm";

import "@shared/container";

const app = express();

app.use(express.json());

app.use(router);

app.use(errorHandler);

export { app };
