import { Request, Response } from "express";
import { healthGetHandler } from "./get";

describe("healthGetHandler", () => {
  test("It calls status with 200, and send with 'OK'", () => {
    const req = {} as Request;
    const res = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn().mockReturnThis()
    } as any as Response;

    healthGetHandler(req, res);
    
    expect(res.status).toHaveBeenCalledWith(200)
    expect(res.send).toHaveBeenCalledWith("OK")
  })
})