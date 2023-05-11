import React from "react";
import { createRoot } from "react-dom/client";
import Enterprise from "./Enterprise";

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<Enterprise />);
