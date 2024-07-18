const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 5000;

// Static files
app.use(express.static(path.join(__dirname, "public")));

// API routes or other middleware
// Example routes
app.get("/api/example", (req, res) => {
  res.json({ message: "API Example" });
});

// Catch-all route for React router
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
