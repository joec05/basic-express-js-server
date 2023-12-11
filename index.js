import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { createServer } from 'http';
import usersRoutes from './controllers/users.js';

const app = express();
const PORT = 5000;

app.use(cors());

app.use(bodyParser.json({limit: "1gb"}));
app.use(bodyParser.urlencoded({limit: "1gb", extended: true, parameterLimit: 500000}));

var httpServer = createServer(app);

app.get('/', (req, res) => {
  res.send({
      "success": true,
      "message": "Welcome to backend zone!"
  });
});

app.use('/users', usersRoutes);

httpServer.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));