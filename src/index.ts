import cors from "cors";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import compression from "compression";
import dotenv from "dotenv";

dotenv.config();

const app = express();

//middleware libraries setup

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(compression());

app.get("/", (req, res) => {
  res.send("Mentorship API running");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
