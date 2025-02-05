import { Router } from "express";
import { getEmployees, getEmployee, postEmployee, updateEmployee, deleteEmployee } from "../controllers/employees.controller.js";


const router = Router();


router.get("/employees", getEmployees);

router.get("/employees/:id", getEmployee);

router.post("/employees", postEmployee);


//PATCH ES MAS EFECTIVO . En la medida de que el JSON puede ir con el solo nombre y sin salario. Lo que es valido. así no nos da error.
//PUT SÍ VAS ACTUALIZAR TODO
//PATCH SI VAS HACER UNA ACTUALIZACIÓN PARCIAL.
router.patch("/employees/:id", updateEmployee);

router.delete("/employees/:id", deleteEmployee);




export default router;
