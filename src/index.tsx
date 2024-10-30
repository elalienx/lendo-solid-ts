// Node modules
import { render } from "solid-js/web";

// Project files
import App from "./App.tsx";
import "./styles/style.css";

// Properties
const root = document.getElementById("root");

render(() => <App />, root!);
