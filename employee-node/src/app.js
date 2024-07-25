const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 5000;
const userRoutes= require("./routes/userRoutes")

app.use(bodyParser.json());
app.use(cors());
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


app.use("/api/user", userRoutes);