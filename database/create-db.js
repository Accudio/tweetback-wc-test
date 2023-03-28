const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./database/tweet.db");

function createTable() {
  db.serialize(() => {
    db.run("CREATE TABLE IF NOT EXISTS tweets (id_str TEXT PRIMARY KEY ASC, created_at TEXT, in_reply_to_status_id_str TEXT, in_reply_to_screen_name TEXT, full_text TEXT, json TEXT, api_version TEXT, hidden INTEGER)");
  })
}

createTable()
