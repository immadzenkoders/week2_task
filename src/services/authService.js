const jwt = require('jsonwebtoken');
const db = require("../config/connection");
const { generateToken } = require("../middlewares/authMiddleware");

const checkUserExists = async (email, table) => {
    try {
        const lowercaseEmail = email.toLowerCase();     
        const [result] = await db.execute(`SELECT * FROM ${table} WHERE LOWER(email) = ?`, [lowercaseEmail]);
        if (result.length >0) {
            return true;
        }
    } catch (error) {
        console.error("Error checking user existence:", error);
        throw error; // Re-throw the error to be handled upstream
    }
};

const signup = async (name, email, password, table) => {
    if (!name || !email || !password) {
        return null;
    }
    const userExists = await checkUserExists(email, table);
    if (userExists) {
        return null;
    }
    try {
        const newUser = { name, email, password };
        const result = await db.execute(`INSERT INTO ${table} (name, email, password) VALUES (?, ?, ?)`, [name, email, password]);
        const userId = result.insertId;
        const token = generateToken(email,table ); 
        return { token, newUser };
    } catch (error) {
        console.error(`Error signing up user in ${table} table:`, error);
        throw error;
    }
};

const signin = async (email, password, table) => {
    try {
        const [result] = await db.execute(`SELECT * FROM ${table} WHERE email = ?`, [email]);

        if (result.length === 0) {
            return null;
        }

        const user = result[0];
        if (!user.password || user.password !== password) {
            return null; 
        }

        const token = generateToken(email, table);

        return token;
    } catch (error) {
        console.error(`Error signing in user in ${table} table:`, error);
        throw error;
    }
}
module.exports = { signup, signin, checkUserExists };