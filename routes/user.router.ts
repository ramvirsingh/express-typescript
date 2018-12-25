import { UserController } from './../controller/user.controller';
import { Request, Response, NextFunction } from 'express';


export class UserRoute {

   public routes(app): void {
      app.route('/user')
         .get(async (req: Request, res: Response) => {
           const list= await UserController.getAllUser();
          return res.status(200).json(list);
         })
   }

}