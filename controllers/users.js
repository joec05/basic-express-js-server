import express from 'express';

const usersRoutes = express.Router();

usersRoutes.post('/createUser', async (req, res) => {
    console.log(req.body);
    res.json({
        message: 'Successfully run query',
    });
});

usersRoutes.get('/getUser', async (req, res) => {
    console.log(req.body);
    res.json({
        message: 'Successfully run query',
    });
});

usersRoutes.delete('/deleteUser', async (req, res) => {
    console.log(req.body);
    res.json({
        message: 'Successfully run query',
    });
});

usersRoutes.patch('/updateUser', async (req, res) => {
    console.log(req.body);
    res.json({
        message: 'Successfully run query',
    });
});

export default usersRoutes;