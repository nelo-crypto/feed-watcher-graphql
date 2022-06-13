import {objectType, stringArg} from 'nexus'

export const Object = objectType({
    name: 'Object',
    definition(t) {
        t.int('id')
        t.string('title')
        t.string('accessionyear')
        t.string('technique')
        t.int('mediacount')
        t.int('edition')
        t.int('totalpageviews')
        t.int('groupcount')
        t.int('people')
        t.string('objectnumber')
        t.int('colorcount')
        t.string('lastupdate')
        t.int('rank')
        t.int('imagecount')
        t.string('description')
        t.string('dateoflastpageview')
        t.string('dateoffirstpageview')
        t.string('primaryimageurl')
        t.list.field('images', {
            type: 'Image',
            resolve(root, args, ctx) {
                return [...root.images]
            },
        })
    },
})