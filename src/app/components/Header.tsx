import { AppBar, Toolbar } from "@mui/material";
import { FC } from "react";
import { NavLink } from "react-router-dom";
import { RoutePathsEnum } from "../../config/routes";

export const Header: FC = () => {
  return (
    <AppBar position="sticky">
      <Toolbar sx={{ justifyContent: "flex-end", gap: "25px" }}>
        <NavLink
          to={RoutePathsEnum.MAIN}
          className={({ isActive }) => (isActive ? "hasUnderline" : "")}
        >
          Пользователи
        </NavLink>
        <NavLink
          to={RoutePathsEnum.LOGS}
          className={({ isActive }) => (isActive ? "hasUnderline" : "")}
        >
          Логи
        </NavLink>
      </Toolbar>
    </AppBar>
  );
};
