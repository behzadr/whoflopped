import { Pool } from 'pg';

const pool = new Pool({
    user: process.env.DB_USER, // whoflopped_user
    host: process.env.DB_HOST, // usually localhost
    database: process.env.DB_NAME, // whoflopped_db
    password: process.env.DB_PASS, // yourpassword
    port: parseInt(process.env.DB_PORT || '5432'),
});

export default pool;
