import { Router } from "express";

import { knightsRoutes } from "./knights.routes";

const router = Router();

router.use("/knights", knightsRoutes);

export { router };
