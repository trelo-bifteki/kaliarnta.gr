const sampleKeyword = {
  keyword: 'αβέλω',
  type: 'verb',
  translations: [ {
    keyword: 'κάνω',
  } ],
  description: 'Lorem ipsun loretta kenntnis',
  examples: [ {
    text: 'θα αβέλω ντουπ όλο τον κόσμο',
  } ],
};

module.exports = {
  extendApp: app => {
    app.get('/api/info', (request, response) => {
      response.json({
        message: 'Hello',
      });
    });

    app.get('/api/search', (request, response) => {
      response.json([  sampleKeyword ]);
    });

    app.get('/api/search/:id', (request, response) => {
      response.json(sampleKeyword);
    });
  },
}
