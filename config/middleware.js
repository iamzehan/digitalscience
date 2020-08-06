module.exports = {
  //...
  settings: {
    cors: {
      origin: 'http://digitalseo.herokuapp.com',
    },
  },
};
module.exports = ({ env }) => {
  console.log('Initializing middleware.js...')
  return {
    timeout: 100,
    load: {
      before: ['responseTime', 'logger', 'cors', 'responses', 'gzip'],
      order: [
        "Define the middlewares' load order by putting their name in this array is the right order",
      ],
      after: ['parser', 'router'],
    },
    settings: {
      public: {
        path: './public',
        maxAge: 60000,
      },
      favicon: {
        path: 'favicon.ico',
        maxAge: 86400000
      },
      security: {
        enabled: true,
        origin: 'HELLO'
      }
    }
  };
};
