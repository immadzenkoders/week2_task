const authService = require("../services/authService");
const studentService = require("../services/studentService");

const signup = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const newUser = await authService.signup(name, email, password, 'Students');
        if (newUser) {
            res.status(201).json({ newUser });
        } else {
            res.status(409).json({ message: 'Student already exists' });
        }
    } catch (error) {
        console.error("Error signing up student:", error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

const signin = async (req, res) => {
    const { email, password } = req.body;
    try {
        // Authenticate user
        const token = await authService.signin(email, password, 'Students');
        
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

const getAllStudent = async (req, res) => {
    try {
        const data = await studentService.getAllStudent();
        if (data.length > 0) { 
            res.status(200).json(data);
        } else {
            res.status(401).json({ message: 'No Student found' });
        }
    } catch (error) {
        console.error("Error signing in:", error);
        res.status(500).json({ message: 'Internal server error' });
    }
    
}

const getStudentById = async (req, res) => {
    try {
        const data = await studentService.getStudentByID(req.params.id);
        if (data.length > 0) { 
            res.status(200).json(data);
        } else {
            res.status(401).json({ message: 'No Student found' });
        }
    } catch (error) {
        console.error("Error signing in:", error);
        res.status(500).json({ message: 'Internal server error' });
    }
}


module.exports = { signup, signin, getStudentById, getAllStudent };
