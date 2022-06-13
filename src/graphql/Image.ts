import {objectType} from 'nexus'

export const Image = objectType({
    name: 'Image',
    definition(t) {
        t.string('date')
        t.string('copyright')
        t.int('idsid')
        t.string('format')
        t.string('description')
        t.string('technique')
        t.string('renditionnumber')
        t.int('displayorder')
        t.string('baseimageurl')
        t.string('alttext')
        t.int('width')
        t.string('publiccaption')
        t.string('iiifbaseuri')
        t.int('height')
    },
})
