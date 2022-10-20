const  RESOURCE_PATH = '/blog'


const viewContrller = {
    index (req, res, next) {
        res.render('blog/Index', res.locals.data)
    },
    newView (req, res, next) {
        res.render('blog/New')
    },
    edit (req, res, next) { 
        res.render('blog/Edit', res.locals.data)
    },
    show (req, res, next) {
        res.render('blog/Show', res.locals.data)
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