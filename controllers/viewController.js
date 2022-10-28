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
    silverView (req, res, next) {
        res.render('packages/Silver', res.locals.data)
    },
    goldView (req, res, next) {
        res.render('packages/Gold', res.locals.data)
    },
    pumpView (req, res, next) {
        res.render('packages/Pump', res.locals.data)
    },
    redirectHome (req, res, next) {
        res.redirect(RESOURCE_PATH)
    },
    redirectShow (req, res, next) {
        const gymId = req.params.id || res.locals.data.gym._id
        res.redirect(`${RESOURCE_PATH}/${gymId}`)
    }
}


module.exports = viewContrller