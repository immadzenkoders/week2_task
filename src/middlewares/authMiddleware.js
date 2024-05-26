const jwt = require('jsonwebtoken');

const TEACHER_SECRET_KEY = process.env.TEACHER_SECRET_KEY || "TEACHER_SECRET";
const STUDENT_SECRET_KEY = process.env.STUDENT_SECRET_KEY || "STUDENT_SECRET";

const generateToken = (email, role) => {
    const secretKey = role === 'Teachers' ? TEACHER_SECRET_KEY : STUDENT_SECRET_KEY;
    const expiresIn = role === 'Teachers' ? '6h' : '3h';

    const payload = {
        user: {
            email: email,
            role: role
        }
    };
    return jwt.sign(payload, secretKey, { expiresIn });
};

module.exports = {
    generateToken
};
