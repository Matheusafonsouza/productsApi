import { Request, Response } from 'express';

export default class ProductController {
  async index(request: Request, response: Response): Promise<Response> {
    return response.json(200).json({ ok: 'product ok!' });
  }
}
