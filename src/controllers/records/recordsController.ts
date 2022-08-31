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
  let response: any;
  try {
    response = await axios.get(`${apiUrl}/records`, requestConfig);
  } catch (error) {
    console.log(error);
  }

  res.status(200).json({
    result: response.data,
  });

  return res;
}
