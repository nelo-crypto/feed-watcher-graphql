import {extendType, intArg, objectType, stringArg} from 'nexus'

export const Objects = objectType({
    name: 'Objects',
    definition(t) {
        t.field('info', {
            type: 'Info',
            resolve(root, args, ctx) {
                return {...root.info}
            },
        })
        t.list.field('records', {
            type: 'Object',
            resolve(root, args, ctx) {
                return [...root.records]
            },
        })
    },
})

export const ObjectsQuery = extendType({
    type: 'Query',
    definition(t) {
        t.nonNull.field('objects', {
            type: 'Objects',
            args: {
                // Filters
                classification: stringArg(),
                verificationlevel: intArg(),
                hasimage: intArg(),
                // Pagination
                size: intArg(),
                page: intArg(),
                // Sorting
                sort: stringArg(),
                sortorder: stringArg(),
            },
            async resolve(parent, args, context, info) {
                console.debug('Args', args)

                const response = await context.objectsDataSource.getResponse(args)

                console.debug('Info', response.info)
                console.debug('Records', response.records.length)

                return response
            },
        })
    },
})