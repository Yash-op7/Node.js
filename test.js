const server = new ApolloServer({
    typeDef:
    `
    type User {
        id: ID!
        carId: ID
        age: Number!
        username: String!
        isVerfied: Boolean
    }

    type Car {

    }
    `,
    resolvers:
    {
        Query:
        {
            
        }
    }
})