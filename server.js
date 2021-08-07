const express = require("express");
const mongoose = require("mongoose");
const { graphqlHTTP } = require("express-graphql");

require("dotenv").config();
const schema = require("./graphql/schema");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const URI = "mongodb://127.0.0.1:27017/storium";
mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true }, () =>
  console.log("Connected to DB!")
);

const app = express();
app.use(cookieParser());
app.use(cors());
app.use(
  "/graphql",
  graphqlHTTP((req, res) => ({
    //this arrow function is for passing req and res arguments for context and this shit is so cool and used for cookie based token authentication
    schema: schema,
    graphiql: true,
    context: { req, res },
  }))
);

app.listen(5000, () => console.log("server is up and running"));
