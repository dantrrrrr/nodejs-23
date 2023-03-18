const express = require('express');
const router = express.Router();
const path = require('path');
const { getAllEmployees,
    createNewEmployees,
    updateEmployees,
    deleteEmployees,
    getEmployees,
} = require('../../controllers/employeesController');


router.route('/')
    .get(getAllEmployees)
    .post(createNewEmployees)
    .put(updateEmployees)
    .delete(deleteEmployees)
router.route('/:id')
    .get(getEmployees);
// .post((req, res) => {

// })
// .put((req, res) => {

// })
// .delete((req, res) => {

// })

module.exports = router;
