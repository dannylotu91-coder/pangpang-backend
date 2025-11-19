const express = require("express");
const cors = require("cors");
const path = require("path");
const bookingRoutes = require("./routes/bookings");
const imageRoutes = require("./routes/images");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/public", express.static(path.join(__dirname, "public")));

app.use("/api/bookings", bookingRoutes);
app.use("/api/images", imageRoutes);

app.get("/", (req,res)=>res.sendFile(path.join(__dirname,"admin/index.html")));

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>console.log("Server running on "+PORT));
