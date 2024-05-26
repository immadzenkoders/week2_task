const express = require('express');
const bodyParser = require('body-parser');
const studentRoutes = require('./src/routes/studentRoutes');
const teacherRoutes = require('./src/routes/teacherRoutes');
const courseRoutes = require('./src/routes/courseRoutes');
const enrollmentRoutes = require('./src/routes/enrollmentRoutes');
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/students', studentRoutes);
app.use('/teachers', teacherRoutes);
app.use('/courses', courseRoutes);
app.use('/enrollment', enrollmentRoutes);

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
