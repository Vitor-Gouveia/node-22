const express = require("express")

const app = express()

const squads = require("./lib/squads.routes.mjs") // ESM
const valueStreams = require("./lib/value-streams.routes") // CJS

app.use("/", squads.default)
app.use("/", valueStreams)

app.listen(3333, () => {
  console.log("Server starting with ESM and CJS routes ⚡!")
})