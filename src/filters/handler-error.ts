export = function (app) {
    app.use(function (err, req, res, next) {
        if (req.xhr) {
            res.json({});
        } else {
            res.render('error', {
                error: err
            });
        }
    });
}


