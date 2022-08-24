import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import postRoutes from "./routes/posts.js";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use(cors());
app.use("/", postRoutes);

const CONNECTION_URL = "mongodb://localhost:27017/MERN_Social_App";
// const CONNECTION_URL ="mongodb+srv://zubairmongo:zubairmongo123@cluster0.mbwy5.mongodb.net/?retryWrites=true&w=majority";

const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(PORT, () =>
      console.log(`Your app is listen at port http://localhost:${PORT}`)
    );
  })

  .catch((error) => {
    console.log(error.message);
  });
