const Api = require("../services/api")

module.exports = {
  async index(request, response) {
    const brands = await Api.get("/brands/allResults")
    return response.status(200).json(brands.data)
  },

  async show(request, response) {
    const {id} = request.params
    const brands = await Api.get(`/brands/${id}`)
    return response.status(200).json(brands.data)
  },

  async create(request, response) {
    const { brand } = request.body
    const brands = await Api.post(`/brands`, {brand})
    return response.status(201).json(brands.data)
  },

  async update(request, response) {
    const { id } = request.params
    const { brand } = request.body
    const brands = await Api.put(`/brands/${id}`, {brand})
    return response.status(200).json(brands.data)
  },

  async delete(request, response) {
    const { id } = request.params
    const brands = await Api.delete(`/brands/${id}`)
    return response.status(200).json(brands.data)
  },
  
}