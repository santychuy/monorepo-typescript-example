import { Request, Response } from 'express';

export const IndexController = (_req: Request, res: Response) => {
  return res.json({ prueba: 'Prueba' });
};
