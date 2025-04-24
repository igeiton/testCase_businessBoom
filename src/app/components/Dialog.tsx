import CloseIcon from "@mui/icons-material/Close";
import {
  DialogContent,
  Dialog as DialogMUI,
  DialogTitle,
  IconButton,
} from "@mui/material";
import { FC } from "react";

type DialogProps = {
  open: boolean;
  onClose: (isOpen: boolean) => void;
  title: string;
  children: React.ReactNode;
};

export const Dialog: FC<DialogProps> = ({ open, onClose, title, children }) => {
  const handleClose = () => {
    onClose(false);
  };

  return (
    <DialogMUI open={open} onClose={handleClose}>
      <DialogTitle
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        gap="10px"
      >
        {title}
        <IconButton onClick={handleClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent style={{ padding: "20px 24px" }}>{children}</DialogContent>
    </DialogMUI>
  );
};
