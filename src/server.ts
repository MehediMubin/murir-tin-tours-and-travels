import mongoose from "mongoose";
import app from "./app";
import config from "./config";

const port = 5000;

// murirTinAdmin
// RWsuqHyOf0833UZm

async function server() {
  try {
    await mongoose.connect(config.database_url as string);

    app.listen(config.port, () => {
      console.log(
        `Murir Tin Tours & Travels app listening on port ${config.port}`,
      );
    });
  } catch (err) {
    console.log(err);
  }
}

server();
