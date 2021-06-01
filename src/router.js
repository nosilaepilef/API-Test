const { Router } = require("express")
const Routers = Router()
const brandsController = require("./controller/brandsController")
const productsController = require("./controller/productsController")

Routers.get("/brands", brandsController.index)
Routers.get("/brands/:id", brandsController.show)
Routers.post("/brands", brandsController.create)
Routers.put("/brands/:id", brandsController.update)
Routers.delete("/brands/:id", brandsController.delete)


Routers.get("/products/ref/:ref", productsController.show)
Routers.put("/products/update/:ref", productsController.update)

module.exports = Routers