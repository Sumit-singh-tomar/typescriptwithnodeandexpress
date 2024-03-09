import http from 'http'
import express from 'express'
import todoRouter from './routes/todo'
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json())

app.use('/', todoRouter)

const server = http.createServer(app)

server.listen(5000);