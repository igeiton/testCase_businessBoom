import { LogType } from "../src/types/logTypes";
import { UserType } from "../src/types/userTypes";

export const users: UserType[] = [
  {
    id: 1,
    name: "John",
    login: "johnsmith",
    email: "john@example.com",
    role: "Администратор",
    access_level: 5,
    password: "zxc",
  },
  {
    id: 2,
    name: "Jane",
    login: "jane123",
    email: "jane@example.com",
    role: "Оператор",
    access_level: 1,
    password: "zxc",
  },
  {
    id: 3,
    name: "Kevin",
    login: "kevin",
    email: "kevin@example.com",
    role: "Аналитик",
    access_level: 4,
    password: "zxc",
  },
];

export const logs: LogType[] = [];
