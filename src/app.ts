import express, {Request, Response } from "express";
import cors from 'cors'
import routes from "./routes/routes";
const app = express();

app.use(express.json());
app.use(cors())
app.use(routes)



app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});


export default app