const { PostModels: Post } = require('../models')
const optionalFields = ['self_car_make_id', 'self_car_model', 'self_car_year', 'self_car_color', 'other_car_make_id', 'other_car_model', 'other_car_color', 'location', 'date']
const requiredFields = ['title', 'content', 'self_transportation_index', 'other_transportation_index', 'post_type_index']
const allFields = requiredFields.concat(optionalFields)

function get(req, res, next) {
    Post.get().then(posts => {
        res.json({ posts })
    })
        .catch(error => next(error))
}

function create(req, res, next) {
    console.log('cont body: ', req.body)
    Post.create(req.body).then(post => {
        res.status(201).json({ post })
    })
        .catch(error => next(error))
}

function show(req, res, next) {
    Post.find(req.params.id).then(post => {
        res.json({ post })
    })
        .catch(error => next(error))
}

function patch(req, res, next) {
    Post.patch(req.params.id, req.body).then(post => {
        res.json({ post })
    })
}

function destroy(req, res, next) {
    Post.destroy(req.params.id).then(post => {
        res.json({ post })
    })
}

function exists(req, res, next) {
    Post.find(req.params.id).then(post => {
        if (!post) {
            const status = 404
            const message = `Post with id of ${req.params.id} not found.`
            return next({ status, message })
        }
        return next()
    })
}

function prune(req, res, next) {
    for (let key in req.body) {
        if (!allFields.includes(key)) delete req.body[key]
    }
    next()
}

function complete(req, res, next) {
  console.log(req.body)
    const errors = requiredFields.filter(field => !req.body[field] && req.body[field] != 0 && req.body[field] != false )
        .map(key => `${key} is a required field.`)

    console.log(errors)

    if (errors.length) {
        const status = 400
        const message = `Fields are missing: ${errors.join(', ')}.`
        return next({ status, message })
    }
    return next()
}

module.exports = {
    get, create, show, patch, destroy,
    validations: { exists, prune, complete }
}
