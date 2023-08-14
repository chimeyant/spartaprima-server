// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import UserService from 'App/Services/Utility/UserService';
import UserValidator from 'App/Validators/Utility/UserValidator';

export default class RegisterUsersController {
    public async registerUser({request,response}: HttpContextContract){
        const {name, email, phone}= request.all()


        await request.validate(UserValidator)


        const payload ={
          name:name,
          email:email,
          phone:phone
        }

        //Register Service
        const result = await UserService.registerUser(payload)

        return response.status(result.code).send(result)
    }

    public async registerUmkm({}:HttpContextContract){

    }

    public async registerByGoogle({ally,  response,auth}:HttpContextContract){
      if(await auth.check()){
        return response.notAcceptable()
      }

      return response.send(await ally.use("google").stateless().redirectUrl())
    }

}
