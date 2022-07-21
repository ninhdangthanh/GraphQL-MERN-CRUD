/** @format */

const express = require("express");
require("dotenv").config();
const {graphqlHTTP} = require("express-graphql");
const PORT = process.env.PORT || 3000;
const schema = require("./schema/schema");
const colors = require('colors')
const connectDB = require('./config/db')
const cors = require('cors')

const app = express();

// connect to DB
connectDB()

app.use(cors())

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "development",
  })
);

app.listen(PORT, () => {
  console.log(`Server is running in PORT ${PORT}`);
});
