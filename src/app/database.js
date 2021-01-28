const mysql=require('mysql2')

const connfig=require('./config')


mysql.createPool({
host:config.MYSQL_HOST,
  port:config.MYSQL_PORT,
})