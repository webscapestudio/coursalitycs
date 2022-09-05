import { instance } from "."

export const Topics = {
  async getAll() {
    const data = await instance.get("/subjects")
    return data
  },
}
