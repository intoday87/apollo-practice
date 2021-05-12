import Koa from 'koa'
import { ApolloServer, gql } from 'apollo-server-koa'
import typeDefs from '../schema'

// Provide resolver functions for your schema fields
const resolvers = {
    Query: {
        hello: () => 'Hello world!',
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