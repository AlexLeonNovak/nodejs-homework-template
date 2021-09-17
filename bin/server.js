const app = require('../app');
const db = require('../model/db');
const createDirectories = require('./createDirectories');

const { SERVER_PORT = 3000 } = process.env;

async function run() {
  try {
    await db;
    app.listen(SERVER_PORT, async () => {
      await createDirectories();
      console.log(`Server running. Use our API on port: ${SERVER_PORT}`)
    })
  } catch (e) {
    console.log('Error start server:', e.message);
  }
}

run();

