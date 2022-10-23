const Gym = require('../models/gym')

const dataController = {
    // Index
    index(req, res, next) {
        Gym.find({}, (err, membership) => {
            if (err) {
                res.status(400).send({
                    msg: err.message
                })
            } else {
                res.locals.data.poke = membership
                next()
            }
        })
    },
    // Destroy
    destroy(req, res, next) {
        Gym.findByIdAndDelete(req.params.id, (err, deleteMembership) => {
            if (err) {
                res.status(400).send({
                    msg: err.message
                })
            } else {
                res.locals.data.poke = deleteMembership
                next()
            }
        })
    },
    // Update
    update(req, res, next) {
        Gym.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updateMembership) => {
            if (err) {
                res.status(400).send({
                    msg: err.message
                })
            } else {
                res.locals.data.poke = updateMembership
                next()
            }
        })
    },
    // Create
    create(req, res, next) {
        Gym.create(req.body, (err, selectMembership) => {
            if (err) {
                res.status(400).send({
                    msg: err.message
                })
            } else {
                res.locals.data.poke = selectMembership
                next()
            }
        })
    },
    // Edit
    // Show
    show(req, res, next) {
        Gym.findById(req.params.id, (err, foundMembership) => {
            if (err) {
                res.status(404).send({
                    msg: err.message,
                    output: 'Could not find a Pokemon with that ID'
                })
            } else {
                res.locals.data.poke = foundMembership
                next()
            }
        })
    }
}


module.exports = dataController