const Api = require("../services/api")

module.exports = {
  async show(request, response) {
    const {ref} = request.params
    const products = await Api.get(`/products/ref/${ref}`)
    return response.status(200).json(products.data)
  },

  async update(request, response) {
    const { ref } = request.params
    const { product } = request.body
    const products = await Api.put(`/products/update/${ref}`, {product})
    return response.status(200).json(products.data)
  },
}