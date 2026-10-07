import { render } from "solid-js/web";
import { navPaths } from "./modules/app-shell/data/navigation";
import App from "./App";
import "./styles/style.css";

const root = document.getElementById("root");

if (!root) {
  throw new Error("No se encontró el elemento #root");
}


// La SPA enruta por hash, pero los links compartidos llegan como path servido por el daemon
// (`/initiatives?project=<id>`). Sin hash el router arranca siempre en Home: se siembra el
// hash con el path y la query reales para abrir la vista y el proyecto pedidos.
const servedPath = window.location.pathname.replace(/\/+$/, "") || "/";
if (/^(#\/?)?$/.test(window.location.hash) && servedPath !== "/" && Object.values(navPaths).includes(servedPath)) {
  window.location.replace(`#${servedPath}${window.location.search}`);
}

render(() => <App />, root);
