import { createRoot } from "react-dom/client";
import { HooksApp } from "./hooksApp";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <>
    <HooksApp />
  </>,
);
