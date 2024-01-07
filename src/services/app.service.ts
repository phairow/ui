import { cache } from "react";
import { client } from "./ratekl/core";
import { AppInfo } from "@/util/AppInfo";

export const loadApp = cache(async (domain: string): Promise<AppInfo> => {
  const app =  await client(domain).appInfoController.find();
  return app[0] as AppInfo;
});
