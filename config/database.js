const { Pool } = require("pg")
require("dotenv").config()

const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  ssl: { rejectUnauthorized: false },
})

pool.on("error", (err) => {
  console.error("💥 Database pool error:", err)
})

const query = async (text, params) => {
  try {
    const res = await pool.query(text, params)
    return res
  } catch (error) {
    console.error("❌ Query error:", error.message)
    throw error
  }
}

module.exports = {
  query,
  pool,
}
