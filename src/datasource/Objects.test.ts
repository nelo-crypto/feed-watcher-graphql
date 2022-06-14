import Objects from './Objects'

describe('Object', () => {
    it('should return correct query URL', async () => {
        const objectsInstance = new Objects()

        const url: string = objectsInstance.serialize({
            rank: 'arg1',
            hasimage: '1',
            sort: 'arg1',
            sortorder: 'arg1',
        })

        console.log('url', url)

        expect(url).toContain('rank')
        expect(url).toContain('hasimage')
        expect(url).toContain('sort')
        expect(url).toContain('sortorder')
        expect((url.match(/=/g) || []).length).toEqual(4)
    })
})