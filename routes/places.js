const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('get req for places')
})

router.post('/:id', (req, res) => {
    res.send('create place')
})

router.post('/:id', (req, res) => {
    res.send('update place')
})

router.delete('/:id', (req, res) => {
    res.send('delete place')
})

module.exports = router