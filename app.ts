import express from 'express';
import path from 'path';
const app = express()
const PORT = 3000

app.use('/src', express.static('src'));
app.use('/build', express.static('build'));
app.use('/Assets', express.static('Assets'));

app.get('/', (request, response) => {
  response.sendFile(path.join(__dirname, '/index.html'));
})

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
