const express = require("express")
const cron = require("node-cron")
const app = express()
const PORT = process.env.PORT || 3000

app.get("/", (req, res) => res.send("Node.js App with Cron Job!"))

app.get("/add", (req, res) => {
  console.log("This my welcome route")
  res.send("Welcome Done")
})

cron.schedule("* * * * * *", async () => {
  console.log("Running cron job every minute...")
})

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
)

module.exports = app
