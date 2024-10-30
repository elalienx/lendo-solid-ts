/* @refresh reload */
// Node modules
import { render } from "solid-js/web";

// Project files
import "./index.css";
import App from "./App.tsx";

// Properties
const root = document.getElementById("root");

render(() => <App />, root!);
