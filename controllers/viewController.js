const  RESOURCE_PATH = '/gym'


const viewContrller = {
    index (req, res, next) {
        res.render('gym/Index', res.locals.data)
    },
    newView (req, res, next) {
        res.render('gym/New')
    },
    edit (req, res, next) { 
        res.render('gym/Edit', res.locals.data)
    },
    show (req, res, next) {
        res.render('gym/Show', res.locals.data)
    },
    redirectHome (req, res, next) {
        res.redirect(RESOURCE_PATH)
    },
    redirectShow (req, res, next) {
        // const fruitId = req.params.id || res.locals.data.fruit._id
        // res.redirect(`${RESOURCE_PATH}/${fruitId}`)
    }
}


module.exports = viewContrller