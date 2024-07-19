const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 1212;

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/api/DDS', (req, res) => {
  const receivedText = req.body.text;

  // Делаем что-то с полученным текстом (в данном случае просто отправим тот же текст обратно)
  res.send(receivedText);
});

app.listen(port, () => {
  console.log(`Сервер запущен на http://localhost:${port}`);
});