import express from "express"

const router = express.Router()

router.get("/squads", async (request, response) => {
  return response.json([
    "Nuvem de Recompensas",
    "Gestão de Projetos Customizados",
    "Processamento de Pedidos",
    "Gestão de Clientes Corporativos",
    "Reconhecimento"
  ])
})

export default router