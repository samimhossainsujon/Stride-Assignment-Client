import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import AuthProvider from "./provider/AuthProvider.jsx";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <AuthProvider>
      <StrictMode>
        <RouterProvider router={router} />
      </StrictMode>
    </AuthProvider>
  </Provider>
);
