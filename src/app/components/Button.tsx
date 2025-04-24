import { Button as ButtonMUI } from "@mui/material";
import { ComponentProps, FC } from "react";

type ButtonProps = {
  children: React.ReactNode;
} & ComponentProps<typeof ButtonMUI>;

export const Button: FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <ButtonMUI
      variant="contained"
      size="small"
      sx={{ textTransform: "capitalize" }}
      {...props}
    >
      {children}
    </ButtonMUI>
  );
};
