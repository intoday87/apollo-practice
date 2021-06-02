import Koa from 'koa'
import {ApolloServer, gql, IResolvers} from 'apollo-server-koa'
import typeDefs from '../schema'

// Provide resolver functions for your schema fields
const resolvers: IResolvers = {
    Query: {
        hello: () => 'Hello world!',
        totalPhotos:(source, args) => {
           return args.id
        },
        allPhotos: (source, args) => {
            const photos = [ { id: '1', name: 'nick1', url: 'www.example-1.com', description: 'description' }, { id: '2', name: 'nick2', url: 'www.example-2.com', description: 'description' } ]
            if (args.sort === 'ASCENDING') {
                return photos.sort((a, b) => Number(b.id) - Number(a.id))
            }

            return photos
        }
    },
};

const apolloServer = new ApolloServer({ typeDefs, resolvers });

const app = new Koa();

app.use(apolloServer.getMiddleware())
app.use(async ctx => {
    ctx.body = 'Hello World';
});

const port = 3001;
app.listen(port);

console.log(`🚀 Server ready at http://localhost:${port}${apolloServer.graphqlPath}`);