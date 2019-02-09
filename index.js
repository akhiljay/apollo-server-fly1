const { ApolloServer } = require("apollo-server-cloudflare");

const gql = String.raw;


const server = new ApolloServer({
  typeDefs: gql`
  type Car {
    id: Int!
    plateNumber: String!
    color: String!
    model: String!
    chasisNumber: String!
    vehicleStatus: String!
    yearOfManufacture: Int!
    issueDate: String!
    expiryDate: String!
  }
  type Query {
    car(plateNumber: String!): Car
    cars: [Car]
  }
`,
resolvers: {
  Query: {
    car: (parent, args) => {
      const {plateNumber} = args
      return fetch(`https://mvrp.herokuapp.com/api/car?plateNumber=${plateNumber}`).then(res => res.json())
    },
    cars: () => {
      return fetch(`https://mvrp.herokuapp.com/api/cars`).then(res => res.json())
    }
  },
  Car: {
    vehicleStatus: ({ status }) => status,
    yearOfManufacture: ({ productionYear }) => productionYear,
  },
},


dataSources: () => ({
  mvpAPI: new MvrpAPI()
})

});



server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
