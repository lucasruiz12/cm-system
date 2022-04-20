const { Router } = require('express');
const { getOneTurn, getAllTurns, createTurn, updateTurn, deleteTurn } = require('../controllers/controllers')
const router = Router();

router.get('/:id', getOneTurn)
router.get('/', getAllTurns)
router.post('/', createTurn)
router.put('/:id', updateTurn)
router.delete('/', deleteTurn)


module.exports = router;