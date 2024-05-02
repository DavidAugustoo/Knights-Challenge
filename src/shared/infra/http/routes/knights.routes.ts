import { CreateKnightController } from "@modules/knights/useCases/CreateKnight/CreateKnightController";
import { DeleteKnightController } from "@modules/knights/useCases/DeleteKnight/DeleteKnightController";
import { ListKnightController } from "@modules/knights/useCases/ListKnight/ListKnightController";
import { UpdateKnightController } from "@modules/knights/useCases/UpdateKnight/UpdateKnightController";
import { Router } from "express";

const knightsRoutes = Router();

const createKnightController = new CreateKnightController();
const listKnightController = new ListKnightController();
const deleteKnightController = new DeleteKnightController();
const updateKnightController = new UpdateKnightController();

knightsRoutes.get("/", listKnightController.handle);

knightsRoutes.get("/:id");

knightsRoutes.post("/", createKnightController.handle);

knightsRoutes.put("/:id", updateKnightController.handle);

knightsRoutes.delete("/:id", deleteKnightController.handle);

export { knightsRoutes };
