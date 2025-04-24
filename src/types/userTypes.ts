export type UserType = {
  id: number;
  name: string;
  login: string;
  email: string;
  role: RoleType;
  access_level: AccessLevelsType;
  password: string;
};

export type RoleType =
  | "Аналитик"
  | "Администратор"
  | "Оператор"
  | "Пользователь";

export type AccessLevelsType = 1 | 2 | 3 | 4 | 5;

export enum UserRolesEnum {
  ANALYTIC = "Аналитик",
  ADMIN = "Администратор",
  OPERATOR = "Оператор",
  USER = "Пользователь",
}

export enum AccessLevelsEnum {
  ONE = 1,
  TWO = 2,
  THREE = 3,
  FOUR = 4,
  FIVE = 5,
}
