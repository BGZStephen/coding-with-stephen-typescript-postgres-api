import { config } from "../../config"

describe("GET /health", () => {
  test("It returns a 200 status code with an 'OK' body", async () => {
    const apiResponse = await fetch(`${config.API_URL}/health`)

    expect(apiResponse.ok).toBe(true)
    expect(apiResponse.status).toEqual(200)
    expect(await apiResponse.text()).toEqual("OK")
  })
})