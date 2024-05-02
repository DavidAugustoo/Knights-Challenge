import { CreateKnightController } from "@modules/knights/useCases/CreateKnight/CreateKnightController";
import { ListKnightController } from "@modules/knights/useCases/ListKnight/ListKnightController";
import { Router } from "express";

const knightsRoutes = Router();

const createKnightController = new CreateKnightController();
const listKnightController = new ListKnightController();

knightsRoutes.get("/", listKnightController.handle);

knightsRoutes.get("/:id");

knightsRoutes.post("/", createKnightController.handle);

knightsRoutes.put("/:id");

knightsRoutes.delete("/:id");

export { knightsRoutes };
