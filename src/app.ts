import express from 'express';
const PORT = 8080;
const server = express();

server.listen(PORT, () => {
    console.log(`started listening on port ${PORT}...`);
})