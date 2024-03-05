import express from 'express';
import usersRouter from './routers/users';

const PORT = 8080;
const server = express();

server.use(`/users`, usersRouter);

server.listen(PORT, () => {
    console.log(`started listening on port ${PORT}...`);
})