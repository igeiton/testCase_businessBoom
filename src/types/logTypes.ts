export type LogType = {
  date: string;
  message: string;
};

export enum LogNamesEnum {
  CHANGED_USER_ROLE = "changedUserRole",
  CHANGED_USER_ACCESS_LEVEL = "changedUserAccessLevel",
  DELETED_USER = "deletedUser",
}
