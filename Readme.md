# Apollo Server on Fly.io 

This is an example showing how to use the beta version of ApolloServer 2.0 with Fly.io. To build your schema, edit the index.js file to match the shape of the data your application needs and connect it to backend REST endpoints. Then run `npm run build` to create a bundle that you can upload to fly using "fly deploy"

Really early build, you can replace the fetch links within index.js with your own REST API endpoints. 

### Installation

`npm install`

### Building

`npm run build`

### Testing locally 

#### Step 1: create an app on Fly
`fly create app graphql-translator`

#### Step 2: start the app locally to test 
`fly start`

#### Step 3: test it by accessing 

Querying just the ID of the car for a particular plateNumber
https://localhost:3000/?query={car(plateNumber:"APP756IE"){id:id}}

Querying just the colors of all the cars within our /cars api
https://localhost:3000/?query={cars{id:id}}

#### Step 4: deploy app to prod
`fly deploy`

Next Step to figure out how to batch REST API results from multiple api endpoints and then batch them into a single graphql response.

### Production App

Benefits of having GraphQL vs REST API : Byte Savings and security

Use-Case 1: I am interested in finding all the plateNumbers in my system and pick a particular plate number and check what model is the car.

Querying all the plateNumbers in the REST API backend 

via GraphQL
https://apollo-server-demo1.edgeapp.net/?query={cars{plateNumber:plateNumber}} 
Response Size: 176B

via REST API 
https://mvrp.herokuapp.com/api/cars
Response Size: 1.2KB

Querying the model number for a particular plate

via GraphQL
Querying just the model of the car for a particular plateNumber
https://apollo-server-demo1.edgeapp.net/?query={car(plateNumber:%22APP756IE%22){model:model}}
Response Size: 173B

via REST API 
https://mvrp.herokuapp.com/api/car?plateNumber=APP756IE
Response Size: 421B

