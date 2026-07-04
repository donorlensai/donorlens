import { readGatewayConfig } from "./config/readGatewayConfig.ts";
import { createGatewayServer } from "./http/createGatewayServer.ts";

const config = readGatewayConfig();
const server = createGatewayServer(config);

server.listen(config.port, config.host, () => {
  console.log(`api-gateway listening on ${config.host}:${config.port}`);
});
