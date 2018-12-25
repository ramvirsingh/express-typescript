
export class UserController {

    static async getAllUser() {
        console.log('||==>> in UserController()');
        try {
            return ({ "name": "test controller" });
        } catch (err) {
            throw new Error("error occured");
        }
    }
}