const connection=require('../app/database')

class AuthService{
  async checkResource(momentId,userId){
    const statement=`SELECT * FROM moment WHERE id=? AND user_id=?;`
    const [result]=await connection.execute(statement,[momentId,userId])
    console.log(result)
    return result.length === 0?false:true
  }
  async checkComment(){

  }
}

module.exports = new AuthService()