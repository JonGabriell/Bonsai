import mysql from "mysql2/promise";

const db = mysql.createPool({
  host: "localhost",   // ou IP do servidor MySQL
  user: "root",        // altere para o usuário do seu banco
  password: "sua_senha", // senha do banco
  database: "nome_do_banco" // nome do banco já existente
});

export default db;
