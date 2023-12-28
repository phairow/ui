import { client } from "./ratekl/core";

export async function loadDomains() {
    const domains =  await client().domainController.find();
    return domains;
}