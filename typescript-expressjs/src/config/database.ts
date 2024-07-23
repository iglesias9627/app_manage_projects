import { Sequelize } from 'sequelize-typescript';

const sequelize = new Sequelize({
  database: 'your_database_name',
  dialect: 'postgres',
  username: 'your_username',
  password: 'your_password',
  host: 'your_host',  // e.g., 'localhost'
  port: 5432,  // default PostgreSQL port
  models: [__dirname + '/../models'] // Path to your models
});

export default sequelize;
