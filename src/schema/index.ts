import { gql } from 'apollo-server-koa'

export default gql`
    type Query {
        hello: String
        totalPhotos(id: Int=1): Int!
        allPhotos(sort: SortDirection = ASCENDING): [Photo!]!
        totalUsers: Int!
        allUsers: [User!]!
    }
    
    type User {
        githubLogin: ID!
        name: String
        avatar: String
        postedPhotos: [Photo!]!
    }

    type Photo {
        id: ID!
        name: String!
        url: String!
        description: String!
    }

    enum SortDirection {
        ASCENDING
        DESCENDING
    }

    schema {
        query: Query
    }
`