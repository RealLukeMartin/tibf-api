import { Router } from 'express';

import { recordsController } from '../controllers';

export function createRecordsRoutes() {
  const router = Router();

  // Health Check
  router.get('/', recordsController);

  return router;
}
