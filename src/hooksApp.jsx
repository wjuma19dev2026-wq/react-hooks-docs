import { RouterProvider } from "react-router";
import { router } from "./routes/hooks.routes";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export const HooksApp = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
