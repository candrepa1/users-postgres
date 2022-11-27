const { findAllUsers, findUserById, createUser, updateUser, removeUser } = require("./users.controllers")

const getAllUsers = async (req, res) => {
    try {
        const users = await findAllUsers();
        res.status(200).json(users);
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

const getUserById = async (req, res) => {
    const {id} = req.params;
    try {
        const user = await findUserById(id);
        if(user) {
            res.status(200).json(user)
        } else {
            res.status(404).json({message: 'id not found'})
        }
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

const postUser = async (req, res) => {
    const {first_name, last_name, email, password, birthday} = req.body;
    try {
        const user = await createUser({first_name, last_name, email, password, birthday});
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

const patchUser = async (req, res) => {
    const {id} = req.params;
    const userInfo = req.body;
    try {
        const user = await updateUser({id, userInfo});
        if(user) {
            res.status(200).json({message: 'user has been updated'});
        } else {
            res.status(400).json({message: 'user could not be updated'})
        }
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

const deleteUser = async (req, res) => {
    const {id} = req.params;
    try {
        const user = await removeUser(id)
        if(user) {
            res.status(200).json({message: 'user was removed'})
        } else {
            res.status(400).json({message: 'user could not be removed'})
        }
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

module.exports = {
    getAllUsers, 
    getUserById, 
    postUser, 
    patchUser, 
    deleteUser,
}

