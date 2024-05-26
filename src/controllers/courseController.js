const courseService = require('../services/courseService');

const addCourse = async (req, res) => {
    const { name, description } = req.body;
    const teacherId = req.headers.teacher_id;

    try {
        const courseId = courseService.addCourse(name, description, teacherId);
        res.status(201).json({
            message: 'Course added successfully',
            name: name,
            description: description,
            courseId: courseId
        });
    } catch (error) {
        console.error("Error adding course:", error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

const getCourse = async (req, res) => {
    try {
        const data = await courseService.getCourses();
        if (data.length > 0) {
            res.status(200).json(data);
        } else {
            res.status(401).json({ message: 'No Courses found' });
        }
    } catch (error) {
        console.error("Error signing in:", error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

const getCourseById = async (req, res) => {
    try {
        const data = await courseService.getCourseById(req.params.id);
        if (data.length > 0) {
            res.status(200).json(data);
        } else {
            res.status(401).json({ message: 'No Course found' });
        }
    } catch (error) {
        console.error("Error signing in:", error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

const editCourse = async (req, res) => {
    const { name, description } = req.body;
    const { id } = req.params;

    try {
        const rowsAffected = await courseService.editCourse(id, name, description);
        if (rowsAffected > 0) {
            res.status(200).json({ message: 'Course updated successfully' });
        } else {
            res.status(404).json({ message: 'No course found with the provided ID' });
        }
    } catch (error) {
        console.error("Error updating course:", error);
        res.status(500).json({ message: 'Internal server error' });
    }
}


const deleteCourse = async (req, res) => {
    try {
        const deletedRowCount = await courseService.deleteCourse(req.params.id);
        if (deletedRowCount > 0) {
            res.status(200).json({ message: 'Course deleted successfully' });
        } else {
            res.status(404).json({ message: 'No course found with the provided ID' });
        }
    } catch (error) {
        console.error("Error deleting course:", error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = { addCourse, getCourse, getCourseById, editCourse, deleteCourse };
