import { List, ListItem, Typography } from "@mui/material";
import { useAppSelector } from "../../store/store";

export const LogsPage = () => {
  const { logs } = useAppSelector((state) => state.logs);

  return (
    <List sx={{ width: "100%" }}>
      {logs.map((log) => (
        <ListItem
          key={log.date + log.message}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            width: "100%",
          }}
        >
          <Typography>{log.message}</Typography>
          <Typography fontSize="12px" color="textDisabled">
            {log.date}
          </Typography>
        </ListItem>
      ))}

      {!logs.length && (
        <Typography textAlign="center" fontSize="24px">
          Записей не найдено
        </Typography>
      )}
    </List>
  );
};
