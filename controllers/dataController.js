const { update } = require('../models/gym')
const Gym = require('../models/gym')

const dataController = {
    // Index
    index(req, res, next) {
        Gym.find({}, (err, package) => {
            if (err) {
                res.status(400).send({
                    msg: err.message
                })
            } else {
                res.locals.data.gym = package
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
                res.locals.data.gym = deleteMembership
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
                res.locals.data.gym = updateMembership
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
                res.locals.data.gym = selectMembership
                next()
            }
        })
    },
    createGold(req, res, next) {
        Gym.create(req.body, (err, selectMembership) => {
            if (err) {
                res.status(400).send({
                    msg: err.message
                })
            } else {
                res.locals.data.gym = selectMembership
                next()
            }
        })
    },
    createSilver(req, res, next) {
        Gym.create(req.body, (err, selectMembership) => {
            if (err) {
                res.status(400).send({
                    msg: err.message
                })
            } else {
                res.locals.data.gym = selectMembership
                next()
            }
        })
    },
    createElite(req, res, next) {
        Gym.create(req.body, (err, selectMembership) => {
            if (err) {
                res.status(400).send({
                    msg: err.message
                })
            } else {
                res.locals.data.gym = selectMembership
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
                    output: 'Could not find a membership with that ID'
                })
            } else {
                res.locals.data.gym = foundMembership
                next()
            }
        })
    }
}


module.exports = dataController