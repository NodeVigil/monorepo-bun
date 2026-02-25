import app, { port } from "./app";
import connectDB from "./db";

// connect database
connectDB()
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((err) => {
    console.error("Database connection failed:", err);
    process.exit(1);
  });

// use it when run locally
if (Bun.env.BUN_ENV !== "production") {
  app.listen(port, () => {
    console.log(`Server running locally on port ${port}`);
  });
}

//  use export default for vercel
export default app;
