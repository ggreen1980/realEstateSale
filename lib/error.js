module.exports = (app) => {
    app.use((req, res) => {
        res.status(404).render('404', {layout: 'error'})
    }),

    app.use((err, req, res, next) => {
        res.status(404).render('404', {layout: 'error'})
    })
}