const Constants = {
    Users: {
        ADMIN: 99
    },
    Paths:{
        Upload:'../files/',
    },
    Ports:{
        http:9009,
        https:443
    },
    SSL:{
        Key: "./sslcert/server.key",
        Cert: "./sslcert/server.crt",
    }
}

module.exports = Constants