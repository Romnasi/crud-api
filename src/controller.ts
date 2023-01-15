import { validate, v4 as uuid } from "uuid";
import { responseStatus, Message } from "./const";
import { Person } from "./type";


export class Controller {
  data: Person[]

  constructor(data : Person[] = []) {
    this.data = data
  }

  async getUsers() {
    return new Promise((resolve) => resolve(this.data));
  }

  async getUser(id: string) {
    try {
      if (!validate(id)) {
        return [responseStatus.BAD_REQUEST, Message.ID_IS_INVALID];
      }
      const user = this.data.find((user) => user.id === id);
      if (user) {
        return [responseStatus.OK, user];
      } else {
        return [responseStatus.NOT_FOUND, `User with id ${id} not found`];
      }
    } catch(err) {
      return [responseStatus.BAD_REQUEST, Message.ID_IS_INVALID];
    }
  }

  async createUser(userData: Omit<Person, 'id'>) {
    const hobbies = userData.hobbies;
    if (userData.username && userData.age && Array.isArray(hobbies)) {
      if (userData.hobbies.length === 0 || hobbies.every((cur) => typeof cur === 'string')) {
        const newUser: Person = {
          id: uuid(),
          ...userData,
        };
        this.data.push(newUser);
  
        return [responseStatus.CREATED, newUser];
      }
    }
    return [responseStatus.BAD_REQUEST, Message.NO_REQUIRED_FIELDS];
  }

  async updateUser(userData: Person) {
    try {
      if (!validate(userData.id)) {
        return [responseStatus.BAD_REQUEST, Message.ID_IS_INVALID];
      }
      const user = this.data.find((user) => user.id === userData.id);
      if (user) {
        const userIndex = this.data.findIndex((user) => user.id === userData.id)

        if (userData.username) {
          this.data[userIndex].username = userData.username
        }
        if (userData.age) {
          this.data[userIndex].age = userData.age
        }
        if (userData.hobbies && Array.isArray(userData.hobbies) &&
            (userData.hobbies.length === 0 || userData.hobbies.every((cur) => typeof cur === 'string'))) {
          this.data[userIndex].hobbies = userData.hobbies
        }
        return [responseStatus.OK, this.data[userIndex]];
      } else {
        return [responseStatus.NOT_FOUND, `User with id ${userData.id} not found`];
      }
    } catch(err) {
      return [responseStatus.BAD_REQUEST, Message.ROUTE_NOT_FOUND];
    }
  }
}