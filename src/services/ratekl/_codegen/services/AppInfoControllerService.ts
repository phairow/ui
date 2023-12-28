/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AppInfo } from '../models/AppInfo';
import type { AppInfoPartial } from '../models/AppInfoPartial';
import type { AppInfoWithRelations } from '../models/AppInfoWithRelations';
import type { loopback_Count } from '../models/loopback_Count';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class AppInfoControllerService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * @param where
     * @returns loopback_Count AppInfo model count
     * @throws ApiError
     */
    public count(
        where?: any,
    ): CancelablePromise<loopback_Count> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/app-info/count',
            query: {
                'where': where,
            },
        });
    }

    /**
     * @param id
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public replaceById(
        id: string,
        requestBody?: AppInfo,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/app-info/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param id
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public updateById(
        id: string,
        requestBody?: AppInfoPartial,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/app-info/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param id
     * @param filter
     * @returns AppInfo AppInfo model instance
     * @throws ApiError
     */
    public findById(
        id: string,
        filter?: any,
    ): CancelablePromise<AppInfo> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/app-info/{id}',
            path: {
                'id': id,
            },
            query: {
                'filter': filter,
            },
        });
    }

    /**
     * @param id
     * @returns void
     * @throws ApiError
     */
    public deleteById(
        id: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/app-info/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @param requestBody
     * @returns AppInfo AppInfo model instance
     * @throws ApiError
     */
    public create(
        requestBody?: AppInfo,
    ): CancelablePromise<AppInfo> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/app-info',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param where
     * @param requestBody
     * @returns loopback_Count AppInfo PATCH success count
     * @throws ApiError
     */
    public updateAll(
        where?: any,
        requestBody?: AppInfoPartial,
    ): CancelablePromise<loopback_Count> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/app-info',
            query: {
                'where': where,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param filter
     * @returns AppInfoWithRelations Array of appInfo model instances
     * @throws ApiError
     */
    public find(
        filter?: any,
    ): CancelablePromise<Array<AppInfoWithRelations>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/app-info',
            query: {
                'filter': filter,
            },
        });
    }

}
