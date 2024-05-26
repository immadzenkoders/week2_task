const db = require("../config/connection");

const getAllTeachers = async () => {
    const [rows] = await db.execute(`SELECT * FROM Teachers`); 
    return rows;
}

const getTeacherByID = async (id) => {
    const [rows] = await db.execute(`SELECT * FROM Teachers WHERE teacher_id = ?`, [id]);
    return rows;
}


module.exports = { getAllTeachers, getTeacherByID };
