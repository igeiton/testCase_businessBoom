import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { FC, FormEvent, useMemo, useState } from "react";
import { updateUser } from "../../store/slices/usersSlice";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { LogNamesEnum } from "../../types/logTypes";
import {
  AccessLevelsEnum,
  AccessLevelsType,
  RoleType,
  UserRolesEnum,
  UserType,
} from "../../types/userTypes";
import { useLog } from "../hooks/useLog";
import { Button } from "./Button";

type EditUserFormProps = {
  user: UserType;
  onSubmit?: VoidFunction;
};

export const EditUserForm: FC<EditUserFormProps> = ({ user, onSubmit }) => {
  const dispatch = useAppDispatch();
  const { currentUser } = useAppSelector((state) => state.users);
  const [userInfo, setUserInfo] = useState(user);
  const { addLog } = useLog();

  const userRoleArray = useMemo(() => Object.values(UserRolesEnum), []);

  const accessLevelArray = useMemo(
    () => Object.values(AccessLevelsEnum).filter(Number),
    [],
  );

  const handleChangeUserRole = (event: SelectChangeEvent<RoleType>) => {
    const value = event.target.value as RoleType;

    setUserInfo({
      ...userInfo,
      role: value,
    });
  };

  const handleChangeAccessLevel = (
    event: SelectChangeEvent<AccessLevelsType>,
  ) => {
    const value = event.target.value as AccessLevelsType;

    setUserInfo({
      ...userInfo,
      access_level: value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (userInfo.role !== user.role) {
      addLog({
        type: LogNamesEnum.CHANGED_USER_ROLE,
        name: userInfo.name,
        prevValue: user.role,
        newValue: userInfo.role,
      });
    }

    if (userInfo.access_level !== user.access_level) {
      addLog({
        type: LogNamesEnum.CHANGED_USER_ACCESS_LEVEL,
        name: userInfo.name,
        prevValue: user.access_level,
        newValue: userInfo.access_level,
      });
    }

    dispatch(
      updateUser({
        id: userInfo.id,
        role: userInfo.role,
        accessLevel: userInfo.access_level,
      }),
    );

    if (onSubmit) onSubmit();
  };

  return (
    <form
      style={{ display: "flex", flexDirection: "column", gap: "25px" }}
      onSubmit={handleSubmit}
    >
      <FormControl fullWidth>
        <InputLabel id="user-role-label">Роль пользователя</InputLabel>
        <Select
          labelId="user-role-label"
          label="Роль пользователя"
          sx={{ width: "100%" }}
          value={userInfo.role}
          onChange={(value) => handleChangeUserRole(value)}
          name="user_role"
        >
          {userRoleArray.map((accessLevel: UserRolesEnum) => (
            <MenuItem key={accessLevel} value={accessLevel}>
              {accessLevel}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl fullWidth>
        <InputLabel id="access-level-label">Уровень доступа</InputLabel>
        <Select
          labelId="access-level-label"
          label="Уровень доступа"
          sx={{ width: "100%" }}
          value={userInfo.access_level}
          onChange={(value) => handleChangeAccessLevel(value)}
          name="access_level"
        >
          {accessLevelArray.map((accessLevel) => (
            <MenuItem
              key={accessLevel}
              value={accessLevel}
              disabled={
                Number(accessLevel) >= Number(currentUser?.access_level)
              }
            >
              {accessLevel}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <Button type="submit" size="medium">
        Сохранить
      </Button>
    </form>
  );
};
