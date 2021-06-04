const Api = require("../services/api")
const generateFile = require("../services/excel")

module.exports = {
  async index(request, response) {
    const products = await Api.get(`/products/allResults`)
    generateFile(products.data.products)
    return response.status(200).json({message: "Planilha gerada com sucesso!"})
  },

  async update(request, response) {
    const { ref } = request.params
    const { product } = request.body
    const products = await Api.put(`/products/update/${ref}`, {product})
    return response.status(200).json(products.data)
  },
}