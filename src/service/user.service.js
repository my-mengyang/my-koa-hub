const connection=require('../app/database')

class UserService{
  async create(user){
    const {name,password}=user
    const statement=`INSERT INTO users (name,password) VALUES (?,?);`
    const result =await connection.execute(statement,[name,password])

    return result[0]
    //将user存储到数据库中
    // console.log('将用户数据保存到数据库中',user)
    // return '创建用户成功'
  }
  async getUserByName(name){
    const statement=`SELECT * FROM users WHERE name =?;`
    const result=await connection.execute(statement,[name])
    return result[0]
  }
}

module.exports = new UserService()