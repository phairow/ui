import { coreClient } from "../_codegen/coreClient";
import { domainConfig } from '../../../domain.config';

const clients: { [domain: string]: coreClient } = {};

const {
  protocol,
  port,
  suffix,
  apiPath,
} = domainConfig;

export const client = (domain:string = `ratekl.com`) => {
  let client = clients[domain];

  if (client) return client;
    
  const config = {
    BASE: `${protocol}www.${domain}${suffix}${port}${apiPath}`,
  };

  client = new coreClient(config);
  clients[domain] = client;

  return client;
}
