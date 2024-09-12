console.log('Current Directory:', __dirname);

const { pool } = require('./src/lib/db'); // Ensure the path is correct

const createUsersTable = async () => {
    const query = `
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      email VARCHAR(255) UNIQUE NOT NULL,
      password VARCHAR(255) NOT NULL
    );
  `;

    try {
        await pool.query(query);
        console.log('Users table created successfully');
    } catch (error) {
        console.error('Error creating users table', error);
    } finally {
        pool.end();
    }
};

createUsersTable();
