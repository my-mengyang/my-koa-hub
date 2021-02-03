const Router=require('koa-router')
const commentRouter=new Router({prefix:'/comment'})

const {
  verifyAuth,
  verifyPermission
} =require('../middleware/auth.middleware')

const {
  create,
  reply,
  update,
  remove
} =require('../controller/comment.controller')

commentRouter.post('/',verifyAuth,create)
commentRouter.post('/:commentId/reply',verifyAuth,reply)
//修改评论
commentRouter.patch('/:commentId',verifyAuth,update)
//删除
commentRouter.delete("/:commentId",verifyAuth,verifyPermission,remove)

module.exports=commentRouter