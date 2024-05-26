const db = require("../config/connection");

const getAllStudent = async () => {
    const [rows] = await db.execute(`SELECT * FROM Students`); 
    return rows;
}

const getStudentByID = async (id) => {
    const [rows] = await db.execute(`SELECT * FROM Students WHERE student_id = ?`, [id]);
    return rows;
}


module.exports = { getAllStudent, getStudentByID };