module.exports = {
  extendApp: app => {
    app.get('/api/info', (request, response) => {
      response.json({
        message: 'Hello',
      });
    });

    app.get('/api/search', (request, response) => {
      response.json([ {
        keyword: 'αβέλω',
        type: 'verb',
        translations: [ {
          keyword: 'κάνω',
        } ],
        description: '',
        examples: [ {
          text: 'θα αβέλω ντουπ όλο τον κόσμο',
        } ],
        references: [],
      }, {
        keyword: 'ντουπ',
        type: 'noun',
        description: 'πολύ',
      } ]);
    });
  },
}
