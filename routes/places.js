const express = require('express')
const router = express.Router()
const { check, validationResult } = require('express-validator')
const auth = require('../middleware/auth')

const User = require('../models/User')
const Place = require('../models/Place')
const { findByIdAndRemove } = require('../models/User')

router.get('/', auth, async (req, res) => {
    try {
        const places = await Place.find({ user: req.user.id }).sort({ date: -1 })
        res.json(places)
    } catch (error) {
        console.error(error.message)
        res.status(500).send("Server error")
    }
})

router.post('/', [ auth, [
    check("name", 'Name is required').not().isEmpty()
]], async (req, res) => {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
        return res.status(400).json({ 
            errors: errors.array() 
        })
    }

    const { name, email, phone, address } = req.body

    try {
        const newPlace = new Place({
            name,
            email,
            phone,
            address,
            user: req.user.id
        })

        const place = await newPlace.save()

        res.json(place)
    } catch (error) {
        console.error(error.messae)
        res.send("Server error")
    }
})

router.put('/:id', auth, async (req, res) => {
    const { name, email, phone, address } = req.body

    const placeFields = {}

    if (name) placeFields.name = name
    if (email) placeFields.email = email
    if (phone) placeFields.phone = phone
    if (address) placeFields.address = address

    try {
        let place = await Place.findById(req.params.id)

        if (!place) return res.status(400).json({ message: "Place not found" })

        place = await Place.findByIdAndUpdate(req.params.id, {
            $set: placeFields,
            new: true
        })

        res.json(place)
    } catch (error) {
        console.error(error.message)
        res.status(500).send("Server error")
    }
})

router.delete('/:id', auth, async (req, res) => {
    try {
        let place = await Place.findById(req.params.id)

        if (!place) return res.status(400).json({ message: "Place not found" })

        await Place.findByIdAndRemove(req.params.id)

        res.json({ message: "Contact removed" })
    } catch (error) {
        console.error(error.message)
        res.status(500).send("Server error")
    }
})

module.exports = router