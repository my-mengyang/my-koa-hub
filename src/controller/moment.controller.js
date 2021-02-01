const momentService=require('../service/moment.service')

class MomentController{
  async create(ctx,next){
    //1. 获取数据（user_id,content）
    const userId=ctx.user.id
    const content=ctx.request.body.content
    console.log(content)
    //2.将数据插入到数据库中
    const result =await momentService.create(userId,content)
    ctx.body=result
  }
  async detail(ctx,next){
    //1.获取数据（momentid）
    const momentId=ctx.params.momentId

    ctx.body='获取某一条动态的信息'
  }
}

module.exports=new MomentController()