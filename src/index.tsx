import "./index.css";
import { createRoot } from "react-dom/client";
import { AppRouter } from "./AppRouter";

const container = document.getElementById("root");
if (container) {
  const root = createRoot(container);
  root.render(<AppRouter />);
} else {
  // fallback for environments without DOM
  console.error("Root container not found");
}
