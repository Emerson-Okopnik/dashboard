const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const userRoutes = require("./routes/users")
const reportsRoutes = require("./routes/reports")
const goalsRoutes = require("./routes/goals")

require("dotenv").config()

const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

const uri = process.env.ATLAS_URI
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
const connection = mongoose.connection

app.use("/api/users", userRoutes)
app.use("/api/reports", reportsRoutes)
app.use("/api/goals", goalsRoutes)

app.listen(port)
