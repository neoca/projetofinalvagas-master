const Vacant = require('../models/Vacant')

// helpers
const getUserByToken = require('../helpers/get-user-by-token')
const getToken = require('../helpers/get-token')
const ObjectId = require('mongoose').Types.ObjectId

module.exports = class VacantController {
  // create a vacant
  static async create(req, res) {
    const name = req.body.name
    const salary = req.body.salary
    const description = req.body.description
    const company = req.body.company
    const modality = req.body.modality
    const images = req.files
    const available = true

    // console.log(req.body)
    console.log(images)
    // return

    // validations
    if (!name) {
      res.status(422).json({ message: 'O nome da vaga é obrigatório!' })
      return
    }

    if (!salary) {
      res.status(422).json({ message: 'O salário é obrigatório!' })
      return
    }

    if (!company) {
      res.status(422).json({ message: 'O nome da empresa é obrigatório!' })
      return
    }

    if (!modality) {
      res.status(422).json({ message: 'A modalidade da vaga é obrigatória!' })
      return
    }

    if (!images) {
      res.status(422).json({ message: 'A imagem é obrigatória!' })
      return
    }

    // get user
    const token = getToken(req)
    const user = await getUserByToken(token)

    // create vacant
    const vacant = new Vacant({
      name: name,
      salary: salary,
      description: description,
      company: company,
      modality: modality,
      available: available,
      images: [],
      user: {
        _id: user._id,
        name: user.name,
        image: user.image,
        phone: user.phone,
      },
    })

    images.map((image) => {
      vacant.images.push(image.filename)
    })

    try {
      const newVacant = await vacant.save()

      res.status(201).json({
        message: 'Vaga cadastrada com sucesso!',
        newVacant: newVacant,
      })
    } catch (error) {
      res.status(500).json({ message: error })
    }
  }

  // get all registered vacants
  static async getAll(req, res) {
    const vacants = await Vacant.find().sort('-createdAt')

    res.status(200).json({
      vacants: vacants,
    })
  }

  // get all user vacants
  static async getAllUserVacants(req, res) {
    // get user
    const token = getToken(req)
    const user = await getUserByToken(token)

    const vacants = await Vacant.find({ 'user._id': user._id })

    res.status(200).json({
      vacants,
    })
  }

  // get all user applications
  static async getAllUserApplications(req, res) {
    // get user
    const token = getToken(req)
    const user = await getUserByToken(token)

    const vacants = await Vacant.find({ 'application._id': user._id })

    res.status(200).json({
      vacants,
    })
  }

  // get a specific vacant
  static async getVacantById(req, res) {
    const id = req.params.id

    // check if id is valid
    if (!ObjectId.isValid(id)) {
      res.status(422).json({ message: 'ID inválido!' })
      return
    }

    // check if vacant exists
    const vacant = await Vacant.findOne({ _id: id })

    if (!vacant) {
      res.status(404).json({ message: 'Vaga não encontrada!' })
      return
    }

    res.status(200).json({
      vacant: vacant,
    })
  }

  // remove a vacant
  static async removeVacantById(req, res) {
    const id = req.params.id

    // check if id is valid
    if (!ObjectId.isValid(id)) {
      res.status(422).json({ message: 'ID inválido!' })
      return
    }

    // check if vacant exists
    const vacant = await Vacant.findOne({ _id: id })

    if (!vacant) {
      res.status(404).json({ message: 'vaga não encontrada!' })
      return
    }

    // check if user registered this vacant
    const token = getToken(req)
    const user = await getUserByToken(token)

    if (vacant.user._id.toString() != user._id.toString()) {
      res.status(404).json({
        message:
          'Houve um problema em processar sua solicitação, tente novamente mais tarde!',
      })
      return
    }

    await Vacant.findByIdAndRemove(id)

    res.status(200).json({ message: 'Vaga removida com sucesso!' })
  }

  // update a vacant
  static async updateVacant(req, res) {
    const id = req.params.id
    const name = req.body.name
    const salary = req.body.salary
    const description = req.body.description
    const company = req.body.company
    const modality = req.body.modality
    const images = req.files
    const available = req.body.available

    const updateData = {}

    // check if vacant exists
    const vacant = await Vacant.findOne({ _id: id })

    if (!vacant) {
      res.status(404).json({ message: 'Vaga não encontrada!' })
      return
    }

    // check if user registered this vacant
    const token = getToken(req)
    const user = await getUserByToken(token)

    if (vacant.user._id.toString() != user._id.toString()) {
      res.status(404).json({
        message:
          'Houve um problema em processar sua solicitação, tente novamente mais tarde!',
      })
      return
    }

    // validations
    if (!name) {
      res.status(422).json({ message: 'O nome da vaga é obrigatório!' })
      return
    } else {
      updateData.name = name
    }

    if (!salary) {
      res.status(422).json({ message: 'O salário é obrigatório!' })
      return
    } else {
      updateData.salary = salary
    }

    if (!company) {
      res.status(422).json({ message: 'O nome da empresa é obrigatório!' })
      return
    } else {
      updateData.company = company
    }

    if (!modality) {
      res.status(422).json({ message: 'A modalidade da vaga é obrigatória!' })
      return
    } else {
      updateData.modality = modality
    }

    if (!images) {
      res.status(422).json({ message: 'A imagem é obrigatória!' })
      return
    } else {
      updateData.images = []
      images.map((image) => {
        updateData.images.push(image.filename)
      })
    }

    if (!available) {
      res.status(422).json({ message: 'O status é obrigatório!' })
      return
    } else {
      updateData.available = available
    }

    updateData.description = description

    await Vacant.findByIdAndUpdate(id, updateData)

    res.status(200).json({ vacant: vacant, message: 'Vaga atualizada com sucesso!' })
  }

  // schedule a visit
  static async schedule(req, res) {
    const id = req.params.id

    // check if vacant exists
    const vacant = await Vacant.findOne({ _id: id })

    // check if user owns this vacant
    const token = getToken(req)
    const user = await getUserByToken(token)

    console.log(vacant)

    if (vacant.user._id.equals(user._id)) {
      res.status(422).json({
        message: 'Você não pode se candidatar na sua propria vaga!',
      })
      return
    }

    // check if user has already application this vacant
    if (vacant.application) {
      if (vacant.application._id.equals(user._id)) {
        res.status(422).json({
          message: 'Você já se candidatou nesta vaga!',
        })
        return
      }
    }

    // add user to vacant
    vacant.application = {
      _id: user._id,
      name: user.name,
      image: user.image,
    }

    console.log(vacant)

    await Vacant.findByIdAndUpdate(vacant._id, vacant)

    res.status(200).json({
      message: `Você se candidatou com sucesso, entre em contato com ${vacant.user.name} no telefone: ${vacant.user.phone}`,
    })
  }

  // conclude a vacantaapplication
  static async concludeApplication(req, res) {
    const id = req.params.id

    // check if vacantexists
    const vacant = await Vacant.findOne({ _id: id })

    vacant.available = false

    await Vacant.findByIdAndUpdate(vacant._id, vacant)

    res.status(200).json({
      vacant: vacant,
      message: `Parabéns! O ciclo para se candidatar nesta vaga foi concluido com sucesso!`,
    })
  }
}
