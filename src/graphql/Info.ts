import {objectType} from 'nexus'

export const Info = objectType({
    name: 'Info',
    definition(t) {
        t.int('totalrecordsperquery')
        t.int('totalrecords')
        t.int('pages')
        t.int('page')
        t.string('next')
        t.string('prev')
    },
})
