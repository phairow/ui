/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type AppInfo_Filter = {
    offset?: number;
    limit?: number;
    skip?: number;
    order?: (string | Array<string>);
    where?: Record<string, any>;
    fields?: ({
        name?: boolean;
        info?: boolean;
    } | Array<'name' | 'info'>);
};

