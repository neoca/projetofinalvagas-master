const router = require('express').Router()

const VacantController = require('../controllers/VacantController')

// middlewares
const verifyToken = require('../helpers/check-token')
const { imageUpload } = require('../helpers/image-upload')

router.post(
  '/create',
  verifyToken,
  imageUpload.array('images'),
  VacantController.create,
)
router.get('/', VacantController.getAll)
router.get('/myvacants', VacantController.getAllUserVacants)
router.get('/myapplications', verifyToken, VacantController.getAllUserApplications)
router.get('/:id', VacantController.getVacantById)
router.delete('/:id', verifyToken, VacantController.removeVacantById)
router.patch(
  '/:id',
  verifyToken,
  imageUpload.array('images'),
  VacantController.updateVacant,
)
router.patch('/schedule/:id', verifyToken, VacantController.schedule)
router.patch('/conclude/:id', verifyToken, VacantController.concludeApplication)

module.exports = router
