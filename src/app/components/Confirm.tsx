import { FC } from "react";
import { Button } from "./Button";
import { Box, Typography } from "@mui/material";
import { useAppDispatch } from "../../store/store";
import { deleteUser } from "../../store/slices/usersSlice";
import { useLog } from "../hooks/useLog";
import { LogNamesEnum } from "../../types/logTypes";

type ConfirmProps = {
  id: number;
  name: string;
};

export const Confirm: FC<ConfirmProps> = ({ id, name }) => {
  const dispatch = useAppDispatch();
  const { addLog } = useLog();

  const handleDelete = () => {
    addLog({ type: LogNamesEnum.DELETED_USER, name });
    dispatch(deleteUser({ id }));
  };

  return (
    <Box display="flex" flexDirection="column" gap="25px">
      <Typography>
        Вы точно хотите удалить пользователя <strong>{name}</strong>?
      </Typography>
      <Button color="error" size="small" onClick={handleDelete}>
        Удалить
      </Button>
    </Box>
  );
};
