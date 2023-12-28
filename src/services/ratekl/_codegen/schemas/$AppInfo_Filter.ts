/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $AppInfo_Filter = {
    properties: {
        offset: {
            type: 'number',
        },
        limit: {
            type: 'number',
            minimum: 1,
        },
        skip: {
            type: 'number',
        },
        order: {
            type: 'one-of',
            contains: [{
                type: 'string',
            }, {
                type: 'array',
                contains: {
                    type: 'string',
                },
            }],
        },
        where: {
            type: 'dictionary',
            contains: {
                properties: {
                },
            },
        },
        fields: {
            type: 'one-of',
            contains: [{
                properties: {
                    name: {
                        type: 'boolean',
                    },
                    info: {
                        type: 'boolean',
                    },
                },
            }, {
                type: 'array',
                contains: {
                    type: 'Enum',
                },
            }],
        },
    },
} as const;
