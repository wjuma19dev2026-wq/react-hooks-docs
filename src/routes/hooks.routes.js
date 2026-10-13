// @ts-check

import { createBrowserRouter } from "react-router";
import { HooksLayout } from "../hooks/layouts/HooksLayout";
import { UseEffectPage } from "../hooks/pages/UseEffectPage";

/**
 * @typedef {import('react-router-dom').RouteObject} RouteObject
 */

/**
 * @type { RouteObject[] }
 */
const routes = [
  {
    path: "/",
    Component: HooksLayout,
    children: [{ path: "", Component: UseEffectPage }],
  },
];

export const router = createBrowserRouter(routes);
