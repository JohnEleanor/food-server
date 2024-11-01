
const mongoose = require('mongoose');

const init = async () => {
  try {
    db = await mongoose.connect(process.env.MONGO_URI);
    console.log('[jay] Database name : '+db.connections[0].name);
    console.log('[jay] Connected to database :)');


  } catch (error) {
    console.error('Error connecting to database: ', error);
  }
}

module.exports = { init };