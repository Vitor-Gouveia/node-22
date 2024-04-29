const express = require("express")

const app = express()

const squads = require("./lib/squads.routes.mjs")
const valueStreams = require("./lib/value-streams.routes")

app.use("/", squads.default)
app.use("/", valueStreams)

app.listen(3333, () => {
  console.log("Server starting with ESM and CJS routes ⚡!")
})