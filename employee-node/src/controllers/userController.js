const userService = require("../services/userService");

class updatedDataController{
    async createUser(req, res) {
        try {
            const {fname, email, phone} = req.body;
            const saveUser = await userService.createUser(fname, email, phone);
            res.json(saveUser);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async getAllUser(req, res){
        try{
           const users = await userService.getAllUser();
           res.json(users);
         }catch(error) {
            res.status(500).json({ error: error.message });
         }
    }

    async getUserById(req, res){
        const userId = req.params.id;
        try{
            const user = await userService.getUserById(userId); 
            if(!user)
             return res.status(404).json({error: "User not found"});
            res.json(user); 
        }catch(error){
            res.status(500).json({error: error.message});
        }
    }

    async updateUser(req, res) {
        const userId = req.params.id;
        const updatedData = req.body;
        try{
            const updatedUser = await userService.updateUser(userId, updatedData); 
            if(!updatedUser)
             return res.status(404).json({error: "User not found"});
            res.json(updatedUser); 
        }catch(error){
            res.status(500).json({error: error.message});
        }
    }

    async deleteUser(req, res){
        const userId = req.params.id;
        try{
            const deletedUser = await userService.deleteUser(userId); 
            if(!deletedUser)
             return res.status(404).json({error: "User not found"});
            res.json({message:"User deleted sucessfully",user:deletedUser}); 
        }catch(error){
            res.status(500).json({error: error.message});
        }
    }

};

module.exports = new updatedDataController();