/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Domain } from '../models/Domain';
import type { DomainPartial } from '../models/DomainPartial';
import type { DomainWithRelations } from '../models/DomainWithRelations';
import type { loopback_Count } from '../models/loopback_Count';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class DomainControllerService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * @param where
     * @returns loopback_Count Domain model count
     * @throws ApiError
     */
    public count(
        where?: any,
    ): CancelablePromise<loopback_Count> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/domains/count',
            query: {
                'where': where,
            },
        });
    }

    /**
     * @param hostname
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public replaceByHostname(
        hostname: string,
        requestBody?: Domain,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/domains/{hostname}',
            path: {
                'hostname': hostname,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param hostname
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public updateByHostname(
        hostname: string,
        requestBody?: DomainPartial,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/domains/{hostname}',
            path: {
                'hostname': hostname,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param hostname
     * @param filter
     * @returns Domain Domain model instance
     * @throws ApiError
     */
    public findByHostname(
        hostname: string,
        filter?: any,
    ): CancelablePromise<Domain> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/domains/{hostname}',
            path: {
                'hostname': hostname,
            },
            query: {
                'filter': filter,
            },
        });
    }

    /**
     * @param hostname
     * @returns void
     * @throws ApiError
     */
    public deleteByHostname(
        hostname: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/domains/{hostname}',
            path: {
                'hostname': hostname,
            },
        });
    }

    /**
     * @param requestBody
     * @returns Domain Domain model instance
     * @throws ApiError
     */
    public create(
        requestBody?: Domain,
    ): CancelablePromise<Domain> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/domains',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param where
     * @param requestBody
     * @returns loopback_Count Domain PATCH success count
     * @throws ApiError
     */
    public updateAll(
        where?: any,
        requestBody?: DomainPartial,
    ): CancelablePromise<loopback_Count> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/domains',
            query: {
                'where': where,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param filter
     * @returns DomainWithRelations Array of domain model instances
     * @throws ApiError
     */
    public find(
        filter?: any,
    ): CancelablePromise<Array<DomainWithRelations>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/domains',
            query: {
                'filter': filter,
            },
        });
    }

}
