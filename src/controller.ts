import { testData } from "./test-data";


export class Controller {
  async getUsers() {
    return new Promise((resolve, _) => resolve(testData));
  }
}