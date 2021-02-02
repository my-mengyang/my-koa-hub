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
    //2. 根据id查询数据
    const resut=await momentService.getMomentById(momentId)

    ctx.body=resut
  }
  async list(ctx,next){
    //1. 分页获取数据
    const{offset,size}=ctx.query
    //2. 查询列表
    const result =await momentService.getMomentList(offset,size)
    ctx.body=result
  }
  async update(ctx,next){
    //获取参数
    const {momentId}=ctx.params
    const {content}=ctx.request.body
    const {id}=ctx.user
    //修改内容
    const result = await momentService.update(content,momentId)
    ctx.body=`修改内容`
  }
  async remove(ctx,next){
    //1. 获取momentid
    const {momentId}=ctx.params
    //2. 删除内容
    const result = await momentService.remove(momentId)
    ctx.body=result
  }
}

module.exports=new MomentController()