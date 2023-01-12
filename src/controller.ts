import { testData as data } from "./test-data";


export class Controller {
  async getUsers() {
    return new Promise((resolve) => resolve(data));
  }

  async getUser(id: string) {
    return new Promise((resolve, reject) => {
        const user = data.find((user) => user.id === id);
        if (user) {
            resolve(user);
        } else {
            reject(`User with id ${id} not found `);
        }
    });
  }
}