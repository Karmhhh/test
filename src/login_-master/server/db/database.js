var sqlite3 = require('sqlite3').verbose()

const DBSOURCE = "db.sqlite"


let db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
      // Cannot open database
      console.error(err.message)
      throw err
    }else{
        console.log('Connected to the SQLite database.')
        db.run(`CREATE TABLE credentials (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username text not null,
            password text not null
            )`,
        (err) => {
            if (err) {
                // Table already created
            }else{
                // Table just created, creating some rows
                var insert = 'INSERT INTO credentials (username,password) VALUES (?,?)'
                db.run(insert, ["admin","admin123456"])
                db.run(insert, ["user", "user123456"])
            }
        });  
    }
});


module.exports = db