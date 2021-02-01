const Router=require('koa-router')

const momentRouter=new Router({prefix:'/moment'})

const {
  create,
  detail
}=require('../controller/moment.controller')

const {
  verifyAuth
}=require('../middleware/auth.middleware')

//发表心情
momentRouter.post('/',verifyAuth,create)
momentRouter.get('/:momentId',detail)


module.exports = momentRouter