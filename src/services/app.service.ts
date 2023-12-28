import { client } from "./ratekl/core";

export async function loadApp(domain: string) {
    const app =  await client(domain).appInfoController.find();
    return app;
}