import { client } from "./ratekl/core";

export async function loadDomains() {
    const domains =  await client().domainController.find();
    return domains;
}

export async function loadDomain(domain: string) {
    const domains =  await client().domainController.findByHostname(domain);
    return domains;
}
