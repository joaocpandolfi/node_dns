var Pass = {
    Bcrypt:{
        hash: "SecretPassBCRYPT",
        salt:12,
    },

    Session:{
      name:"sessionId",
      secret: 'SecretPassSESSION',
      resave: false,
      saveUninitialized: false
  },

    mysql: {
        connectionLimit: 10,
        multipleStatements: true,
        host: 'localhost',
        user: 'root',
        password: 'usbw',
        database: 'dns_data',
        port: 3306,//3311,
      },
}

module.exports = Pass