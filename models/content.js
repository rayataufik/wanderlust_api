const db = require('../config/database');

module.exports = {
  getItems: function (callback) {
    db.query('SELECT * FROM content', callback);
  },
  getItemById: function (id, callback) {
    db.query('SELECT * FROM content WHERE id = ?', [id], callback);
  }
};