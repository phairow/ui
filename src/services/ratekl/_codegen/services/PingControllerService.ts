/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class PingControllerService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * @returns any Ping Response Data
     * @throws ApiError
     */
    public ping(): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/ping',
        });
    }

}
