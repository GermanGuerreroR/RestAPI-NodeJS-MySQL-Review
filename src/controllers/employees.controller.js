
import { pool } from "../../db.js";



export const getEmployees = async (req, res) => {


    try {
        const result = await pool.query("SELECT * FROM employees");
        // const [rows] = await pool.query("SELECT * FROM employees");
        // res.send(rows);
        //res.json(rows);
        res.send(result[0]);
    } catch (error) {
        return res.status(500).json({ msg: "Something goes WRONG 💀" })
    }




}

export const getEmployee = async (req, res) => {


    try {
        const [result] = await pool.query("SELECT * FROM employees WHERE id = ?", [req.params.id]);

        // !result ? console.log("paila") : console.log("sirve");

        // res.send("das")

        result.length === 0 ? res.status(404).send({ msg: "nada" }) : res.send(result[0]);
    } catch (error) {
        return res.status(500).json({ msg: "Something goes WRONG 💀" });

    }







}


export const postEmployee = async (req, res) => {
    const { name, salary } = req.body;


    try {
        const [result] = await pool.query("INSERT INTO employees (name,salary) VALUES (?,?)", [name, salary]);
        res.send(
            {
                name,
                salary,
                id: result.insertId
            }
        );
    } catch (error) {
        return res.status(500).json({ msg: "Something goes WRONG 💀" });
    }



}

export const updateEmployee = async (req, res) => {

    const id = req.params.id;
    const { name, salary } = req.body;


    try {
        const [result] = await pool.query(
            "UPDATE employees SET name = IFNULL(?, name), salary = IFNULL(?, salary) WHERE id = ?",
            [name, salary, id]
        );
        return !result.affectedRows ? res.status(404).send({ msg: "Employee not updated" }) : res.send({ msg: `Employee ${id} updated` });
    } catch (error) {
        return res.status(500).json({ msg: "Something goes WRONG 💀" });
    }




    //"UPDATE employees SET name = ? IFNULL(?,name) SI NO VIENE EL DATO DEJA ESE.
    //Aca tambien podemos hacer otro pool query para mostrar como quedo actualizado el empleado 


}

export const deleteEmployee = async (req, res) => {


    try {
        const [result] = await pool.query("DELETE FROM employees WHERE id= ?", [req.params.id]);
        return (!result.affectedRows) ? res.status(404).json({ msg: "Employee not found" }) : res.send({ msg: `Employee ${req.params.id} deleted` });

    } catch (error) {
        return res.status(500).json({ msg: "Something goes WRONG 💀" });
    }
}