import express from "express";
import session from "express-session";
import { keys } from "./config/keys";

let app = express();

const { cookieSecret } = keys();



app.use(
  session({
    secret: cookieSecret,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 30 * 24 * 60 * 60 * 1000,
      sameSite: "none",
    },
  })
);


const PORT = process.env.PORT || 5000;

app.listen(PORT, (error:void | string) => {
    error ? console.error(error) : console.log(`server running on port ${PORT}`)
})
