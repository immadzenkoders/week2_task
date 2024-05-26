const db = require('../config/connection');

const addCourse = async (name, description, teacherId) => {
    try {
        const result = await db.execute('INSERT INTO courses (name, description, teacher_id) VALUES (?, ?, ?)', [name, description, teacherId]);
        const courseId = result.insertId;
        return courseId;
    } catch (error) {
        console.error("Error adding course to database:", error);
        throw error;
    }
};

const getCourses = async () => {
    const [rows] = await db.execute(`SELECT * FROM Courses`);
    return rows;
}

const getCourseById = async (id) => {
    const [rows] = await db.execute(`SELECT * FROM Courses WHERE course_id = ?`, [id]);
    return rows;
}

const editCourse = async (id, name, description) => {
    const [result] = await db.execute(`UPDATE Courses SET name=?, description=? WHERE course_id=?;`, [name, description, id])
    return result.affectedRows;
}


const deleteCourse = async (id) => {
    const [result] = await db.execute(`DELETE FROM Courses WHERE course_id = ?`, [id]);
    return result.affectedRows;
};


module.exports = { addCourse, getCourses, getCourseById, deleteCourse, editCourse };
