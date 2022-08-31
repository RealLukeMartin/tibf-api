import axios from 'axios';
import { Request, Response } from 'express';

import { config } from '../../config';

export async function recordsController(req: Request, res: Response) {
  const { apiKey, apiUrl } = config.cfbd;

  const requestConfig = {
    headers: { Authorization: `Bearer ${apiKey}` },
    params: {
      team: 'texas',
    },
  };

  const response = await axios.get(`${apiUrl}/records`, requestConfig);

  res.status(200).json({
    result: response.data,
  });

  return res;
}
