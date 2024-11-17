import { Response } from 'express';
import { IResponseDetails } from '../interfaces/post';

export const responseBody = <T>(
  res: Response,
  details: IResponseDetails<T>,
) => {
  res.status(details.status).json(details);
};
