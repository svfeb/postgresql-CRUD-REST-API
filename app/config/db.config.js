module.exports = {
  HOST: "localhost",
  USER: "postgres",
  PASSWORD: "yag",

  DB: "testing",
  dialect: "postgres",
  port: 3699,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
