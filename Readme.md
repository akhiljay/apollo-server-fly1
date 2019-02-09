# Apollo Server on Fly.io 

This is an example showing how to use the beta version of ApolloServer 2.0 with Fly.io. To build your schema, edit the index.js file to match the shape of the data your application needs and connect it to backend REST endpoints. Then run `npm run build` to create a bundle that you can upload to fly using "fly deploy"

Really early build, you can replace the fetch links within index.js with your own REST API endpoints. 

### Installation

`npm install`

### Building

`npm run build`

### Testing locally 

Step 1: create an app on Fly
`fly create app graphql-translator`

Step 2: start the app locally to test 
`fly start`

Step 3: test it by accessing 

Querying just the ID of the car for a particular plateNumber
https://localhost:3000/?query={car(plateNumber:"APP756IE"){id:id}}

Querying just the colors of all the cars within our /cars api
https://localhost:3000/?query={cars{id:id}}

Step 4: deploy app to prod
`fly deploy`

Next Step to figure out how to batch REST API results from multiple api endpoints and then batch them into a single graphql response.