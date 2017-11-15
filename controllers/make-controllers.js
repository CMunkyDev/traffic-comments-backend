const { MakeModels: Make } = require('../models')

function get(req, res, next) {
    Make.get().then(makes => {
        res.json({ makes })
    })
        .catch(error => next(error))
}

module.exports = { get }
