const UserDal = require("./user.dal")


class UserService {

    constructor() {
        this.userDAL = new UserDAL()
       
    }

    // Daha sonra yazılacaktır.

    findById(id) {
        const user = this.userDAL.findbyId(id);
        return user;
    }
}

module.exports = UserService