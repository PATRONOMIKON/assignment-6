const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./database/university.db', (err) => {
  if (err) {
    console.error('Error opening database', err);
  }
});

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS courses (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      courseCode TEXT NOT NULL,
      title TEXT NOT NULL,
      credits INTEGER NOT NULL,
      description TEXT,
      semester TEXT
    )
  `, (err) => {
    if (err) {
      console.error('Error creating table', err);
    } else {
      console.log("Database & courses table created successfully!");
    }
  });
});

db.close();
