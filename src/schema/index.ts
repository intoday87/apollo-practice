import { gql } from 'apollo-server-koa'

export default gql`
    type Query {
        hello: String
    }
    
    type Photo {
        id: ID!
        name: String!
        url: String!
        description: String!
    }
`