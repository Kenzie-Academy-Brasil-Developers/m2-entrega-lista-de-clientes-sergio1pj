import { Api } from "./api.js";
import { Render } from "./render.js";
const clients = await Api.listarClientes();
const body = document.querySelector("body");
body.appendChild(Render.renderClientList(clients));