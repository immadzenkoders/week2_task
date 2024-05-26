const db = require('../config/connection');

const create = async (courseId, studentId) => {
    try {
        const result = await db.execute('INSERT INTO Enrollments (course_id, student_id) VALUES (?, ?)', [courseId, studentId]);
        const enrollmentId = result.insertId;
        return enrollmentId;
    } catch (error) {
        console.error("Error adding enrollment to database:", error);
        throw error;
    }
};

const get = async () => {
    const [rows] = await db.execute(`SELECT * FROM Enrollments`);
    return rows;
}

const getEnrolllmentById = async (id) => {
    const [rows] = await db.execute(`SELECT * FROM Enrollments WHERE enrollment_id = ?`, [id]);
    return rows;
}

const getEnrolllmentByStuId = async (id) => {
    const [rows] = await db.execute(`SELECT * FROM Enrollments WHERE student_id = ?`, [id]);
    return rows;
}

const getEnrolllmentByCourseId = async (id) => {
    const [rows] = await db.execute(`SELECT * FROM Enrollments WHERE course_id = ?`, [id]);
    return rows;
}

module.exports = { create, get, getEnrolllmentById, getEnrolllmentByStuId, getEnrolllmentByCourseId};
