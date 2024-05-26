const enrollmentService = require('../services/enrollmentservice');

const create = async (req, res) => {
    try {
        const data = await enrollmentService.create(req.params.id, req.headers.student_id);
        res.status(201).json({
            message: 'Enrollment created successfully',
        });
    } catch (error) {
        console.error("Error creating enrollment:", error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

const get = async (req, res) => {
    try {
        const data = await enrollmentService.get();
        if (data.length > 0) {
            res.status(200).json(data);
        } else {
            res.status(401).json({ message: 'No Enrollments found' });
        }
    } catch (error) {
        console.error("Error signing in:", error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

const getEnrolllmentById = async (req, res) => {
    try {
        const data = await enrollmentService.getEnrolllmentById(req.params.id);
        if (data.length > 0) {
            res.status(200).json(data);
        } else {
            res.status(401).json({ message: 'No Enrollments found', });
        }
    } catch (error) {
        console.error("Error signing in:", error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

const getEnrolllmentByStuId = async (req, res) => {
    try {
        const data = await enrollmentService.getEnrolllmentByStuId(req.params.id);
        if (data.length > 0) {
            res.status(200).json(data);
        } else {
            res.status(401).json({ message: 'No Enrollments found', });
        }
    } catch (error) {
        console.error("Error signing in:", error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

const getEnrolllmentByCourseId = async (req, res) => {
    try {
        const data = await enrollmentService.getEnrolllmentByCourseId(req.params.id);
        if (data.length > 0) {
            res.status(200).json(data);
        } else {
            res.status(401).json({ message: 'No Enrollments found', });
        }
    } catch (error) {
        console.error("Error signing in:", error);
        res.status(500).json({ message: 'Internal server error' });
    }
}
module.exports = { create, get, getEnrolllmentById, getEnrolllmentByStuId, getEnrolllmentByCourseId };

