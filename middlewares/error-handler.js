// error-handler.js
module.exports = (app) => {
  app.use('*', (req, res) => {
    res.status(404).render('404', { url: req.originalUrl });
  });
};
