const express = require("express");
const mongoose = require("mongoose");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./graphql/schema");

const URI = "mongodb://127.0.0.1:27017/storium";
mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true }, () =>
  console.log("Connected to DB!")
);

const app = express();
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,

    graphiql: true,
  })
);

app.listen(5000, () => console.log("server is up and running"));
