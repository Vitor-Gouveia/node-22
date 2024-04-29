const express = require("express")

const router = express.Router()

router.get("/value-streams", async (request, response) => {
  return response.json([
    "Alianças",
    "Business",
    "Consumidores"
  ])
})

module.exports = router