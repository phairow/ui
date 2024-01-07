/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Domain_Filter = {
    offset?: number;
    limit?: number;
    skip?: number;
    order?: (string | Array<string>);
    where?: Record<string, any>;
    fields?: ({
        hostname?: boolean;
        database?: boolean;
        redirect?: boolean;
        active?: boolean;
    } | Array<'hostname' | 'database' | 'redirect' | 'active'>);
};

