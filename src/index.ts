import {ApolloServer} from 'apollo-server'
import {schema} from './schema'
import {context} from './context'
import * as dotenv from 'dotenv'

dotenv.config({path: __dirname + '/../.env'})

export const server = new ApolloServer({
    schema,
    context,
    cors: {
        origin: ["https://feed-watcher-frontend.vercel.app"]
    },
})

server.listen({port: process.env.PORT}).then(({url}) => {
    console.log(`🚀  Server ready at ${url}`)
})
