import { client } from "./ratekl/core";

export async function loadDomains(currentDomain?: string) {
    const domains =  await client(currentDomain).domainController.find();
    return domains;
}

export async function loadDomain(domain: string) {
    const domains =  await client(domain).domainController.findByHostname(domain);
    return domains;
}
