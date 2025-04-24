import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { ROUTE_CONFIG } from "../config/routes";
import { persistor, store } from "../store/store";

export const Providers = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={ROUTE_CONFIG}></RouterProvider>
      </PersistGate>
    </Provider>
  );
};
