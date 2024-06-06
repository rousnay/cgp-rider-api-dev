export default () => ({
  environment: process.env.NODE_ENV || 'development',
  port: parseInt(process.env.PORT, 10) || 3000,
  jwt: {
    secret: process.env.JWT_SECRET,
  },
  mysql: {
    host: process.env.MYSQL_HOST || 'localhost',
    port: parseInt(process.env.MYSQL_PORT, 10) || 3306,
    username: process.env.MYSQL_USERNAME || 'root',
    password: process.env.MYSQL_PASSWORD || 'password',
    database: process.env.MYSQL_DATABASE || 'test',
  },
  mongodb: {
    uri: process.env.MONGODB_URI || 'mongodb://localhost:27017/test',
  },

  googleMap: {
    apiKey: process.env.GOOGLE_MAP_API_KEY,
  },

  cloudflare: {
    accountId: process.env.CLOUDFLARE_ACCOUNT_ID,
    apiToken: process.env.CLOUDFLARE_API_TOKEN,
    accountHash: process.env.CLOUDFLARE_ACCOUNT_HASH,
  },

  firebase: {
    projectId: process.env.FIREBASE_PROJECT_ID,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    privateKey: process.env.FIREBASE_PRIVATE_KEY,
  },

  stripe: {
    publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
    secretKey: process.env.STRIPE_SECRET_KEY,
    webhookSecret: process.env.STRIPE_WEBHOOK_SECRET,
  },
  logger: {
    level: process.env.LOGGER_LEVEL || 'info',
    debug: process.env.DEBUG || 'info',
    json: process.env.USE_JSON_LOGGER,
    sentryDns: process.env.SENTRY_DNS,
  },
});
