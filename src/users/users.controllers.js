const Users = require("../models/users.models")

const findAllUsers = async () => {
    const users = await Users.findAll();

    return users;
}

const findUserById = async (id) => {
    const user = await Users.findOne({
        where: {
            id
        }
    })
    
    return user;
}

const createUser = async (userInfo) => {
    const user = await Users.create(userInfo)

    return user;
}

const updateUser = async ({id, userInfo}) => {
    const user = await Users.update(userInfo, {
        where: {
            id
        }
    })

    return user[0];
}

const removeUser = async (id) => {
    const user = await Users.destroy({
        where: {
            id
        }
    });

    return user;
}

module.exports = {
    findAllUsers, 
    findUserById, 
    createUser, 
    updateUser, 
    removeUser,
}


