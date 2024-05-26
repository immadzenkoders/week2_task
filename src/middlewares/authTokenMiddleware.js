const jwt = require('jsonwebtoken');
const TEACHER_SECRET_KEY = process.env.TEACHER_SECRET_KEY || "TEACHER_SECRET";
const STUDENT_SECRET_KEY = process.env.TEACHER_SECRET_KEY || "STUDENT_SECRET";

const authenticateTeacher = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) return res.status(401).json({ message: 'Token not provided' });

    jwt.verify(token, TEACHER_SECRET_KEY, (err, decoded) => {
        if (err) return res.status(401).json({ message: 'Invalid token' });

        if (decoded.user.role !== 'Teachers') return res.status(403).json({ message: 'Unauthorized' });

        req.user = decoded.user;
        next();
    });
};

const authenticateStudent= (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) return res.status(401).json({ message: 'Token not provided' });

    jwt.verify(token, STUDENT_SECRET_KEY, (err, decoded) => {
        if (err) return res.status(401).json({ message: 'Invalid token' });

        if (decoded.user.role !== 'Students') return res.status(403).json({ message: 'Unauthorized' });

        req.user = decoded.user;
        next();
    });
};

module.exports = { authenticateTeacher, authenticateStudent };
