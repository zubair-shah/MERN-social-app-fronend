import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import postRoutes from "./routes/posts.js";

const app = express();

app.use("*", cors());
//origin
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  next();                                                                                                                                                           
});
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use("/", postRoutes);

const CONNECTION_URL =
  // "mongodb+srv://zubair:zubair@cluster0.xyyrftj.mongodb.net/?retryWrites=true&w=majority";
"mongodb://localhost:27017";

const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Your app is listen at port http://localhost:${PORT}`);
      console.log("Database Connected SuccessFully");
    });
  })

  .catch((error) => {
    console.log(error.message);
  });
