const mysql = require('mysql2')

const dbConfig = require("./config.js")



const mysqlConnection = mysql.createConnection({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB
})

mysqlConnection.connect(function (err){
    if(err){
        console.log('ERROR FATAL >>> ' + err.message + ' ||| Código de Error ' +err.code);
    }else{
        console.log(">>> Base de Datos Conectada. Servidor -> '" + dbConfig.HOST + "'")
        
    }

})

module.exports = mysqlConnection