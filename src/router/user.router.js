const Router=require('koa-router')

const {
  create
} =require('../controller/user.controller')

const {
  verifyUser,
  handlePassword
} =require('../middleware/user.middleware')

const userRouter=new Router({prefix:'/users'})

//如果用户名为空 或者密码为空怎么办 ？需要添加中间件进行验证
userRouter.post('/',verifyUser,handlePassword,create)

module.exports = userRouter