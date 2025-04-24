import { Box, Typography } from "@mui/material";
import { FC, useState } from "react";
import { useAppSelector } from "../../store/store";
import { UserType } from "../../types/userTypes";
import { Button } from "./Button";
import { Confirm } from "./Confirm";
import { Dialog } from "./Dialog";
import { EditUserForm } from "./EditUserForm";

type UserCardProps = {
  user: UserType;
};

export const UserCard: FC<UserCardProps> = ({ user }) => {
  const { currentUser } = useAppSelector((state) => state.users);

  const [isOpenEditDialog, setOpenEditDialog] = useState(false);
  const [isOpenDeleteDialog, setOpenDeleteDialog] = useState(false);

  const hasAccess = currentUser?.access_level && currentUser.access_level >= 3;

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      width="100%"
    >
      <Box>
        <Typography fontSize="16px">{user.name}</Typography>
        <Typography fontSize="14px" color="textDisabled">
          {user.role}
        </Typography>
      </Box>

      {hasAccess && (
        <Box display="flex" gap="15px">
          <Button color="warning" onClick={() => setOpenEditDialog(true)}>
            Редактировать
          </Button>
          <Button
            color="error"
            onClick={() => setOpenDeleteDialog(true)}
            disabled={user.id === currentUser.id}
          >
            Удалить
          </Button>
        </Box>
      )}

      <Dialog
        open={isOpenEditDialog}
        onClose={() => setOpenEditDialog(false)}
        title="Редактировать пользователя"
      >
        <EditUserForm user={user} onSubmit={() => setOpenEditDialog(false)} />
      </Dialog>

      <Dialog
        open={isOpenDeleteDialog}
        onClose={() => setOpenDeleteDialog(false)}
        title="Удалить пользователя"
      >
        <Confirm id={user.id} name={user.name} />
      </Dialog>
    </Box>
  );
};
