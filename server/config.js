// const config = {};

// const isDevelopment = process.env.NODE_ENV === 'development' ? true : false;

// config.PORT = isDevelopment ? 5000 : process.env.PORT || 5000;
// config.API_VERSION = isDevelopment ? '/v1' : process.env.API_VERSION || '/v1';
// config.NODE_ENV = process.env.NODE_ENV;
// config.DB_STRING = isDevelopment ? '<YOUR_DB_STRING>' : process.env.DB_STRING;
// config.SECREATE = isDevelopment ? 'development' : process.env.SECREATE;

// module.exports = { config };


require('dotenv').config(); // ✅ Add this to load .env

const config = {};

const isDevelopment = process.env.NODE_ENV === 'development';

config.PORT = process.env.PORT || 5000;
config.API_VERSION = process.env.API_VERSION || '/v1';
config.NODE_ENV = process.env.NODE_ENV || 'development';
config.DB_STRING = process.env.DB_STRING;  // ✅ Always use .env value
config.SECREATE = process.env.SECREATE || 'defaultSecret';

module.exports = { config };

