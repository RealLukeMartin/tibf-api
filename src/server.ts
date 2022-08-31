import express from 'express';

import { createRestRoutes } from './routes';

export async function startServer() {
  const app = express();

  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  app.use('/', createRestRoutes());

  return app;
}
