import { Outlet } from "react-router-dom";
import { useAppSelector } from "../store/store";
import { Layout } from "./layouts/layout";
import { AuthPage } from "./pages/AuthPage";

function App() {
  const { currentUser } = useAppSelector((state) => state.users);

  if (!currentUser) {
    return <AuthPage />;
  }

  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}

export default App;
