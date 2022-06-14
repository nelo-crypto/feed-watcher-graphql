import {HTTPDataSource} from 'apollo-datasource-http'
import API from '../enums/Api'

export default class Objects extends HTTPDataSource {
    constructor() {
        // global client options
        super(API.BASE_URL, {
            clientOptions: {
                bodyTimeout: 5000,
                headersTimeout: 2000,
            },
        })
    }

    serialize(parameters: any) {
        let str = []

        for (let property in parameters) {
            if (parameters.hasOwnProperty(property)) {
                str.push(encodeURIComponent(property) + '=' + encodeURIComponent(parameters[property].toString()))
            }
        }

        return str.join('&')
    }

    async getResponse(parameters: any) {
        const params: string = this.serialize(parameters)

        let path = `/Object?apikey=${process.env.API_KEY}`

        if (params) {
            path += '&' + params
        }

        console.debug('API Query', path)

        const response: any = await this.get(path)

        return {
            records: response.body.records,
            info: response.body.info,
        }
    }
}
