module.exports = {
  extendApp: app => {
    app.get('/api/info', (request, response) => {
      response.json({
        message: 'Hello',
      });
    });
  },
}
