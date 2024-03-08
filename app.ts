import http from 'http'
import express from 'express'
import todoRouter from './routes/todo'

const app = express();

app.use('/',todoRouter)

const server = http.createServer(app)

server.listen(5000);