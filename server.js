const express = require("express");
require("dotenv").config();

const bfhlRoutes = require("./routes/bfhl_routes");
const healthRoutes = require("./routes/health_routes");

const app = express();
const PORT = 3000;

app.use(express.json());

// Public routes
app.use("/bfhl", bfhlRoutes);
app.use("/health", healthRoutes);

app.use((req, res) => {
  res.status(404).json({
    is_success: false,
    official_email: "mohnish2155.be23@chitkara.edu.in",
    error: "Route not found"
  });
});

app.listen(PORT, () => {
  console.log(`http://localhost:3000`);
});
