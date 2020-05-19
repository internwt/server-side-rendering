import express from 'express';
import render from './render';
import store from '../src/store';

const PORT = 8079;
const app = express();

app.use('/dist', express.static('dist'));
app.use('/img', express.static('img'));

app.get('*', (req, res) => {
  const content = render(store);

  res.send(content);
});

app.listen(PORT, () => console.log(`Frontend service listening on port: ${PORT}`));