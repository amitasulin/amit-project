const express = require('express');
const router = express.Router();

const { getMyStrainList, addStrainToList,updateStatusAndRating, deleteStrainFromList } = require('../controllers/strainListControllers');
const { authenticateUser, authorizeUser} = require('../middleware/authentication');

router.get('/', authenticateUser, authorizeUser(['user']) ,getMyStrainList);
router.post('/',authenticateUser, authorizeUser(['user']) ,addStrainToList);
router.put('/:id' ,authenticateUser, authorizeUser(['user']) ,updateStatusAndRating);
router.delete('/:id' ,authenticateUser, authorizeUser(['user']) ,deleteStrainFromList);


module.exports = router;