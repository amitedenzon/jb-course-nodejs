import express from "express";
const server = express();
const PORT = 8080;

server.listen(PORT, () => {
    console.log(`started listening on port: ${PORT}...`)
})