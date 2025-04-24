import { List, ListItem } from "@mui/material";
import { useAppSelector } from "../../store/store";
import { UserCard } from "../components/UserCard";

export const MainPage = () => {
  const { users } = useAppSelector((state) => state.users);

  return (
    <List sx={{ width: "100%" }}>
      {users.map((user) => (
        <ListItem key={user.id} sx={{ width: "100%" }}>
          <UserCard user={user} />
        </ListItem>
      ))}
    </List>
  );
};
