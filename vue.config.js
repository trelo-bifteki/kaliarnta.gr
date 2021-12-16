// eslint-disable-next-line
const mocks = require('./mocks');

const isMockEnabled = process.env.MOCK_ENABLED === 'true';

const devServer = {
  port: 7010,
};

if (isMockEnabled) {
  devServer.before = _devServer => {
    if (!_devServer) {
      throw new Error('webpack-dev-server is not defined');
    }
    mocks.extendApp(_devServer);
  }
} else {
  devServer.proxy = {
    '/api': {
      target: 'htts://www.kaliarnta.gr/',
    },
  };
}

module.exports = {
  devServer,
}
