const express = require('express')
const router = express.Router()

router.post('/', (req, res) => {
    res.send('create user')
})

module.exports = router