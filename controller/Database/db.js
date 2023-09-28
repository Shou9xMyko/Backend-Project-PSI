const mysql2 = require("mysql2");

const connection = mysql2.createConnection({
  host: "isi nanti",
  user: "isi user nya nanti",
  password: "password nya nanti ya",
  database: "buat dulu",
});

connection.connect((err) => {
  if (err) {
    console.log("GAGAL CONNECT DATABASE!!!");
    console.log(err);
  } else {
    console.log("Berhasil connect ke database!");
  }
});
