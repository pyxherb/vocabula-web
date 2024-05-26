import { renderApp } from "..";

interface ServerConfig {
	backendServer: string;
}

export let serverConfig : ServerConfig | undefined;

export function loadServerConfig() {
	let xhr = new XMLHttpRequest();

	xhr.onreadystatechange = function() {
		if(xhr.readyState === XMLHttpRequest.DONE) {
			switch(xhr.status) {
				case 200:
					serverConfig = JSON.parse(xhr.responseText) as ServerConfig;
					renderApp();
					break;
				default:
					throw Error("Error loading server configuration")
			}
		}
	}

	xhr.open("GET", "srvcfg.json")
	xhr.send()
}
