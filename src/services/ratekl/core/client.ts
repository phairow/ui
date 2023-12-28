/* ratekl added ability to use dynamic hostname */
/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseHttpRequest } from "../_codegen/core/BaseHttpRequest";
import type { OpenAPIConfig } from "../_codegen/core/OpenAPI";
import { FetchHttpRequest } from "../_codegen/core/FetchHttpRequest";

import { AppInfoControllerService } from "../_codegen/services/AppInfoControllerService";
import { DomainControllerService } from "../_codegen/services/DomainControllerService";
import { PingControllerService } from "../_codegen/services/PingControllerService";

type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;

export class coreClient {
  public readonly appInfoControllers: {
    [domain: string]: AppInfoControllerService;
  } = {};
  public readonly appInfoController: (
    domain: string
  ) => AppInfoControllerService;
  public readonly domainController: DomainControllerService;
  public readonly pingController: PingControllerService;

  public readonly request: BaseHttpRequest;

  constructor(
    config?: Partial<OpenAPIConfig>,
    HttpRequest: HttpRequestConstructor = FetchHttpRequest
  ) {
    this.request = new HttpRequest({
      BASE: config?.BASE ?? "",
      VERSION: config?.VERSION ?? "0.0.1",
      WITH_CREDENTIALS: config?.WITH_CREDENTIALS ?? false,
      CREDENTIALS: config?.CREDENTIALS ?? "include",
      TOKEN: config?.TOKEN,
      USERNAME: config?.USERNAME,
      PASSWORD: config?.PASSWORD,
      HEADERS: config?.HEADERS,
      ENCODE_PATH: config?.ENCODE_PATH,
    });

    this.appInfoController = (domain: string) => {
      let controller = this.appInfoControllers[domain];

      if (controller) {
        return controller;
      }

      controller = new AppInfoControllerService(this.request);
      this.appInfoControllers[domain] = controller;

      return controller;
    };
    this.domainController = new DomainControllerService(this.request);
    this.pingController = new PingControllerService(this.request);
  }
}
