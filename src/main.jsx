import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./components/layout/Navbar/Navbar.css"
import "./components/common/Card/Card.css"

createRoot(document.getElementById("root")).render(<App />);
