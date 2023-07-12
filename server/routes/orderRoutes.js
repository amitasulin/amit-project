const express = require('express');
const router = express.Router();

const { getAllOrders, getOrderById, addOrder,updateOrder, deleteOrder } = require('../controllers/orderControllers');
const { authenticateUser, authorizeUser} = require('../middleware/authentication');

router.get('/', authenticateUser, authorizeUser(['user','admin']) ,getAllOrders);
router.get('/:id', authenticateUser, authorizeUser(['user','admin']) ,getOrderById);
router.post('/',authenticateUser, authorizeUser(['user','admin']) ,addOrder);
router.put('/:id' ,authenticateUser, authorizeUser(['user','admin']) ,updateOrder);
router.delete('/:id' ,authenticateUser, authorizeUser(['user','admin']) ,deleteOrder);

module.exports = router;
