import express from "express";
import cors from "cors";

//routers
import corporationsRoute from "./routes/corporations";
import schedulesRoute from "./routes/schedule";
import notificationsRoute from "./routes/notifications";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const port = Bun.env.port || 8087;

app.use("/corporations", corporationsRoute());
app.use("/schedules", schedulesRoute());
app.use("/notifications", notificationsRoute());

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
