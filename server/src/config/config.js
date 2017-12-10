module.exports = {
  port: process.env.PORT || 8081,
  db: {
    database: process.env.DB_NAME || 'lyricist',
    user: process.env.DB_USER || 'lyricist',
    password: process.env.DB_PASS || 'lyricist',
    options: {
      dialect: process.env.DIALECT || 'sqlite',
      host: process.env.HOST || 'localhost',
      storage: './lyricist.sqlite'
    }
  }
}
