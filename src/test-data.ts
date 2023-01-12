import { v4 as uuid } from "uuid";
import { Person } from "./type";

export const testData: Person[] = [
  {
    id: uuid(),
    username: 'Vasiliy',
    age: 23,
    hobbies: ['piano']
  },
  {
    id: uuid(),
    username: 'Maks',
    age: 34,
    hobbies: ['Chess']
  },
];
