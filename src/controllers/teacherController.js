const authService = require("../services/authService");
const teacherService = require("../services/teacherService");

const signup = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const newUser = await authService.signup(name, email, password, 'Teachers');
        if (newUser) {
            res.status(201).json({ newUser });
        } else {
            res.status(409).json({ message: 'Teacher already exists' });
        }
    } catch (error) {
        console.error("Error signing up teacher:", error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

const signin = async (req, res) => {
    const { email, password } = req.body;
    try {
        // Authenticate user
        const token = await authService.signin(email, password, 'Teachers');

        // If signin successful, return token
        if (token) {
            res.status(200).json({ token });
        } else {
            // If signin failed (user not found or incorrect password), return error
            res.status(401).json({ message: 'Invalid email or password' });
        }
    } catch (error) {
        console.error("Error signing in:", error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

const getAllTeachers = async (req, res) => {
    try {
        const data = await teacherService.getAllTeachers();
        if (data.length > 0) { 
            res.status(200).json(data);
        } else {
            res.status(401).json({ message: 'No Teacher found' });
        }
    } catch (error) {
        console.error("Error signing in:", error);
        res.status(500).json({ message: 'Internal server error' });
    }
    
}

const getTeacherById = async (req, res) => {
    try {
        const data = await teacherService.getTeacherByID(req.params.id);
        if (data.length > 0) { 
            res.status(200).json(data);
        } else {
            res.status(401).json({ message: 'No Teacher found' });
        }
    } catch (error) {
        console.error("Error signing in:", error);
        res.status(500).json({ message: 'Internal server error' });
    }
}


module.exports = { signup, signin, getAllTeachers, getTeacherById };
