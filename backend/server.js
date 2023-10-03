const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const helmet = require("helmet"); // Import the helmet middleware

// Add the express-rate-limit package
const rateLimit = require("express-rate-limit");

// Connect DB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log("MongoDB is connected"))
  .catch((err) => console.log(err));

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

//Error 2 - fixing Information Explosure Vulnerability
// Use helmet middleware to remove the X-Powered-By header
app.use(helmet());

// import Routes
app.use("/api/auth", require("./routes/auth"));

//Employee Management Function Routes
const employRoutes = require("./routes/employee");

//Project Management Function Routes
const projectsRoutes = require("./routes/projects");

//Department Management Function Routes
const departmentsRoutes = require("./routes/departments");

//Financial Management Function Routes
const financialRoutes = require("./routes/financial");

//Error 4 - fixing Allocation of Resources Without Limits or Throttling Vulnerability
// Serve static assets (build folder)
app.use(express.static("client/build"));

// Implement rate limiting
const limiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 10, // limit each IP to 10 requests per windowMs
});
app.use(limiter);

// Serve the "index.html" file for specific client-side routes
app.get("/app/*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});

//route middleware
app.use(employRoutes);
app.use(projectsRoutes);
app.use(departmentsRoutes);
app.use(financialRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
