const express = require('express')
const { requireAuth, requireAdmin } = require('../../middlewares/require.auth.middleware')
const { getUserById, getUsers, addUser, updateUser, removeUser } = require('./user.controller')
const router = express.Router()

module.exports = router

router.get('/', getUsers)
router.get('/:userId', getUserById)
router.post('/', addUser)
router.put('/', updateUser)
router.delete('/:userId', requireAuth, requireAdmin, removeUser)