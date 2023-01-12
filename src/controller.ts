import { testData as data } from "./test-data";
import { validate } from "uuid";
import { responseStatus, Message } from "./const";


export class Controller {
  async getUsers() {
    return new Promise((resolve) => resolve(data));
  }

  async getUser(id: string) {
    try {
      if (!validate(id)) {
        return [responseStatus.BAD_REQUEST, Message.ID_IS_INVALID];
      }
      const user = data.find((user) => user.id === id);
      if (user) {
          return [responseStatus.OK, user];
      } else {
          return [responseStatus.NOT_FOUND, `User with id ${id} not found`];
      }
    } catch(err) {
      return [responseStatus.BAD_REQUEST, Message.ID_IS_INVALID];
    }
  }
}