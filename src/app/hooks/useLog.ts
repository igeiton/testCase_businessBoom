import { addLog as addLogAction } from "../../store/slices/logsSlice";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { LogNamesEnum } from "../../types/logTypes";

type Logs =
  | {
      type:
        | LogNamesEnum.CHANGED_USER_ROLE
        | LogNamesEnum.CHANGED_USER_ACCESS_LEVEL;
      name: string;
      prevValue: unknown;
      newValue: unknown;
    }
  | {
      type: LogNamesEnum.DELETED_USER;
      name: string;
    };

export const useLog = () => {
  const dispatch = useAppDispatch();
  const { currentUser } = useAppSelector((state) => state.users);

  const getLogMessage = (params: Logs) => {
    switch (params.type) {
      case LogNamesEnum.CHANGED_USER_ROLE:
        return `${currentUser?.name} изменил роль пользователя ${params.name} с ${params.prevValue} на ${params.newValue}`;
      case LogNamesEnum.CHANGED_USER_ACCESS_LEVEL:
        return `${currentUser?.name} изменил уровень доступа пользователя ${params.name} с ${params.prevValue} на 
            ${params.newValue}`;
      case LogNamesEnum.DELETED_USER:
        return `${currentUser?.name} удалил пользователя ${params.name}`;
      default:
        return "Unknown log type";
    }
  };

  const addLog = (params: Logs) => {
    const message = getLogMessage(params);

    dispatch(
      addLogAction({
        date: new Date().toISOString(),
        message,
      }),
    );
  };

  return {
    addLog,
  };
};
