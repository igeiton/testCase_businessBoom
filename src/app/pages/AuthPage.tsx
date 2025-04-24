import { Box, FormControl, Paper, TextField, Typography } from "@mui/material";
import { FormEvent, useCallback, useState } from "react";
import { setCurrentUser } from "../../store/slices/usersSlice";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { Button } from "../components/Button";

export const AuthPage = () => {
  const dispatch = useAppDispatch();
  const { users } = useAppSelector((state) => state.users);

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [hasErrors, setErrors] = useState(false);

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      setErrors(false);

      const user = users.find((user) => user.login === login);

      if (!user) {
        setErrors(true);
        return;
      }

      if (user.password !== password) {
        setErrors(true);
        return;
      }

      dispatch(setCurrentUser(user));
    },
    [dispatch, login, password, users],
  );

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      maxWidth="100%"
      minHeight="100vh"
    >
      <Paper
        elevation={12}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "25px",
          padding: "20px 24px",
          width: "400px",
          maxWidth: "90%",
        }}
      >
        <Typography textAlign="center" fontSize="24px">
          Авторизация
        </Typography>
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "25px",
          }}
          onSubmit={handleSubmit}
          name="auth-form"
        >
          <FormControl>
            <TextField
              label="Логин"
              aria-describedby="user-name-text"
              value={login}
              onChange={(e) => setLogin(e.target.value)}
            />
          </FormControl>

          <FormControl>
            <TextField
              label="Пароль"
              type="password"
              aria-describedby="user-password-text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>

          {hasErrors && (
            <Typography fontSize="12px" color="red" textAlign="center">
              Неверный логин или пароль
            </Typography>
          )}

          <Button size="large" variant="outlined" type="submit">
            Войти
          </Button>
        </form>
      </Paper>
    </Box>
  );
};
