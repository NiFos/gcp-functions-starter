import { Request, Response } from "express";

export async function name(req: Request, res: Response): Promise<any> {
  const name = req.query.name;
  return res.status(200).send({ "Your name is": name || "Default name" });
}
