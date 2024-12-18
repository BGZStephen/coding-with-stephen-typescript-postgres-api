import { app, listenerCallback, PORT } from "."

jest.mock("express")

describe("Express", () => {
  test("An instance of app is exported", () => {
    expect(app).toBeDefined();
  })
})

describe("listenerCallback", () => {
  test("console.log is called when the listener is invoked", () => {
    const log = global.console.log;
    global.console.log = jest.fn();

    listenerCallback();

    expect(global.console.log).toHaveBeenCalledWith(
      `API server listening on port ${PORT}`
    )

    global.console.log = log;
  })
})