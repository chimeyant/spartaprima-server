import { MSG_FAILED_PROCESS, MSG_STORE_SUCCESS } from "App/Helpers/Lang"
import Unit from "App/Models/Unit"

export type UnitType ={
  name:string,
  alias:string,
  status:boolean
}
class UnitService {
  public async lists(){
    const model = await Unit.query().orderBy("name",'asc')

    const datas:{}[]=[]

    model.forEach(element => {
      datas.push(element.datadisplay)
    });

    return datas;

  }

  public async store(payload:UnitType){
    try {
      const model = new Unit
      model.name = payload.name
      model.alias = payload.alias
      model.status = payload.status
      await model.save()

      return {
        code:200,
        success:true,
        message: MSG_STORE_SUCCESS,
        data: model.datadisplay
      }
    } catch (error) {
      return {
        code:500,
        success:false,
        message: MSG_FAILED_PROCESS,
        error:error
      }
    }
  }

  public async show(id:string){
    const model = await Unit.findBy("uuid",id)

    return model?.datarecord
  }


}

export default new UnitService
