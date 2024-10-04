import { Router } from "express";
import { actualizarTarea, borrarTarea, buscarTarea, crearTarea, leerTareas } from "../controllers/tareas.controllers.js";

const router = Router()

router.route("/tareas").post(crearTarea).get(leerTareas)
router.route("/tareas/:id").get(buscarTarea).delete(borrarTarea).put(actualizarTarea)

export default router