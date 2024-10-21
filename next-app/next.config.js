
module.exports = {
  env: {
    DATABASE_URL: process.env.DATABASE_URL, // If needed to expose this env var to the client (though typically, you don't need to).
  },
  reactStrictMode: true,
}
