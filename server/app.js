const express = require('express');
import postgres from "./database/postgres";
import ensureAuthenticated from "./middleware/ensureAuthenticated";
import JTRouter from "./routes/JT";
const cors = require('cors');
app.use("/api/v1/JT", ensureAuthenticated, JTRouter);
const app = exress();
app.use(cors());
app.use(express.json());
const port = 5000;
//PostgreSQL
postgres().then((postgres) => {
    global.postgres = postgres;
  });
app.listen(port, (err) => {
    if (err) {
        console.log(`Failed in Connection`);
    }
    console.log(`Server is listening on port ${port}`);
})
export default app;