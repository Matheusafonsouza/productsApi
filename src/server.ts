import express, { Request, Response } from 'express';

const app = express();

app.get('/', (request: Request, response: Response) => {
  return response.status(200).json({ ok: true });
});

app.listen(3333, () => {
  console.log('Server running on port 3333!');
});
